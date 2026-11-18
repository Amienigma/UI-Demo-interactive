// DataEngine - Data management and comparison logic for Spec Ledger UI demo
// Handles phone specs, filtering, sorting, and side-by-side comparison
// Daily addition 2026-11-17

class DataEngine {
  constructor(data = []) {
    this.data = data;
    this.comparisons = [];
  }

  setData(data) {
    this.data = data;
  }

  filter(criteria) {
    return this.data.filter(item => {
      return Object.entries(criteria).every(([key, value]) => {
        if (typeof value === 'function') return value(item[key]);
        return item[key] === value;
      });
    });
  }

  sort(field, direction = 'asc') {
    return [...this.data].sort((a, b) => {
      const aVal = a[field];
      const bVal = b[field];
      if (direction === 'asc') return aVal > bVal ? 1 : -1;
      return aVal < bVal ? 1 : -1;
    });
  }

  compare(ids) {
    const items = this.data.filter(d => ids.includes(d.id));
    const comparison = {
      ids,
      items,
      differences: this.findDifferences(items)
    };
    this.comparisons.push(comparison);
    return comparison;
  }

  findDifferences(items) {
    if (items.length < 2) return {};
    const diffs = {};
    const keys = Object.keys(items[0]);
    keys.forEach(key => {
      const values = items.map(i => i[key]);
      if (new Set(values).size > 1) {
        diffs[key] = values;
      }
    });
    return diffs;
  }

  getComparisonHistory() {
    return this.comparisons;
  }

  // Export comparison
  exportComparison(comparison, format = 'json') {
    if (format === 'json') return JSON.stringify(comparison, null, 2);
    return comparison;
  }
}

export default DataEngine;

console.log('DataEngine for UI-Demo-interactive - 2026-11-17');
