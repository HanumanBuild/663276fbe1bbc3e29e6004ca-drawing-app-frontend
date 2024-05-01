import React, { useEffect, useRef } from 'react';

export const Canvas = React.forwardRef((props, ref) => {
  useEffect(() => {
    const canvas = ref.current;
    const context = canvas.getContext('2d');

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mousemove', draw);

    let isDrawing = false;

    function startDrawing(e) {
      isDrawing = true;
      draw(e);
    }

    function stopDrawing() {
      isDrawing = false;
      context.beginPath();
    }

    function draw(e) {
      if (!isDrawing) return;
      context.lineWidth = 5;
      context.lineCap = 'round';
      context.strokeStyle = 'black';

      context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      context.stroke();
      context.beginPath();
      context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mousemove', draw);
    };
  }, [ref]);

  return <canvas ref={ref} width={800} height={600} className="canvas"></canvas>;
});