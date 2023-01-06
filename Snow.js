import { state } from "./state.js";
import { getBox, is2boxCollide } from "./utils/collision.js";
import { fillCircle } from "./utils/draw.js";
import { rnd } from "./utils/math.js";

export class Snow {
  constructor(x, y, r, vx, vy) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.vx = vx;
    this.vy = vy;
    this.color = "#cecece";
    this.isBlown = false;
  }

  get box() {
    return getBox(this.x, this.y, this.r * 2, this.r * 2);
  }

  render() {
    fillCircle(this.x, this.y, this.r, this.color);
  }

  fall() {
    nextMove(this);
    constrainMe(this);
    isBlownByWind(this);
  }
}
/**
 *
 * @param {Snow} snow
 */
function isBlownByWind(snow) {
  const wind = state.wind;
  const isTouched = is2boxCollide(snow.box, wind.box);

  if (isTouched && !snow.isBlown) {
    snow.vx = wind.vx * 0.5;
    snow.isBlown = true;
  }
}

function nextMove(snow) {
  snow.x += snow.vx;
  snow.y += snow.vy;
}

/**
 *
 * @param {Snow} snow
 */
function constrainMe(snow) {
  if (snow.y >= state.canvas.height + snow.r) {
    // reset snow particle
    snow.y = -rnd.int(0, snow.r * 4);
    snow.x = rnd.int(0, state.canvas.width);
    snow.isBlown = false;
  }
}

export function initSnows() {
  const radius = 6;

  const snowParticles = [];
  for (let i = 0; i < 99; i++) {
    snowParticles.push(
      new Snow(
        rnd.int(0, state.width),
        -rnd.int(0, state.height),
        rnd.int(2, radius), //
        0,
        rnd.float(0.2, 1.2)
      )
    );
  }
  state.particles = snowParticles;
}
