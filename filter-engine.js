/**
 * FilterEngine for Spec Ledger / UI-Demo-interactive
 * Dynamic filtering, sorting, and facet selection for phone comparison UI.
 */

class FilterEngine {
  constructor() {
    this.filters = new Map();
    this.active = new Set();
    this.sortBy = 'name';
    this.sortDir = 'asc';
  }

  addFilter(key, predicate) {
    this.filters.set(key, predicate);
  }

  activate(key) {
    if (this.filters.has(key)) this.active.add(key);
  }

  deactivate(key) {
    this.active.delete(key);
  }

  toggle(key) {
    if (this.active.has(key)) this.deactivate(key);
    else this.activate(key);
  }

  apply(items) {
    let result = [...items];
    for (const key of this.active) {
      const pred = this.filters.get(key);
      if (pred) result = result.filter(pred);
    }
    return this.sort(result);
  }

  sort(items) {
    const dir = this.sortDir === 'asc' ? 1 : -1;
    return items.sort((a, b) => {
      const va = a[this.sortBy];
      const vb = b[this.sortBy];
      if (va < vb) return -1 * dir;
      if (va > vb) return 1 * dir;
      return 0;
    });
  }

  setSort(field, direction = 'asc') {
    this.sortBy = field;
    this.sortDir = direction;
  }

  getActiveFilters() {
    return Array.from(this.active);
  }

  clear() {
    this.active.clear();
  }

  // Facet helpers
  generateFacets(items, field) {
    const counts = {};
    for (const item of items) {
      const val = item[field];
      if (val != null) counts[val] = (counts[val] || 0) + 1;
    }
    return Object.entries(counts).map(([value, count]) => ({ value, count }));
  }

  filterByRange(items, field, min, max) {
    return items.filter(i => {
      const v = i[field];
      return v >= min && v <= max;
    });
  }

  search(items, query, fields = ['name', 'specs']) {
    const q = query.toLowerCase();
    return items.filter(item =>
      fields.some(f => String(item[f] || '').toLowerCase().includes(q))
    );
  }

  getStats(items) {
    return {
      total: items.length,
      filtered: this.apply(items).length,
      activeFilters: this.active.size
    };
  }
}

module.exports = FilterEngine;
