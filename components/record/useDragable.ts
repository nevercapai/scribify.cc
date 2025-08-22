// useDraggable.js - Vue 3 Composition API Hook
import { ref, onMounted, onUnmounted, reactive, computed } from "vue";

export default function useDraggable(options = {}) {
  const { snapThreshold = 20, snapEdgeOffset = 5 } = options;

  const elementRef = ref(null);
  const position = reactive({ x: 0, y: 0 });
  const isDragging = ref(false);
  const dragStart = reactive({ x: 0, y: 0 });
  const initialPosition = reactive({ x: 0, y: 0 });

  // Track window dimensions
  const windowDimensions = reactive({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // Apply snapping logic
  const applySnapping = (x, y, elementWidth, elementHeight) => {
    const rightBoundary = windowDimensions.width - elementWidth;
    const bottomBoundary = windowDimensions.height - elementHeight;

    let snappedX = x;
    let snappedY = y;

    // Snap to left edge
    if (x < snapThreshold) {
      snappedX = snapEdgeOffset;
    }
    // Snap to right edge
    else if (x > rightBoundary - snapThreshold) {
      snappedX = rightBoundary - snapEdgeOffset;
    }

    // Snap to top edge
    if (y < snapThreshold) {
      snappedY = snapEdgeOffset;
    }
    // Snap to bottom edge
    else if (y > bottomBoundary - snapThreshold) {
      snappedY = bottomBoundary - snapEdgeOffset;
    }

    return { x: snappedX, y: snappedY };
  };

  // Handle start of drag
  const handleDragStart = (clientX, clientY) => {
    if (!elementRef.value) return;

    isDragging.value = true;
    dragStart.x = clientX;
    dragStart.y = clientY;
    initialPosition.x = position.x;
    initialPosition.y = position.y;

    // Prevent text selection during drag
    document.body.style.userSelect = "none";
  };

  // Handle drag movement
  const handleDragMove = (clientX, clientY) => {
    if (!isDragging.value || !elementRef.value) return;

    const deltaX = clientX - dragStart.x;
    const deltaY = clientY - dragStart.y;

    const newX = initialPosition.x + deltaX;
    const newY = initialPosition.y + deltaY;

    // Get element dimensions
    const elementWidth = elementRef.value.offsetWidth;
    const elementHeight = elementRef.value.offsetHeight;

    // Apply boundaries
    const boundedX = Math.max(
      0,
      Math.min(newX, windowDimensions.width - elementWidth)
    );
    const boundedY = Math.max(
      0,
      Math.min(newY, windowDimensions.height - elementHeight)
    );

    // Apply snapping
    const { x: snappedX, y: snappedY } = applySnapping(
      boundedX,
      boundedY,
      elementWidth,
      elementHeight
    );

    position.x = snappedX;
    position.y = snappedY;
  };

  // Handle end of drag
  const handleDragEnd = () => {
    if (!isDragging.value) return;

    isDragging.value = false;
    document.body.style.userSelect = "";
  };

  // Mouse event handlers
  const handleMouseMove = (e) => handleDragMove(e.clientX, e.clientY);
  const handleMouseUp = () => handleDragEnd();

  // Touch event handlers
  const handleTouchMove = (e) => {
    if (e.cancelable) {
      e.preventDefault(); // Prevent scrolling
    }
    const touch = e.touches[0];
    handleDragMove(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = () => handleDragEnd();

  // Initialize event listeners
  onMounted(() => {
    // Handle window resize
    const handleResize = () => {
      windowDimensions.width = window.innerWidth;
      windowDimensions.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Initialize position to center bottom
    if (elementRef.value) {
      const elementWidth = elementRef.value.offsetWidth;
      const elementHeight = elementRef.value.offsetHeight;

      position.x = (windowDimensions.width - elementWidth) / 2;
      position.y = windowDimensions.height - elementHeight - 20;
    }

    // Add document-level event listeners for mouse
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  onUnmounted(() => {
    // Clean up event listeners
    window.removeEventListener("resize", handleResize);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  });

  // Computed style
  const style = computed(() => {
    return {
      position: "fixed",
      left: `${position.x}px`,
      top: `${position.y}px`,
      cursor: isDragging.value ? "grabbing" : "grab",
      zIndex: 50,
      touchAction: "none"
    };
  });

  // Event handlers to be attached to the element
  const onMouseDown = (e) => handleDragStart(e.clientX, e.clientY);
  const onTouchStart = (e) => {
    const touch = e.touches[0];
    handleDragStart(touch.clientX, touch.clientY);
  };

  return {
    elementRef,
    style,
    position,
    isDragging,
    onMouseDown,
    onTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd
  };
}
