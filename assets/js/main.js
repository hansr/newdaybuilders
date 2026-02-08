// New Day Builders – nav toggle + header scroll state
(function () {
  var scrollThreshold = 100;

  function closeNav() {
    if (window.location.hash === '#nav') {
      history.back();
    }
  }

  function updateHeaderScroll() {
    if (window.scrollY >= scrollThreshold) {
      document.body.classList.add('header-scrolled');
    } else {
      document.body.classList.remove('header-scrolled');
    }
  }

  function anchorHeroTitle() {
    var title = document.querySelector('.hero--animate .hero-title');
    var headerInner = document.querySelector('.site-header .header-inner');
    if (!title || !headerInner) return;
    function onAnimationEnd(e) {
      if (e.animationName !== 'hero-title-in') return;
      title.removeEventListener('animationend', onAnimationEnd);
      document.body.classList.add('hero-title-anchored');
      headerInner.insertBefore(title, headerInner.firstChild);
    }
    title.addEventListener('animationend', onAnimationEnd);
  }

  document.addEventListener('DOMContentLoaded', function () {
    updateHeaderScroll();
    window.addEventListener('scroll', updateHeaderScroll, { passive: true });
    anchorHeroTitle();

    document.body.addEventListener('click', function (e) {
      if (e.target.classList && e.target.classList.contains('nav-panel')) return;
      if (e.target.closest && e.target.closest('.nav-panel')) return;
      if (e.target.closest && e.target.closest('.nav-toggle')) return;
      if (window.location.hash === '#nav') {
        var id = e.target.id || (e.target.getAttribute && e.target.getAttribute('aria-label'));
        if (id === 'nav' || id === 'close') return;
        closeNav();
      }
    });
  });
})();
