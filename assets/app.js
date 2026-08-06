const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (menu && links) {
  const setMenuState = (open) => {
    links.classList.toggle('open', open);
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? '關閉選單' : '開啟選單');
  };
  menu.addEventListener('click', () => setMenuState(!links.classList.contains('open')));
  links.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuState(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuState(false);
  });
}

const form = document.querySelector('#inquiry-form');
if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const status = document.querySelector('.form-status');
    const button = form.querySelector('button[type="submit"]');
    status.textContent = '正在送出專案資料…';
    form.setAttribute('aria-busy', 'true');
    button.disabled = true;
    const data = Object.fromEntries(new FormData(form));
    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || '送出失敗');
      form.reset();
      status.textContent = '資料已送出。我們將依設備清單與任務條件進行初步評估。';
    } catch (error) {
      status.textContent = '目前表單尚未完成郵件設定，請直接來信 ice@taioan.pro，主旨註明「無人機任務箱評估」。';
    } finally {
      button.disabled = false;
      form.removeAttribute('aria-busy');
    }
  });
}
