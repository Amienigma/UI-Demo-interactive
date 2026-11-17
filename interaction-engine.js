/**
 * InteractionEngine - Advanced interaction handling, gesture recognition, and comparison logic
 * for Spec Ledger interactive phone comparison demo.
 * 
 * Daily code addition 2026-11-16
 */

class InteractionEngine {
  constructor() {
    this.interactions = new Map();
    this.gestures = new Map();
    this.comparisons = [];
    this.listeners = new Set();
  }

  registerInteraction(id, config) {
    const interaction = {
      id,
      type: config.type || 'click',
      target: config.target,
      handler: config.handler,
      enabled: true,
      metadata: config.metadata || {}
    };
    this.interactions.set(id, interaction);
    return interaction;
  }

  triggerInteraction(id, event) {
    const interaction = this.interactions.get(id);
    if (!interaction || !interaction.enabled) return null;
    const result = interaction.handler ? interaction.handler(event) : null;
    this.notifyListeners({ type: 'interaction', id, result });
    return result;
  }

  registerGesture(id, type, callback) {
    this.gestures.set(id, { type, callback, active: false });
  }

  detectGesture(points) {
    // Simplified gesture detection
    if (points.length < 2) return null;
    const start = points[0];
    const end = points[points.length - 1];
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 20) return 'tap';
    if (Math.abs(dx) > Math.abs(dy)) {
      return dx > 0 ? 'swipe-right' : 'swipe-left';
    } else {
      return dy > 0 ? 'swipe-down' : 'swipe-up';
    }
  }

  handleGesture(id, points) {
    const gesture = this.gestures.get(id);
    if (!gesture) return;
    const detected = this.detectGesture(points);
    if (detected && gesture.callback) {
      gesture.callback(detected, points);
    }
  }

  // Comparison logic for phone specs
  addComparison(phoneA, phoneB, criteria) {
    const comparison = {
      id: `cmp_${Date.now()}`,
      phoneA,
      phoneB,
      criteria,
      scores: this.calculateScores(phoneA, phoneB, criteria),
      created: Date.now()
    };
    this.comparisons.push(comparison);
    return comparison;
  }

  calculateScores(a, b, criteria) {
    const scores = {};
    criteria.forEach(crit => {
      const valA = a[crit] || 0;
      const valB = b[crit] || 0;
      scores[crit] = {
        a: valA,
        b: valB,
        winner: valA > valB ? 'A' : valB > valA ? 'B' : 'tie',
        difference: Math.abs(valA - valB)
      };
    });
    return scores;
  }

  getComparisons(limit = 10) {
    return this.comparisons.slice(-limit);
  }

  clearComparisons() {
    this.comparisons = [];
  }

  addListener(callback) {
    this.listeners.add(callback);
  }

  removeListener(callback) {
    this.listeners.delete(callback);
  }

  notifyListeners(event) {
    this.listeners.forEach(cb => {
      try { cb(event); } catch (e) { console.error(e); }
    });
  }

  enableInteraction(id) {
    const i = this.interactions.get(id);
    if (i) i.enabled = true;
  }

  disableInteraction(id) {
    const i = this.interactions.get(id);
    if (i) i.enabled = false;
  }

  getStats() {
    return {
      interactions: this.interactions.size,
      gestures: this.gestures.size,
      comparisons: this.comparisons.length,
      listeners: this.listeners.size
    };
  }
}

function createInteractionEngine() {
  return new InteractionEngine();
}

// Default gesture handlers
function registerDefaultGestures(engine) {
  engine.registerGesture('main', 'swipe', (type, points) => {
    console.log(`Detected ${type} gesture`);
  });
}

// Spec comparison helpers
function comparePhones(engine, phone1, phone2) {
  const criteria = ['screen', 'battery', 'camera', 'processor', 'ram'];
  return engine.addComparison(phone1, phone2, criteria);
}

function generateComparisonReport(comparison) {
  const winners = Object.values(comparison.scores).filter(s => s.winner !== 'tie');
  const aWins = winners.filter(s => s.winner === 'A').length;
  const bWins = winners.filter(s => s.winner === 'B').length;
  return {
    ...comparison,
    summary: {
      aWins,
      bWins,
      winner: aWins > bWins ? 'A' : bWins > aWins ? 'B' : 'tie'
    }
  };
}

module.exports = {
  InteractionEngine,
  createInteractionEngine,
  registerDefaultGestures,
  comparePhones,
  generateComparisonReport
};

// End of InteractionEngine
