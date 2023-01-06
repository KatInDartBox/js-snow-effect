import { state } from "./state.js";
import { getBox } from "./utils/collision.js";
import { rnd } from "./utils/math.js";

export class Wind {
  x;
  y;
  width;
  height;
  vx;
  vy;
  constructor() {
    resetWind(this);
  }

  get box() {
    return getBox(this.x, this.y, this.width, this.height);
  }

  render() {
    const ctx = state.ctx;

    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.rect(
      this.x - this.width * 0.5, //
      this.y - this.height * 0.5,
      this.width,
      this.height
    );
    ctx.fill();
    ctx.closePath();
  }
  move() {
    nextMove(this);
    constrainMe(this);
  }
}

export function initWind() {
  const wind = new Wind();
  state.wind = wind;
}

function resetWind(wind) {
  wind.width = rnd.int(120, 240);
  wind.height = rnd.int(170, 350);
  wind.x = -rnd.int(0, state.width + wind.width);
  wind.y = rnd.int(0, state.height);
  wind.color = "#1d5fdb71";
  wind.speed = rnd.float(0.5, 1.7) * 3;
  wind.vx = wind.speed;
  wind.vy = 0;
}

function nextMove(wind) {
  wind.x += wind.vx;
  wind.y += wind.vy;
}
/** @param {Wind} wind */
function constrainMe(wind) {
  if (wind.x >= state.width + wind.width * 0.5) {
    resetWind(wind);
  }
}
