(function() {
  let isMiddleDown = false;
  
  document.addEventListener('mousedown', (e) => {
    if (e.button === 1) {
      isMiddleDown = true;
    }
  });
  
  document.addEventListener('mouseup', (e) => {
    if (e.button === 1) {
      isMiddleDown = false;
    }
  });
  
  document.addEventListener('mouseleave', () => {
    isMiddleDown = false;
  });
  
  document.addEventListener('wheel', (e) => {
    if (isMiddleDown) {
      const direction = e.deltaY > 0 ? 'down' : 'up';
      browser.runtime.sendMessage({
        action: 'switchTab',
        direction: direction
      });
      e.preventDefault();
      e.stopPropagation();
    }
  }, { passive: false });
})();