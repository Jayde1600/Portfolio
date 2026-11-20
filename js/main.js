/*
 * Scroll buddy — the little pixel guy who walks along a dotted track as you
 * scroll, eating the dots behind him. Vertical on the right edge on wide
 * screens, horizontal along the bottom on phones (handled in CSS).
 *
 * Work is batched into one requestAnimationFrame per frame and only writes a
 * single CSS variable, so it never causes layout thrash.
 */
(function () {
  'use strict';

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  var buddy = document.querySelector('.buddy');
  if (!buddy) return;

  var raf = 0;
  var idleTimer = 0;
  var doc = document.documentElement;

  function update() {
    raf = 0;
    var max = doc.scrollHeight - window.innerHeight;
    var progress = Math.min(1, Math.max(0, window.scrollY / Math.max(1, max)));

    var w = buddy.clientWidth;
    var h = buddy.clientHeight;
    var horizontal = w > h;
    var size = horizontal ? h : w;
    var travel = Math.max(0, (horizontal ? w : h) - size);

    buddy.style.setProperty('--t', Math.round(progress * travel) + 'px');
  }

  function schedule() {
    if (!raf) raf = requestAnimationFrame(update);
  }

  function onScroll() {
    schedule();
    // Chomp and walk only while the page is moving.
    buddy.classList.add('is-moving');
    clearTimeout(idleTimer);
    idleTimer = setTimeout(function () {
      buddy.classList.remove('is-moving');
    }, 160);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  // Images finishing loading can change page height.
  window.addEventListener('load', schedule);
  update();
})();
