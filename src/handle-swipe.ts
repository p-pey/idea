enum directions {
  left = "left",
  right = "right",
  top = "top",
  down = "down"
}
const startPoint = 0
let touchStartX = 0;
let touchStartY = 0;
let touchStopX = 0;
let touchStopY = 0;
let dir : keyof typeof directions | null = null;

type SwipeType = 'start' | 'move' | 'end';

export default function handleSwipe(step: SwipeType, e?: TouchEvent) {
  function makeNum (input?:number) : number {
    return input ?? startPoint
  }
  if (step === 'start') {
    touchStartX = makeNum(e?.targetTouches[0].clientX);
    touchStartY = makeNum(e?.targetTouches[0].clientY);
  }

  if (step === 'move') {
    touchStopX = makeNum(e?.targetTouches[0].clientX);
    touchStopY = makeNum(e?.targetTouches[0].clientY);
  }

  if (step === 'end') {
    if (touchStopX !== startPoint) {
      if (touchStartX - touchStopX > 75) dir = directions.left;
      if (touchStartX - touchStopX < -75) dir = directions.right;
    }

    if (touchStopY !== startPoint) {
      if (touchStartY - touchStopY > 75) dir = directions.top;
      if (touchStartY - touchStopY < -75) dir = directions.down;
    }

    return new Promise((resolve) => {
      resolve(dir);

      touchStartX = startPoint;
      touchStartY = startPoint;
      touchStopX = startPoint;
      touchStopY = startPoint;
      dir = null;
    });
  }
}
