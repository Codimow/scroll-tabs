(function() {
  function isOverTabBar(e) {
    const tabBar = document.querySelector('#tabbrowser-tabs') || 
                   document.querySelector('.tabbrowser-tabs') ||
                   document.getElementById('TabsToolbar');
    if (!tabBar) return false;
    
    const rect = tabBar.getBoundingClientRect();
    return e.clientX >= rect.left && e.clientX <= rect.right &&
           e.clientY >= rect.top && e.clientY <= rect.bottom;
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