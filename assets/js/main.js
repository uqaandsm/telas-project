// スマートフォン用ハンバーガーメニューの開閉
(() => {
  const header = document.querySelector('.header');
  const toggle = header.querySelector('.header__toggle');

  const setOpen = (open) => {
    header.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  };

  toggle.addEventListener('click', () => setOpen(!header.classList.contains('is-open')));

  // メニュー内リンクを押したら閉じる
  header.querySelectorAll('.header__nav a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  // Esc キーで閉じる
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
})();
