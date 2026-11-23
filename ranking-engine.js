/**
 * RankingEngine for Spec Ledger / UI-Demo-interactive
 * Ranks phones by specs, weighted scoring, comparison matrices, and recommendation algorithms.
 * Supports multi-criteria decision analysis for device selection.
 * Added 2026-11-22 as daily code addition.
 */

class RankingEngine {
  constructor() {
    this.criteria = new Map();
    this.weights = new Map();
    this.devices = [];
    this.rankings = [];
    this.history = [];
    this.debug = false;
  }

  init() {
    this.setupDefaultCriteria();
    console.log('RankingEngine initialized');
  }

  setupDefaultCriteria() {
    this.addCriterion('performance', { weight: 0.25, higherIsBetter: true });
    this.addCriterion('display', { weight: 0.2, higherIsBetter: true });
    this.addCriterion('camera', { weight: 0.2, higherIsBetter: true });
    this.addCriterion('battery', { weight: 0.15, higherIsBetter: true });
    this.addCriterion('price', { weight: 0.15, higherIsBetter: false });
    this.addCriterion('storage', { weight: 0.05, higherIsBetter: true });
  }

  addCriterion(name, config) {
    this.criteria.set(name, {
      name,
      weight: config.weight || 0.1,
      higherIsBetter: config.higherIsBetter !== false,
      min: config.min || 0,
      max: config.max || 100
    });
    this.weights.set(name, config.weight || 0.1);
  }

  setWeight(criterion, weight) {
    if (this.criteria.has(criterion)) {
      this.criteria.get(criterion).weight = weight;
      this.weights.set(criterion, weight);
      this.normalizeWeights();
    }
  }

  private normalizeWeights() {
    const total = Array.from(this.weights.values()).reduce((sum, w) => sum + w, 0);
    if (total === 0) return;
    for (const [name, weight] of this.weights) {
      this.weights.set(name, weight / total);
      this.criteria.get(name).weight = weight / total;
    }
  }

  addDevice(device) {
    this.devices.push({
      id: device.id || `device-${this.devices.length}`,
      name: device.name,
      specs: device.specs || {},
      scores: {},
      totalScore: 0
    });
  }

  setDevices(devices) {
    this.devices = devices.map(d => ({
      id: d.id || `device-${Math.random().toString(36).slice(2, 7)}`,
      name: d.name,
      specs: d.specs || {},
      scores: {},
      totalScore: 0
    }));
  }

  calculateScores() {
    for (const device of this.devices) {
      let total = 0;
      for (const [name, criterion] of this.criteria) {
        const rawValue = device.specs[name] || 0;
        const normalized = this.normalizeValue(rawValue, criterion);
        const score = normalized * criterion.weight;
        device.scores[name] = score;
        total += score;
      }
      device.totalScore = total;
    }
    this.rankings = [...this.devices].sort((a, b) => b.totalScore - a.totalScore);
    this.history.push({
      timestamp: Date.now(),
      rankings: this.rankings.map(d => ({ id: d.id, score: d.totalScore }))
    });
    return this.rankings;
  }

  private normalizeValue(value, criterion) {
    const range = criterion.max - criterion.min;
    if (range === 0) return 0.5;
    let normalized = (value - criterion.min) / range;
    normalized = Math.max(0, Math.min(1, normalized));
    if (!criterion.higherIsBetter) {
      normalized = 1 - normalized;
    }
    return normalized;
  }

  getRankings() {
    if (this.rankings.length === 0) this.calculateScores();
    return this.rankings;
  }

  getTopN(n = 5) {
    return this.getRankings().slice(0, n);
  }

  compareDevices(id1, id2) {
    const d1 = this.devices.find(d => d.id === id1);
    const d2 = this.devices.find(d => d.id === id2);
    if (!d1 || !d2) return null;
    const comparison = {};
    for (const [name] of this.criteria) {
      comparison[name] = {
        device1: d1.scores[name] || 0,
        device2: d2.scores[name] || 0,
        winner: (d1.scores[name] || 0) > (d2.scores[name] || 0) ? d1.name : d2.name
      };
    }
    return {
      device1: d1.name,
      device2: d2.name,
      comparison,
      overallWinner: d1.totalScore > d2.totalScore ? d1.name : d2.name
    };
  }

  recommendForBudget(maxPrice) {
    return this.getRankings().filter(d => (d.specs.price || Infinity) <= maxPrice);
  }

  recommendForUseCase(useCase) {
    const useCaseWeights = {
      gaming: { performance: 0.4, display: 0.25, battery: 0.2, camera: 0.1, price: 0.05 },
      photography: { camera: 0.4, display: 0.25, performance: 0.15, battery: 0.1, price: 0.1 },
      battery: { battery: 0.4, performance: 0.2, display: 0.15, price: 0.15, camera: 0.1 },
      budget: { price: 0.4, performance: 0.2, battery: 0.2, display: 0.1, camera: 0.1 }
    };
    const weights = useCaseWeights[useCase] || {};
    const originalWeights = new Map(this.weights);
    for (const [name, weight] of Object.entries(weights)) {
      this.setWeight(name, weight);
    }
    const result = this.calculateScores();
    this.weights = originalWeights;
    for (const [name, weight] of originalWeights) {
      this.criteria.get(name).weight = weight;
    }
    return result;
  }

  getStats() {
    return {
      deviceCount: this.devices.size || this.devices.length,
      criteriaCount: this.criteria.size,
      rankingCount: this.rankings.length,
      historyLength: this.history.length
    };
  }

  exportRankings() {
    return JSON.stringify({
      rankings: this.getRankings().map(d => ({
        rank: this.rankings.indexOf(d) + 1,
        name: d.name,
        score: d.totalScore.toFixed(3),
        scores: d.scores
      })),
      criteria: Array.from(this.criteria.values())
    }, null, 2);
  }

  reset() {
    this.devices = [];
    this.rankings = [];
    this.history = [];
  }

  version = '1.0.0';
  description = 'Multi-criteria ranking engine for Spec Ledger phone comparisons';
}

export default RankingEngine;
