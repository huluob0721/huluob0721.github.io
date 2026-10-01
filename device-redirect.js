/* ==========================================================================
   设备分流：手机 / 平板 → mobile.html，电脑 → index.html
   --------------------------------------------------------------------------
   两个页面都引用这个脚本，它自己判断"当前页面是不是该待的那一版"，
   不是就跳过去。所以不管访客从哪个链接进来，都会落到正确版本。

   手动覆盖（调试 / 访客自己想换版本时用）：
     ?view=pc       → 强制 PC 版
     ?view=mobile   → 强制移动版
   手动选择会记进 localStorage，之后一直生效，直到再换一次。
   ========================================================================== */
(function () {
  var PAGE_PC     = 'index.html';
  var PAGE_MOBILE = 'mobile.html';

  /* ---------- 1. 手动覆盖优先 ---------- */
  try {
    var q = new URLSearchParams(location.search).get('view');
    if (q === 'pc' || q === 'mobile') {
      localStorage.setItem('site-view', q);
    }
  } catch (e) { /* 隐私模式下 localStorage 可能不可用，忽略 */ }

  var forced = null;
  try { forced = localStorage.getItem('site-view'); } catch (e) {}

  /* ---------- 2. 判断是不是移动设备 ---------- */
  function isMobileDevice() {
    // ① 最可靠：主指针是"粗糙"的（手指），且没有真正的 hover
    //    iPad / 安卓平板、手机都会命中；带触摸屏的笔记本不会（它仍有精确指针）
    try {
      var coarse = window.matchMedia('(pointer: coarse)').matches;
      var noHover = window.matchMedia('(hover: none)').matches;
      var touch = (navigator.maxTouchPoints || 0) > 0;
      if (coarse && noHover && touch) return true;
    } catch (e) {}

    // ② 兜底：UA 里带 iPhone / iPad / Android，且不是"请求桌面版"的
    var ua = navigator.userAgent || '';
    var isIOS  = /iPhone|iPad|iPod/i.test(ua);
    var isAndr = /Android/i.test(ua);
    // iPadOS 13+ 会伪装成 Macintosh，用触摸点数把它揪出来
    var iPadOS = /Macintosh/i.test(ua) && (navigator.maxTouchPoints || 0) > 1;
    if (isIOS || isAndr || iPadOS) return true;

    // ③ 极窄屏也按移动处理（比如窗口缩得很小）
    if (window.innerWidth <= 480 && (navigator.maxTouchPoints || 0) > 0) return true;

    return false;
  }

  var wantMobile = (forced === 'mobile') || (forced !== 'pc' && isMobileDevice());

  /* ---------- 3. 当前页面是不是想要的那版 ---------- */
  var here = (location.pathname.split('/').pop() || '').toLowerCase();
  var onPC     = (here === '' || here === PAGE_PC);
  var onMobile = (here === PAGE_MOBILE);

  if (wantMobile && onPC) {
    location.replace(PAGE_MOBILE + location.search + location.hash);
  } else if (!wantMobile && onMobile) {
    location.replace(PAGE_PC + location.search + location.hash);
  }
  // 已经在对的版本上 → 什么都不做，页面继续正常加载
})();
