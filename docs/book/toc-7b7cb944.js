// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="home.html">故事目录</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="download.html">网盘下载与更新日志</a></span></li><li class="chapter-item expanded "><li class="spacer"></li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1.html">第 1 篇 【补档】《麦穗与羊》《死在十七岁的你》</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2.html">第 2 篇 过去12个清明了，今年却没能去看她</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3.html">第 3 篇 回忆一下高中时候同桌的轮椅女孩</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="4.html">第 4 篇 别了，我的影子女友</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5.html">第 5 篇 这是我们的第十年，也是我们的第四年</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="6.html">第 6 篇 【补档】沉淀两年，和8u讲讲鼠鼠与青梅的故事吧（非甜）</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="7.html">第 7 篇 我的白月光，这是我们的七年之痒</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="8.html">第 8 篇 给吧友讲讲我54年人生间发生的故事</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="9.html">第 9 篇 19+5年了，不知道明年还能不能再去看看她</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10.html">第 10 篇 给大家讲讲我和一个KTV公主的故事吧</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="11.html">第 11 篇 19岁的你和18岁的我</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="12.html">第 12 篇 痛恨自己的无能</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="13.html">第 13 篇 七年了，我还是很想你</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="14.html">第 14 篇 今天是我的30岁生日捏，现在是24号的0点，牢</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="15.html">第 15 篇 兄弟们女生找我借钱 该怎么回 在线等急！</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="16.html">第 16 篇 【经年岁月】3月28日致亡妻，女儿很健康，我一天都未曾忘记你</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="17.html">第 17 篇 我得跪在地上才能亲到她的脸</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="18.html">第 18 篇 逛孙吧这么久了，我来个真的表白</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="19.html">第 19 篇 小张和小丽</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20.html">第 20 篇 我永远失去了我的白月光</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="21.html">第 21 篇 请告诉她，我不想她</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="22.html">第 22 篇 今天是她的祭日，想记下一段故事，我们的，时代的</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="23.html">第 23 篇 二十五岁那年，我捡到了这辈子唯一的温柔，最后又亲手还给了人海</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="24.html">第 24 篇 xdm，你们有谈过够劲的恋爱吗？</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="25.html">第 25 篇 在一起六年 抗癌四年的女朋友离开我了</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="26.html">第 26 篇 我的白月光在我身旁逝去</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="27.html">第 27 篇 吧U们帮帮我吧，没想到这种事会发生在我身上。</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="28.html">第 28 篇 给8u们讲讲鼠鼠的🤡经历</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="29.html">第 29 篇 初遇时我为射手抱不平，最后却把她放进了余生的遗憾里</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="30.html">第 30 篇 和妹妹登记结婚被驳回了</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="31.html">第 31 篇 鼠鼠的前半生</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="32.html">第 32 篇 收获魅魔小姐，但我却辗转难眠</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="33.html">第 33 篇 讲讲跟病娇（？的故事吧</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="34.html">第 34 篇 聊着聊着就A了上去</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="35.html">第 35 篇 给大伙讲讲我和初恋的故事</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="36.html">第 36 篇 暗恋两年的高中同学 决定拿下</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="37.html">第 37 篇 孩子们我成功了！孙吧发第三个记录贴！</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="38.html">第 38 篇 蚌埠住了，女同学凌晨一点给我发这个，我直接装死到现在</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="39.html">第 39 篇 我的爱人静秋</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="40.html">第 40 篇 刚刚......和高中的英语老师确立关系了</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="41.html">第 41 篇 鼠鼠和初恋的故事</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="42.html">第 42 篇 这是一个悲伤的故事</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="43.html">第 43 篇 我从没想过这种事情居然会发生在我身上。。。。</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="44.html">第 44 篇 女主视角我的故事以及遇到小钟之后的一些事</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="45.html">第 45 篇 长岛的雪</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="46.html">第 46 篇 求救，我已经快想爆了。</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="47.html">第 47 篇 在县城读高中时与一个女孩儿的故事</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="48.html">第 48 篇 开个贴，讲讲我的自餐女友</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="49.html">第 49 篇 关于鼠鼠和抛油结婚的故事</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="50.html">第 50 篇 兄弟们，你们在网上做过什么恶事吗？</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="51.html">第 51 篇 分手几年，忘不掉初恋，今天当回小丑</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="52.html">第 52 篇 那年母亲在法庭上说她要所有的财产不要我</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="53.html">第 53 篇 A!大胆的往上A!</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="54.html">第 54 篇 给大家讲讲我和女同事时的逆天事情</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="55.html">第 55 篇 说说楼主十年的摆烂人生。。</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="56.html">第 56 篇 说说楼主的十年摆烂人生（下）</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="57.html">第 57 篇 新活儿.《原来蓬莱的雨一样是咸的》祭👴死去的爱情-大型真实情感爱情故事</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="58.html">第 58 篇 给老哥们讲讲我流浪的经历</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="59.html">第 59 篇 平A骗大了，兄弟们</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="60.html">第 60 篇 漫展偶遇魅魔学姐 连续攻势强如怪物 拼尽全力也无法战胜</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="61.html">第 61 篇 记录鼠鼠四处漂泊、艰难求生的流浪岁月</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="62.html">第 62 篇 和前女友闺蜜税了咋办</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="63.html">第 63 篇 抗压吧声之形：这个鸡翅不新鲜，走</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="64.html">第 64 篇 东京爱情故事</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="65.html">第 65 篇 聊聊那些在日本乡下我遇到的女孩们</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="66.html">第 66 篇 欺负过我的同学说喜欢我？（以前的好朋友？）</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="67.html">第 67 篇 从小一起长大的天使离我越来越远了（非甜）</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="68.html">第 68 篇 跟暗恋了当了五年情缘被抓包了</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="69.html">第 69 篇 我一个混混，偏偏会爱上最干净的女孩</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="70.html">第 70 篇 回忆我记忆中的青梅竹马</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="71.html">第 71 篇 又到了下雪的季节了</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="72.html">第 72 篇 朋友们 孙吧11级的女朋友去世了</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="73.html">第 73 篇 进来听听鼠鼠和初恋的爱情故事</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="74.html">第 74 篇 回忆一下鼠鼠和天龙姑娘的恋爱史</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            // Check both with and without the '.html' suffix to be robust against pretty URLs
            if (link.href.replace(/\.html$/, '') === current_page.replace(/\.html$/, '')
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);
