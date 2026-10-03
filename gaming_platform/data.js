/* ==========================================================================
   胡萝卜游戏平台 · 独立数据源
   --------------------------------------------------------------------------
   ⚠️ 这份数据和博客那边的 blog/data.js【完全独立】：
      改这里不会影响博客「玩过的游戏」板块，反之亦然。

   这里放的是【你自己做的】游戏，不是"玩过的游戏"。

   上传位置：gaming_platform/data.js（和 gaming_platform.html 同一目录）
   ========================================================================== */
window.GAMING_PLATFORM_DATA = (function () {

    /* ============ 页面配置 ============ */

    const TITLE = '胡萝卜游戏平台';

    /* 副标题留空 → 页面会自动算「共 N 款」 */
    const SUBTITLE = '';

    /* ============ 壁纸 ============
       和博客主页同一套机制：默认显示第一张，双击页面空白处按顺序切换，
       切换时有淡出 / 淡入过渡，并会预加载下一张（切过去不卡）。
       只有 1 张时，页面不会显示"双击切换"提示，双击也不生效。

       建议写「站点根绝对路径」（以 / 开头），从 huluob0721.github.io 算起。
       想用自己的图，放到 gaming_platform/pictures/ 下再写：
         '/gaming_platform/pictures/xxx.png' */
    const WALLPAPERS = [
      '/blog/pictures/Background.png',
      '/blog/pictures/Background2.png',
    ];

    /* ============ 游戏条目 ============
       title    : 游戏名（必填）
       url      : 【关键】点击进入的地址。填了整张卡片才可点；
                  留空则卡片不可点（还没做完的游戏就先留空）。
                  建议写「站点根绝对路径」，从 huluob0721.github.io 算起：
                    '/gaming_platform/games/fx_simulator/fx_simulator.html'
       icon     : 图标里的文字。留空会自动从 title 里抽字母（"FX 模拟器" → FX），
                  抽不到就取标题首字。建议 2~4 个字符。
       platform : 技术栈 / 运行方式，如 HTML5、Unity WebGL、Python
       status   : 状态文字，随便写（可玩 / 测试中 / 开发中 / 已下线…）
       color    : 图标底色（没配封面图时生效）
       cover    : 封面图链接。留空 → 显示 icon 文字图标；填了 → 显示整张封面图
       comment  : 一句话简介，可省略
       ========================================================================== */
    const GAMES = [
      { title: 'FX 模拟器', platform: 'HTML5', status: '可玩', color: '#0ea5e9', cover: '', icon: 'FX',
        url: '/gaming_platform/games/fx_simulator/fx_simulator.html',
        comment: '第一个挂上来的自制小游戏' },
    ];

  return {
    TITLE: TITLE,
    SUBTITLE: SUBTITLE,
    WALLPAPERS: WALLPAPERS,
    GAMES: GAMES
  };
})();
