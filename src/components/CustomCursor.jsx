import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const hoveredElementRef = useRef(null);

  useEffect(() => {
    // Only enable on devices with a mouse (fine pointer)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const outline = outlineRef.current;

    if (!dot || !outline) return;

    // Use refs for mutable values to avoid re-renders
    const cursor = {
      x: 0,
      y: 0,
    };

    const outlinePos = {
      x: 0,
      y: 0,
    };

    const onMouseMove = (e) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;

      // Update dot position immediately
      dot.style.transform = `translate(${cursor.x}px, ${cursor.y}px) translate(-50%, -50%)`;
    };

    const animateOutline = () => {
      let targetX = cursor.x;
      let targetY = cursor.y;

      // Magnetic Effect Logic
      if (hoveredElementRef.current && hoveredElementRef.current.isConnected) {
        const rect = hoveredElementRef.current.getBoundingClientRect();
        
        // Calculate center of the hovered element
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Apply smooth magnetic pull with adaptive strength based on distance
        const distX = centerX - cursor.x;
        const distY = centerY - cursor.y;
        const distance = Math.sqrt(distX * distX + distY * distY);
        
        // Maximum pull distance (pixels)
        const maxPullDistance = 80;
        
        if (distance < maxPullDistance) {
          // Smooth interpolation: stronger pull when closer
          const pullStrength = 1 - (distance / maxPullDistance);
          targetX = cursor.x + distX * pullStrength * 0.5;
          targetY = cursor.y + distY * pullStrength * 0.5;
        }
      } else if (hoveredElementRef.current && !hoveredElementRef.current.isConnected) {
        // Reset if element is unmounted
        hoveredElementRef.current = null;
      }

      // Smooth interpolation for the outline with responsive easing
      outlinePos.x += (targetX - outlinePos.x) * 0.12;
      outlinePos.y += (targetY - outlinePos.y) * 0.12;

      outline.style.transform = `translate(${outlinePos.x}px, ${outlinePos.y}px) translate(-50%, -50%)`;

      requestAnimationFrame(animateOutline);
    };

    window.addEventListener("mousemove", onMouseMove);
    const animationId = requestAnimationFrame(animateOutline);

    // Hover effect logic
    const handleMouseOver = (e) => {
      const target = e.target;
      
      // Check if target or any parent is interactive
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".clickable") ||
        target.closest("[role='button']") ||
        window.getComputedStyle(target).cursor === "pointer" ||
        window.getComputedStyle(target).cursor === "text";

      if (isInteractive) {
        outline.classList.add("cursor-hover");
        
        // Magnetize smaller interactive elements
        const magneticTarget = target.closest("a") || target.closest("button") || target.closest(".clickable");
        
        if (magneticTarget) {
           const rect = magneticTarget.getBoundingClientRect();
           // Magnetize if element is small enough
           if (rect.width < 200 && rect.height < 100) {
              hoveredElementRef.current = magneticTarget;
           }
        }
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".clickable") ||
        window.getComputedStyle(target).cursor === "pointer";

      if (isInteractive) {
        // Prevent flickering when moving to children
        if (hoveredElementRef.current && hoveredElementRef.current.contains(e.relatedTarget)) {
          return;
        }

        outline.classList.remove("cursor-hover");
        hoveredElementRef.current = null;
      }
    };

    const handleMouseDown = () => {
      outline.classList.add("cursor-click");
    };

    const handleMouseUp = () => {
      outline.classList.remove("cursor-click");
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className="cursor-outline" />
    </>
  );
};

export default CustomCursor;
