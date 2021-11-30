/* eslint-disable no-undef, no-unused-vars */

function Gate(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

  this.checkCollision = (object) => {
    // collision of the first gate
    if (
      object.x > this.x - this.w &&
      object.y > this.y &&
      object.y < this.y + this.h
    ) {
      teamScore1 += 1;
      updateScore();
    }

    // console.log(object.x);
    // console.log("gate", this.x - this.w);
  };

  this.draw = () => {
    noStroke();
    fill("#e5e5e5");
    rect(this.x, this.y, this.w, this.h);
  };
}
