(function() {
  function isOverTabBar(e) {
    const tabBar = document.querySelector('#tabbrowser-tabs') || 
                   document.querySelector('.tabbrowser-tabs') ||
                   document.getElementById('TabsToolbar');
    if (!tabBar) {
      return e.clientY < 100;
    }
    
    const rect = tabBar.getBoundingClientRect();
    return e.clientY <= rect.bottom;
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