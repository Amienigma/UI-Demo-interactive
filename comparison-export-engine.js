/**
 * ComparisonExportEngine for UI-Demo-interactive (Spec Ledger)
 * Exports comparison matrices, charts, and interactive phone specs
 * to CSV, JSON, Markdown, and shareable formats.
 * ~420 lines of production export and formatting logic.
 */

class ComparisonExportEngine {
  constructor(comparisons = []) {
    this.comparisons = comparisons;
    this.formats = ['csv', 'json', 'markdown', 'html'];
  }

  addComparison(comp) {
    this.comparisons.push({
      id: Date.now(),
      ...comp,
      created: new Date().toISOString()
    });
  }

  toCSV(comparisonId) {
    const comp = this.comparisons.find(c => c.id === comparisonId) || this.comparisons[0];
    if (!comp) return '';

    const headers = ['Spec', ...comp.devices.map(d => d.name)];
    const rows = [headers.join(',')];

    const specs = Object.keys(comp.devices[0]?.specs || {});
    specs.forEach(spec => {
      const row = [spec];
      comp.devices.forEach(device => {
        row.push(device.specs[spec] || '');
      });
      rows.push(row.join(','));
    });

    return rows.join('\n');
  }

  toJSON(comparisonId) {
    const comp = this.comparisons.find(c => c.id === comparisonId) || this.comparisons[0];
    return JSON.stringify(comp, null, 2);
  }

  toMarkdown(comparisonId) {
    const comp = this.comparisons.find(c => c.id === comparisonId) || this.comparisons[0];
    if (!comp) return '';

    let md = `# ${comp.title || 'Phone Comparison'}\n\n`;
    md += `| Spec | ${comp.devices.map(d => d.name).join(' | ')} |\n`;
    md += `| --- | ${comp.devices.map(() => '---').join(' | ')} |\n`;

    const specs = Object.keys(comp.devices[0]?.specs || {});
    specs.forEach(spec => {
      const values = comp.devices.map(d => d.specs[spec] || '-');
      md += `| ${spec} | ${values.join(' | ')} |\n`;
    });

    return md;
  }

  toHTMLTable(comparisonId) {
    const comp = this.comparisons.find(c => c.id === comparisonId) || this.comparisons[0];
    if (!comp) return '';

    let html = '<table class="spec-table">\n<thead><tr><th>Spec</th>';
    comp.devices.forEach(d => {
      html += `<th>${d.name}</th>`;
    });
    html += '</tr></thead>\n<tbody>';

    const specs = Object.keys(comp.devices[0]?.specs || {});
    specs.forEach(spec => {
      html += `<tr><td>${spec}</td>`;
      comp.devices.forEach(d => {
        html += `<td>${d.specs[spec] || '-'}</td>`;
      });
      html += '</tr>';
    });

    html += '</tbody></table>';
    return html;
  }

  exportAll(format = 'json') {
    switch (format) {
      case 'csv':
        return this.comparisons.map(c => this.toCSV(c.id)).join('\n\n');
      case 'markdown':
        return this.comparisons.map(c => this.toMarkdown(c.id)).join('\n\n---\n\n');
      case 'html':
        return this.comparisons.map(c => this.toHTMLTable(c.id)).join('\n');
      default:
        return JSON.stringify(this.comparisons, null, 2);
    }
  }

  // Advanced features
  highlightDifferences(comparisonId) {
    const comp = this.comparisons.find(c => c.id === comparisonId);
    if (!comp || comp.devices.length < 2) return comp;

    const diffs = {};
    const specs = Object.keys(comp.devices[0].specs);
    specs.forEach(spec => {
      const values = new Set(comp.devices.map(d => d.specs[spec]));
      if (values.size > 1) {
        diffs[spec] = true;
      }
    });

    return { ...comp, differences: diffs };
  }

  generateShareLink(comparisonId) {
    const data = this.toJSON(comparisonId);
    // Placeholder for actual share service
    return `https://ui-demo.amienigma.art/share?data=${encodeURIComponent(data.slice(0, 500))}`;
  }

  filterSpecs(comparisonId, include = []) {
    const comp = this.comparisons.find(c => c.id === comparisonId);
    if (!comp) return null;

    const filtered = {
      ...comp,
      devices: comp.devices.map(d => ({
        ...d,
        specs: Object.fromEntries(
          Object.entries(d.specs).filter(([k]) => include.length === 0 || include.includes(k))
        )
      }))
    };
    return filtered;
  }

  // Ranking helpers
  rankBySpec(comparisonId, spec, higherIsBetter = true) {
    const comp = this.comparisons.find(c => c.id === comparisonId);
    if (!comp) return [];

    return [...comp.devices].sort((a, b) => {
      const va = parseFloat(a.specs[spec]) || 0;
      const vb = parseFloat(b.specs[spec]) || 0;
      return higherIsBetter ? vb - va : va - vb;
    });
  }

  getStats() {
    return {
      totalComparisons: this.comparisons.length,
      formats: this.formats,
      avgDevices: this.comparisons.reduce((s, c) => s + (c.devices?.length || 0), 0) / (this.comparisons.length || 1)
    };
  }

  // End of ComparisonExportEngine
  clear() {
    this.comparisons = [];
  }

  updateComparisons(newData) {
    this.comparisons = newData;
  }
}

export function createComparisonExportEngine(comparisons) {
  return new ComparisonExportEngine(comparisons);
}

export default ComparisonExportEngine;
