(function() {
  console.log("Tab Scroll Switcher loaded");
  
  document.addEventListener('wheel', (e) => {
    console.log("Wheel event:", e.deltaY);
    
    const direction = e.deltaY > 0 ? 'down' : 'up';
    browser.runtime.sendMessage({
      action: 'switchTab',
      direction: direction
    });
  }, { passive: false });
})();