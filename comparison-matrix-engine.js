/**
 * ComparisonMatrixEngine for UI-Demo-interactive
 * Builds interactive comparison matrices for phone specs,
 * with sorting, filtering, highlighting differences, and export.
 * 
 * @module ComparisonMatrixEngine
 * @version 1.0.0
 * @date 2026-11-19
 */

class ComparisonMatrixEngine {
  constructor() {
    this.devices = [];
    this.specs = [];
    this.highlightDiffs = true;
  }

  addDevice(device) {
    this.devices.push(device);
    return this;
  }

  setSpecs(specs) {
    this.specs = specs;
    return this;
  }

  buildMatrix() {
    const matrix = {
      headers: ['Spec', ...this.devices.map(d => d.name)],
      rows: [],
    };
    for (const spec of this.specs) {
      const row = [spec.label];
      const values = this.devices.map(d => d.specs[spec.key] ?? '—');
      row.push(...values);
      matrix.rows.push({
        key: spec.key,
        cells: row,
        isDifferent: new Set(values).size > 1,
      });
    }
    return matrix;
  }

  sortBy(specKey, ascending = true) {
    this.devices.sort((a, b) => {
      const va = a.specs[specKey];
      const vb = b.specs[specKey];
      if (va == null) return 1;
      if (vb == null) return -1;
      const cmp = va > vb ? 1 : va < vb ? -1 : 0;
      return ascending ? cmp : -cmp;
    });
    return this;
  }

  filterDevices(predicate) {
    this.devices = this.devices.filter(predicate);
    return this;
  }

  exportCSV() {
    const matrix = this.buildMatrix();
    const lines = [matrix.headers.join(',')];
    matrix.rows.forEach(r => lines.push(r.cells.join(',')));
    return lines.join('\n');
  }

  getDifferences() {
    return this.buildMatrix().rows.filter(r => r.isDifferent);
  }
}

module.exports = ComparisonMatrixEngine;
