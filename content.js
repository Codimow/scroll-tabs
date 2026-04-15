(function() {
  function isOverTabBar(e) {
    const tabBar = document.querySelector('#tabbrowser-tabs') || 
                   document.querySelector('.tabbrowser-tabs') ||
                   document.getElementById('TabsToolbar');
    if (!tabBar) {
      console.log("No tab bar found");
      return false;
    }
    
    const rect = tabBar.getBoundingClientRect();
    const isOver = e.clientX >= rect.left && e.clientX <= rect.right &&
           e.clientY >= rect.top && e.clientY <= rect.bottom;
    
    console.log("Tab bar rect:", rect, "Mouse:", e.clientX, e.clientY, "Is over:", isOver);
    return isOver;
  }
  
  document.addEventListener('wheel', (e) => {
    if (isOverTabBar(e)) {
      const direction = e.deltaY > 0 ? 'down' : 'up';
      browser.runtime.sendMessage({
        action: 'switchTab',
        direction: direction
      });
    }
  }, { passive: false });
})();