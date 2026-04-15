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
    if (isMiddleDown && e.button === 1) {
      const direction = e.deltaY > 0 ? 'down' : 'up';
      browser.runtime.sendMessage({
        action: 'switchTab',
        direction: direction
      });
      e.preventDefault();
    }
  }, { passive: false });
  
  document.addEventListener('contextmenu', (e) => {
    if (e.button === 1) {
      e.preventDefault();
    }
  });
})();