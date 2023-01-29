let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let rect: any;

// Sets initial values for canvas
export const initializeCanvas = () => {
  canvas = document.getElementById('canvas') as HTMLCanvasElement;
  ctx = canvas.getContext("2d");
  rect = canvas.getBoundingClientRect();
  ctx.canvas.width = canvas.clientWidth;
  ctx.canvas.height = canvas.clientHeight;
};
