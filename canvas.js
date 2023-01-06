import { state } from "./state.js";

export function initCanvas() {
  const canvas = document.querySelector("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // let draw some balls
  const ctx = canvas.getContext("2d");

  state.ctx = ctx;
  state.canvas = canvas;
}
