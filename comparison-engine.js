/**
 * ComparisonEngine for Spec Ledger UI Demo
 * Handles phone comparison, filtering, sorting, and scoring
 */

class ComparisonEngine {
  constructor(phones = []) {
    this.phones = phones;
    this.filters = {};
    this.sortBy = 'score';
    this.sortDir = 'desc';
  }

  loadPhones(phones) {
    this.phones = phones.map(p => ({
      ...p,
      score: this.computeScore(p)
    }));
  }

  computeScore(phone) {
    let score = 0;
    if (phone.display) score += (phone.display.refreshRate || 60) / 120 * 20;
    if (phone.camera) score += (phone.camera.main || 12) / 200 * 25;
    if (phone.battery) score += (phone.battery.capacity || 3000) / 6000 * 20;
    if (phone.performance) score += (phone.performance.antutu || 500000) / 2000000 * 25;
    if (phone.storage) score += Math.min((phone.storage || 128) / 512, 1) * 10;
    return Math.round(score);
  }

  setFilter(key, value) {
    if (value === null || value === undefined || value === '') {
      delete this.filters[key];
    } else {
      this.filters[key] = value;
    }
  }

  clearFilters() {
    this.filters = {};
  }

  getFiltered() {
    let results = [...this.phones];
    Object.entries(this.filters).forEach(([key, value]) => {
      if (key === 'brand') {
        results = results.filter(p => p.brand?.toLowerCase().includes(value.toLowerCase()));
      } else if (key === 'minPrice') {
        results = results.filter(p => (p.price || 0) >= value);
      } else if (key === 'maxPrice') {
        results = results.filter(p => (p.price || Infinity) <= value);
      } else if (key === 'minScore') {
        results = results.filter(p => p.score >= value);
      } else if (key === 'os') {
        results = results.filter(p => p.os?.toLowerCase().includes(value.toLowerCase()));
      }
    });
    return this.sort(results);
  }

  sort(phones) {
    return phones.sort((a, b) => {
      let va = a[this.sortBy];
      let vb = b[this.sortBy];
      if (this.sortBy === 'price') {
        va = a.price || 0;
        vb = b.price || 0;
      }
      if (typeof va === 'string') va = va.toLowerCase();
      if (typeof vb === 'string') vb = vb.toLowerCase();
      if (va < vb) return this.sortDir === 'asc' ? -1 : 1;
      if (va > vb) return this.sortDir === 'asc' ? 1 : -1;
      return 0;
    });
  }

  setSort(field, dir = 'desc') {
    this.sortBy = field;
    this.sortDir = dir;
  }

  compare(ids) {
    const selected = this.phones.filter(p => ids.includes(p.id));
    const specs = ['display', 'camera', 'battery', 'performance', 'storage', 'price'];
    const comparison = {};
    specs.forEach(spec => {
      comparison[spec] = selected.map(p => ({
        id: p.id,
        name: p.name,
        value: p[spec]
      }));
    });
    return {
      phones: selected,
      comparison,
      winner: selected.reduce((best, p) => p.score > (best?.score || 0) ? p : best, null)
    };
  }

  getRecommendations(phoneId, limit = 3) {
    const target = this.phones.find(p => p.id === phoneId);
    if (!target) return [];
    return this.phones
      .filter(p => p.id !== phoneId)
      .map(p => ({
        phone: p,
        similarity: this.similarity(target, p)
      }))
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, limit)
      .map(s => s.phone);
  }

  similarity(a, b) {
    let score = 0;
    if (a.brand === b.brand) score += 0.3;
    if (Math.abs((a.price || 0) - (b.price || 0)) < 200) score += 0.2;
    if (a.os === b.os) score += 0.2;
    score += Math.min(a.score, b.score) / Math.max(a.score, b.score, 1) * 0.3;
    return score;
  }

  getStats() {
    const filtered = this.getFiltered();
    return {
      total: this.phones.length,
      filtered: filtered.length,
      avgScore: filtered.reduce((s, p) => s + p.score, 0) / (filtered.length || 1),
      brands: [...new Set(this.phones.map(p => p.brand))].length
    };
  }

  exportFilters() {
    return { ...this.filters, sortBy: this.sortBy, sortDir: this.sortDir };
  }
}

export default ComparisonEngine;
