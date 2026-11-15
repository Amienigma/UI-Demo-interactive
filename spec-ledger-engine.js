/**
 * SpecLedgerEngine for Spec Ledger interactive phone comparison
 * Dynamic spec tables, filtering, and comparison logic.
 * Daily addition 2026-11-14.
 */

class SpecLedgerEngine {
  constructor(phones) {
    this.phones = phones || [];
    this.selected = [];
    this.filters = {};
  }

  addPhone(phone) {
    this.phones.push(phone);
  }

  selectForCompare(id) {
    if (this.selected.length < 3 && !this.selected.includes(id)) {
      this.selected.push(id);
    }
  }

  clearSelection() {
    this.selected = [];
  }

  getComparison() {
    return this.phones.filter(p => this.selected.includes(p.id));
  }

  filterBy(criteria) {
    this.filters = { ...this.filters, ...criteria };
    return this.phones.filter(p => {
      return Object.entries(this.filters).every(([key, value]) => {
        if (!value) return true;
        return String(p[key] || '').toLowerCase().includes(String(value).toLowerCase());
      });
    });
  }

  sortBy(field, ascending = true) {
    return [...this.phones].sort((a, b) => {
      const va = a[field] || 0;
      const vb = b[field] || 0;
      return ascending ? (va > vb ? 1 : -1) : (va < vb ? 1 : -1);
    });
  }
}

export { SpecLedgerEngine };

console.log('SpecLedgerEngine ready');
