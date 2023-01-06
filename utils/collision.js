/**
 * @typedef {Object} tBox
 * @property {number} left
 * @property {number} right
 * @property {number} top
 * @property {number} bottom
 * @property {number} x center x
 * @property {number} y center y
 */

/**
 * @param {number} cx center x
 * @param {number} cy center y
 * @param {number} width
 * @param {number} height
 * @return {tBox}
 */
export function getBox(cx, cy, width, height) {
  const left = cx - width * 0.5;
  const right = cx + width * 0.5;
  const top = cy - height * 0.5;
  const bottom = cy + height * 0.5;

  return {
    left,
    right,
    top,
    bottom,
  };
}

/**
 *
 * @param {tBox} b1
 * @param {tBox} b2
 */
export function is2boxCollide(b1, b2) {
  if (
    b1.left > b2.right || //
    b1.top > b2.bottom ||
    b2.left > b1.right || //
    b2.top > b1.bottom
  ) {
    return false;
  } else {
    return true;
  }
}
