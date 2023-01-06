import { state } from "./state.js";
import { initCanvas } from "./canvas.js";
import { initSnows } from "./Snow.js";
import { initWind, Wind } from "./Wind.js";

initCanvas();
initSnows();
initWind();

const canvas = state.canvas;
const ctx = state.ctx;

function animation() {
  // clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // render canvas
  state.particles.forEach((p) => {
    p.render();
    p.fall();
  });

  state.wind.render();
  state.wind.move();

  window.requestAnimationFrame(animation);
}

animation();
