// задача 1
function exercise1() {
  let canvas = document.getElementById("draw");
  let ctx = canvas.getContext("2d");

  ctx.fillStyle = "#4fff5e";
  ctx.strokeStyle = "#080808";
  ctx.lineWidth = 1;

  ctx.moveTo(50, 0);
  ctx.lineTo(0, 50);

  ctx.moveTo(50, 0);
  ctx.lineTo(100, 50);

  ctx.moveTo(100, 50);
  ctx.lineTo(0, 50);

  ctx.stroke();
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();

  ctx.fillStyle = "#4fff5e";
  ctx.strokeStyle = "#080808";
  ctx.lineWidth = 1;

  ctx.moveTo(100, 50);
  ctx.lineTo(150, 0);

  ctx.moveTo(200, 50);
  ctx.lineTo(150, 0);

  ctx.moveTo(100, 50);
  ctx.lineTo(200, 50);

  ctx.stroke();
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
}
exercise1();

// задача 2
function exercise2() {
  let canvas = document.getElementById("draw2");
  let ctx = canvas.getContext("2d");

  ctx.moveTo(50, 0);
  ctx.lineTo(50, 50);

  ctx.moveTo(50, 50);
  ctx.lineTo(100, 50);

  ctx.moveTo(100, 50);
  ctx.lineTo(50, 0);

  ctx.stroke();
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();

  ctx.moveTo(50, 0);
  ctx.lineTo(100, 0);

  ctx.moveTo(100, 0);
  ctx.lineTo(100, 50);

  ctx.stroke();
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
}
exercise2();

//задача 3
function exercise3() {
  let canvas = document.getElementById("draw3");
  let ctx = canvas.getContext("2d");

  ctx.moveTo(50, 50);
  ctx.lineTo(0, 100);

  ctx.moveTo(50, 50);
  ctx.lineTo(100, 100);

  ctx.moveTo(0, 100);
  ctx.lineTo(100, 100);

  ctx.stroke();
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();

  ctx.moveTo(0, 100);
  ctx.lineTo(0, 200);

  ctx.moveTo(0, 200);
  ctx.lineTo(100, 200);

  ctx.moveTo(100, 200);
  ctx.lineTo(100, 100);

  ctx.stroke();
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
};

exercise3();
