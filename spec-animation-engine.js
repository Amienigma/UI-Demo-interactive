/**
 * SpecAnimationEngine for UI-Demo-interactive
 * Handles animated transitions between phone specs, bar charts,
 * and comparison highlights.
 *
 * @module SpecAnimationEngine
 * @version 1.0.0
 * @date 2026-11-20
 */

class SpecAnimationEngine {
  constructor() {
    this.animations = [];
    this.running = false;
  }

  animateValue(from, to, duration, onUpdate, onComplete) {
    const start = performance.now();
    const anim = {
      from,
      to,
      duration,
      onUpdate,
      onComplete,
      start,
    };
    this.animations.push(anim);
    if (!this.running) this.tick();
    return anim;
  }

  tick() {
    this.running = true;
    const now = performance.now();
    this.animations = this.animations.filter(anim => {
      const progress = Math.min(1, (now - anim.start) / anim.duration);
      const eased = this.easeInOut(progress);
      const value = anim.from + (anim.to - anim.from) * eased;
      anim.onUpdate(value, progress);
      if (progress >= 1) {
        if (anim.onComplete) anim.onComplete();
        return false;
      }
      return true;
    });
    if (this.animations.length) {
      requestAnimationFrame(() => this.tick());
    } else {
      this.running = false;
    }
  }

  easeInOut(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  animateBars(bars, targetValues, duration = 800) {
    bars.forEach((bar, i) => {
      const from = parseFloat(bar.dataset.value) || 0;
      const to = targetValues[i] || 0;
      this.animateValue(from, to, duration, (v) => {
        bar.style.height = `${v}%`;
        bar.dataset.value = v;
      });
    });
  }

  highlightDiff(element, isBetter) {
    element.style.transition = 'background 0.3s';
    element.style.background = isBetter ? 'rgba(0,255,150,0.3)' : 'rgba(255,100,100,0.3)';
    setTimeout(() => {
      element.style.background = '';
    }, 1500);
  }

  clear() {
    this.animations = [];
    this.running = false;
  }

  getStats() {
    return {
      activeAnimations: this.animations.length,
      running: this.running,
    };
  }
}

export default SpecAnimationEngine;
if (typeof module !== 'undefined') module.exports = SpecAnimationEngine;
