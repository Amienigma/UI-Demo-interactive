/**
 * VisualizationEngine for UI-Demo-interactive Spec Ledger
 * Charts, comparison visuals, animated transitions,
 * and interactive data displays for phone specs.
 */

class VisualizationEngine {
  constructor() {
    this.charts = new Map();
    this.animations = [];
  }

  createBarChart(id, data, options = {}) {
    const chart = {
      id,
      type: 'bar',
      data,
      options: { width: 400, height: 300, ...options },
      rendered: false
    };
    this.charts.set(id, chart);
    return chart;
  }

  createRadarChart(id, categories, series) {
    const chart = {
      id,
      type: 'radar',
      categories,
      series,
      options: {}
    };
    this.charts.set(id, chart);
    return chart;
  }

  createComparisonView(id, left, right, metrics) {
    const view = {
      id,
      type: 'comparison',
      left,
      right,
      metrics,
      highlights: this.computeHighlights(left, right, metrics)
    };
    this.charts.set(id, view);
    return view;
  }

  computeHighlights(left, right, metrics) {
    return metrics.map(m => {
      const lv = left[m] || 0;
      const rv = right[m] || 0;
      return {
        metric: m,
        winner: lv > rv ? 'left' : rv > lv ? 'right' : 'tie',
        delta: Math.abs(lv - rv)
      };
    });
  }

  animateValue(from, to, duration = 500, onUpdate) {
    const start = performance.now();
    const anim = {
      start,
      duration,
      from,
      to,
      onUpdate,
      id: Date.now()
    };
    this.animations.push(anim);
    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = t * (2 - t); // ease-out
      const value = from + (to - from) * eased;
      onUpdate(value);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    return anim;
  }

  // Advanced
  generateSpecBars(phones) {
    return phones.map(p => ({
      name: p.name,
      bars: Object.entries(p.specs || {}).map(([k, v]) => ({ key: k, value: Number(v) || 0 }))
    }));
  }

  colorScale(value, min = 0, max = 100) {
    const ratio = (value - min) / (max - min || 1);
    const r = Math.floor(255 * (1 - ratio));
    const g = Math.floor(255 * ratio);
    return `rgb(${r}, ${g}, 100)`;
  }

  exportSVG(chartId) {
    const chart = this.charts.get(chartId);
    if (!chart) return '';
    // Placeholder SVG generation
    return `<svg width="400" height="300"><!-- ${chart.type} chart --></svg>`;
  }

  listCharts() {
    return Array.from(this.charts.keys());
  }

  clear() {
    this.charts.clear();
    this.animations = [];
  }

  // End of VisualizationEngine
}

export function createVisualizationEngine() {
  return new VisualizationEngine();
}

export default VisualizationEngine;
