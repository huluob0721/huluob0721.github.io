/* ==========================================================================
   设备分流：手机 / 平板 → mobile.html，电脑 → pc.html
   --------------------------------------------------------------------------
   pc.html 和 mobile.html 都引用这个脚本，它自己判断"当前页面是不是该待的那一版"，
   不是就跳过去。所以不管访客从哪个链接进来，都会落到正确版本。

   ⚠️ 导航页 index.html 不要引用本脚本 —— 它要无条件显示给所有人，
      再由访客从导航页点进 pc.html / mobile.html。

   两个版本内容完全一致，只是操作方式分别适配了鼠标和触屏，
   因此不提供手动切换入口 —— 用什么设备就自动给哪一版。
   ========================================================================== */
(function () {
  var PAGE_PC     = 'pc.html';
  var PAGE_MOBILE = 'mobile.html';

  /* ---------- 判断是不是移动设备 ---------- */
  function isMobileDevice() {
    // ① 最可靠：主指针是"粗糙"的（手指），且没有真正的 hover
    //    手机、iPad / 安卓平板都会命中；带触摸屏的笔记本不会（它仍有精确指针）
    try {
      var coarse  = window.matchMedia('(pointer: coarse)').matches;
      var noHover = window.matchMedia('(hover: none)').matches;
      var touch   = (navigator.maxTouchPoints || 0) > 0;
      if (coarse && noHover && touch) return true;
    } catch (e) {}

    // ② 兜底：UA 里带 iPhone / iPad / Android
    var ua = navigator.userAgent || '';
    var isIOS  = /iPhone|iPad|iPod/i.test(ua);
    var isAndr = /Android/i.test(ua);
    // iPadOS 13+ 会伪装成 Macintosh，用触摸点数把它揪出来
    var iPadOS = /Macintosh/i.test(ua) && (navigator.maxTouchPoints || 0) > 1;
    if (isIOS || isAndr || iPadOS) return true;

    // ③ 极窄屏 + 支持触摸，也按移动处理
    if (window.innerWidth <= 480 && (navigator.maxTouchPoints || 0) > 0) return true;

    return false;
  }

  /* ---------- 当前页面是不是想要的那版 ---------- */
  var here = (location.pathname.split('/').pop() || '').toLowerCase();
  var onPC     = (here === '' || here === PAGE_PC);
  var onMobile = (here === PAGE_MOBILE);
  var wantMobile = isMobileDevice();

  if (wantMobile && onPC) {
    location.replace(PAGE_MOBILE + location.search + location.hash);
  } else if (!wantMobile && onMobile) {
    location.replace(PAGE_PC + location.search + location.hash);
  }
  // 已经在对的版本上 → 什么都不做，页面继续正常加载
})();
