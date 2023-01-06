export const state = {
  /** @type {HTMLCanvasElement} */
  canvas: undefined,
  /** @type {CanvasRenderingContext2D} */
  ctx: undefined,

  get width() {
    return state.canvas.width;
  },
  get height() {
    return state.canvas.height;
  },
  /** @type {import('./Wind.js').Wind} */
  wind: undefined,
  /** @type {import('./Snow.js').Snow[]} */
  particles: [],
};
