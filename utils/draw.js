import { state } from "../state.js";

export function fillCircle(cx, cy, radius, color, ctx) {
  if (!ctx) ctx = state.ctx;
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}
