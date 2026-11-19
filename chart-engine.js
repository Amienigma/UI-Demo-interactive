/**
 * ChartEngine for Spec Ledger / UI-Demo-interactive
 * Renders comparison charts, radar plots, and animated bar/line
 * visualizations for phone spec demos.
 * 
 * @version 1.0.0
 * @date 2026-11-18
 */

class ChartEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.datasets = [];
    this.options = { animate: true, duration: 800 };
  }

  setData(labels, datasets) {
    this.labels = labels;
    this.datasets = datasets;
  }

  drawBarChart() {
    const { ctx, canvas, labels, datasets } = this;
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    const barWidth = (w / labels.length) * 0.6;
    const max = Math.max(...datasets.flatMap((d) => d.data));
    datasets.forEach((ds, di) => {
      ctx.fillStyle = ds.color || `hsl(${di * 60}, 70%, 55%)`;
      ds.data.forEach((val, i) => {
        const x = (i + 0.2 + di * 0.3) * (w / labels.length);
        const barH = (val / max) * (h - 40);
        ctx.fillRect(x, h - barH - 20, barWidth / datasets.length, barH);
      });
    });
    // labels
    ctx.fillStyle = "#888";
    ctx.font = "12px sans-serif";
    labels.forEach((label, i) => {
      ctx.fillText(label, (i + 0.3) * (w / labels.length), h - 4);
    });
  }

  drawRadar(centerX, centerY, radius, values, labels) {
    const { ctx } = this;
    const n = values.length;
    ctx.beginPath();
    for (let i = 0; i < n; i++) {
      const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
      const r = radius * (values[i] / 100);
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = "rgba(100, 200, 255, 0.3)";
    ctx.fill();
    ctx.strokeStyle = "#4af";
    ctx.stroke();
  }

  animateTo(targetValues, duration = 600) {
    // Simple RAF animation placeholder
    const start = performance.now();
    const from = this.datasets[0]?.data || [];
    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = t * (2 - t);
      this.datasets[0].data = from.map((v, i) => v + (targetValues[i] - v) * eased);
      this.drawBarChart();
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
}

if (typeof module !== "undefined") module.exports = ChartEngine;
