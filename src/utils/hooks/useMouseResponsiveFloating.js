import React, { useEffect } from 'react';

const useMouseResponsiveFloating = (
  ref,
  scaleFactor = 0.2,
  deadzoneRadius = 50
) => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const imageX = ref.current.getBoundingClientRect().left;
      const imageY = ref.current.getBoundingClientRect().top;
      const offsetX = (mouseX - imageX) * scaleFactor;
      const offsetY = (mouseY - imageY) * scaleFactor;

      const distance = Math.sqrt(offsetX ** 2 + offsetY ** 2);
      if (distance < deadzoneRadius) {
        ref.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      } else {
        ref.current.style.transform = 'translate(0, 0)';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [ref, scaleFactor, deadzoneRadius]);
};

export default useMouseResponsiveFloating;
