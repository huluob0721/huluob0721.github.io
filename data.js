/* ==========================================================================
   站点数据（PC 版 index.html 与移动版 mobile.html 共用的唯一数据源）
   --------------------------------------------------------------------------
   改这里就行，两个版本同时生效，不用改两遍。
   ⚠️ 上传时别忘了把这个文件一起传到仓库根目录。
   ========================================================================== */
window.SITE_DATA = (function () {

    const GISCUS = {
      repo:       'huluob0721/huluob0721.github.io',
      repoId:     'R_kgDOUIggbw',
      category:   'Announcements',
      categoryId: 'DIC_kwDOUIggb84DGvc-',

      /* mapping 说明（很重要，选错了留言就对不上）：
         pathname  → 按"页面路径"找讨论。你这站是单页，根路径的 term 会是 index，
                     而你在 GitHub 上建的那条讨论标题是「留言板」，匹配不上，
                     giscus 会另外新建一条，你原来那条就找不回来了。
         number    → 直接按讨论编号加载，最稳，不受标题/域名影响 ✅ 当前用的就是这个
         specific  → 按标题关键词找（term 填 '留言板'），也支持自动建帖
         想换就改下面两行，并把 term 一起改掉。 */
      mapping:    'number',
      term:       '1',        // ← Discussion #1（即 .../discussions/1）

      /* theme：可以是内置主题名，也可以是一个 CSS 文件的网址。
         这里用的是仓库里的 giscus-theme.css —— 亮色、紫蓝主色，和网站一致，
         并且把鼠标指针换成了本站那支箭头（iframe 内部也能用自定义指针）。
         ⚠️ 必须把 giscus-theme.css 一起上传到仓库根目录，否则留言区会没样式。
         不想用自定义主题的话，把下面这行改成：theme: 'light'  */
      theme:      'https://huluob0721.github.io/giscus-theme.css',
    };


    const DISCUSS_URL = `https://github.com/${GISCUS.repo || ''}/discussions`;

    const PROFILE_WALLPAPERS = [
      'https://raw.githubusercontent.com/huluob0721/huluob0721.github.io/main/Background.png',
      'https://raw.githubusercontent.com/huluob0721/huluob0721.github.io/main/Background2.png'
    ];
    const AVATAR_URL  = 'https://raw.githubusercontent.com/huluob0721/huluob0721.github.io/main/Profile_Picture.png';
    const PRELOAD_TIMEOUT = 3000;

    const DYNAMICS = [
       { date: '2026.10.01', text: '多端支持上线 🎉', tag: '新',
        detail: [
          '现在手机版网页已经上线，可以在手机上访问啦～',
          '留言板功能也做好了，欢迎大家留言～',
          '后续会慢慢完善移动端的样式，争取做到和 PC 端一样的体验。',
        ] },
      { date: '2026.09.30', text: '国庆更新',
        detail: [
          '马上国庆节了，可以嗨7天了，开心～',
          '网站也是更新了，现在做出了板块的雏形，后续会慢慢完善。',
          '后面会随缘更新一些学习笔记、折腾记录、看番记录、玩游戏记录等内容，欢迎常来逛逛～',
        ] },
      { date: '2026.09.05', text: '博客上线啦 🎉',
        detail: [
          '折腾了好几天，个人博客终于正式上线啦！',
          '基于 GitHub Pages 搭建，零服务器成本，提交即部署。',
          '后面会慢慢把学习笔记、折腾记录都整理到这里，欢迎常来逛逛～',
        ] },
      { date: '2026.09.01', text: '开学了，高一加油 💪',
        detail: [
          '新学期新开始，正式成为一名高一学生。',
          '课程难度上了一个台阶，尤其是数理化，得调整好学习节奏。',
          '目标：把编程当成长线爱好坚持下去，同时不落下课内成绩。',
        ] },
      { date: '2026.08.31', text: '学会用 GitHub Pages 搭网站 🌐',
        detail: [
          '第一次接触 GitHub Pages，发现搭静态网站居然这么简单。',
          '流程大概是：建仓库 → 上传 HTML → 开启 Pages 功能 → 绑定域名（可选）。',
          '其实网站主体并不是我写的，还得感谢AI，帮我生成了大部分代码，省了不少时间。',
        ] },
    ];

    /* ============ 看过的番 ============
       cover  : 封面图链接，留空则显示渐变色块（用 color 作为主色）
       score  : 1~5 星
       status : 已看完 / 在看 / 弃番
       想加新条目，照着下面任意一条复制一行改内容即可。
    */
    const ANIME = [
      { title: 'CLANNAD', year: '2007', score: 5, status: '已看完', color: '#667eea', cover: '',
        comment: '冈崎朋也和古河渚的日常与离别，笑着笑着就哭了......' },
      { title: '紫罗兰永恒花园', year: '2018', score: 5, status: '已看完', color: '#ec4899', cover: '',
        comment: '画面质感拉满，每一封信都是一次告别' },
      { title: '轻音少女', year: '2009', score: 5, status: '已看完', color: '#f59e0b', cover: '',
        comment: '轻音永不毕业！' },
      { title: '冰菓', year: '2012', score: 5, status: '已看完', color: '#22d3ee', cover: '',
        comment: '日常推理，京阿尼画面巅峰之作' },
      { title: '中二病也要谈恋爱', year: '2012', score: 5, status: '已看完', color: '#a78bfa', cover: '',
        comment: '邪王真眼是最强的！' },
      { title: '凉宫春日的忧郁', year: '2006', score: 5, status: '已看完', color: '#fbbf24', cover: '',
        comment: 'SOS 团的日常，经典老番，God Knows神了！' },
    ];

    /* ============ 玩过的游戏 ============
       cover  : 封面图链接，留空则显示渐变色块
       score  : 1~5 星
       status : 已通关 / 在玩 / 弃坑 / 偶尔玩（写什么都行）
       hours  : 游玩时长（小时，可省略）
    */
    const GAMES = [
      { title: 'CLANNAD', platform: 'Steam / 实体', hours: 40, score: 5, status: '玩了一半左右', color: '#667eea', cover: '',
        comment: '学园篇差不多走完了，因为中考退坑了......' },
      { title: 'ATRI -My Dear Moments-', platform: 'Steam', hours: 12, score: 5, status: '已通关', color: '#0ea5e9', cover: '',
        comment: '夏、海、还有机器人少女，短但很完整。私は高性能ですから！' },
      { title: 'Minecraft', platform: 'Java 版', hours: 150, score: 5, status: '在玩', color: '#16a34a', cover: '',
        comment: '从初中玩到现在，依旧只能建火柴盒......' },
      { title: '原神', platform: 'PC / 手机', hours: 200, score: 5, status: '偶尔玩', color: '#f59e0b', cover: '',
        comment: '入宅作，现在偶尔上线......' },
      { title: 'GTA4 & GTA5', platform: 'PC', hours: 180, score: 5, status: '在玩', color: '#0ea5e9', cover: '',
        comment: '4 代细节做的好，5 代画质更高。依旧道德与法治这一块' },
      { title: '微软模拟飞行 2020', platform: 'Xbox', hours: 30, score: 5, status: '在玩', color: '#0ea5e9', cover: '',
        comment: '风景模拟器，天气和地景真的神了' },
      { title: '微软模拟飞行 X', platform: 'PC', hours: 50, score: 5, status: '偶尔玩', color: '#0ea5e9', cover: '',
        comment: '微软模拟飞行最成功的一代，现在偶尔还会开一下。' },
      { title: '钢铁雄心 4', platform: 'Steam', hours: 400, score: 5, status: '在玩', color: '#7c2d12', cover: '',
        comment: '地图填色游戏，一局一个通宵。玩完后变战犯了......' },
    ];

  return {
    GISCUS: GISCUS,
    DISCUSS_URL: DISCUSS_URL,
    PROFILE_WALLPAPERS: PROFILE_WALLPAPERS,
    AVATAR_URL: AVATAR_URL,
    PRELOAD_TIMEOUT: PRELOAD_TIMEOUT,
    DYNAMICS: DYNAMICS,
    ANIME: ANIME,
    GAMES: GAMES
  };
})();
