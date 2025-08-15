<template>
    <div class="p-activities-index">
        <section class="hero-section">
            <div class="hero-bg">
                <img src="/activities/hero_bg.png" alt="">
            </div>
            <div class="hero-info-group">
                <div class="title-group">
                    <div class="title-en hero-title">
                        Activities
                    </div>
                    <div class="title-ch hero-title">
                        中心活動
                    </div>
                </div>
            </div>
        </section>
        <section class="activities-section">
            <div class="section-wrapper">
                <el-tabs v-model="activeName" class="c-el-tabs activities-tabs">
                    <el-tab-pane v-for="(tab,tabIndex) in activitiesData" :key="'activities-pane-'+tabIndex" :label="tab.label" :name="tab.name">
                        <div class="pane-content">
                            <div class="c-title">{{ tab.title }}</div>
                            <div class="activities-item-group">
                                <a :href="item.link" class="activities-item" v-for="(item, index) in (tab.showMore ? tab.data : tab.data.slice(0, 6))" :key="'activities-pane-'+tabIndex + 'activies-item-' + index">
                                    <div class="activities-bn">
                                        <img :src="item.bn" alt="">
                                    </div>
                                    <div class="activities-info-group">
                                        <div class="title">
                                            {{ item.title }}
                                        </div>
                                        <div class="desc">
                                            {{ item.desc }}
                                        </div>
                                        <div class="date">
                                            {{ item.date }}
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="cta-group" v-if="tab.data.length > 4">
                                <div class="c-button" @click="tab.showMore = !tab.showMore">
                                    <div class="button-text">
                                        <span v-if="tab.showMore">較少</span>
                                        <span v-else>更多</span>
                                    </div>
                                    <div class="button-img">
                                        <img src="/icon-arrow.svg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </section>
    </div>
</template>

<script setup>
const activeName = ref('all');

const activitiesData = ref([
    {
        label: 'All',
        name: 'all',
        showMore: false,
        data:[
                {
                    bn: '/activities/all/all-activity-1/bn.png',
                    title: '️How Faculty Can Harness Generative AI for Enhanced Learning🕵',
                    desc: '美國印第安納大學教育科技領域專家 Curtis J. Bonk 教授，分享生成式AI在高等教育中的實際應用',
                    date: '2025-06-12',
                    link: '/activities/page'
                },
                {
                    bn: '/activities/all/all-activity-2/bn.png',
                    title: '️EMI Support Gathering中午小聚，分享心得贏好禮',
                    desc: '秦毓婷老師和吳思葦老師將聯合舉辦實體活動—「EMI Support Gathering」。屆時可以與老師們遊戲互動🎉、分享您的EMI學習經驗📚，還有準備了抽獎活動🎁豐富獎品等你來拿~',
                    date: '2025-05-15',
                    link: '/activities/page'
                },
                {
                    bn: '/activities/all/all-activity-3/bn.png',
                    title: '113-2 EMI TA開始報名囉!!',
                    desc: '️你知道嗎？在不同國家，當學生的方式也大不相同!  有些地方上課可以自由選學校、有些地方點名不是必要? 從功課、老師、課堂參與、甚至到打工和社團活動，每個文化對「當學生」都有不同的想像和做法。  這場活動歡迎大家一起來分享自己或同學在不同教育體系、學習方式和校園生活中的真實經驗，也可以聆聽別人的精采故事!也許你會發現，原來學習的樣貌從來不只一種!  🌍 一起聊聊，在世界各地，學生們的生活到底有多不一樣吧!',
                    date: '2025-06-12',
                    link: '/activities/page'
                },
                {
                    bn: '/activities/all/all-activity-4/bn.png',
                    title: '留學申請經驗分享會',
                    desc: '不藏私申請技巧 × 海外升學心得 × 留學準備心法✏️ 歡迎所有對留學、跨領域申請有興趣的同學踴躍參加！',
                    date: '2025-05-09',
                    link: '/activities/page'
                },
                {
                    bn: '/activities/all/all-activity-5/bn.png',
                    title: '113-2 EMI TA開始報名囉!!',
                    desc: '想在EMI課堂中成為老師與學生的超級神隊友嗎？ 吳思葦老師（Linda）特別設計兩場專屬 EMI TA 的實戰工作坊，帶你全方位提升助教力！  ',
                    date: '2025-05-20',
                    link: '/activities/page'
                },
                {
                    bn: '/activities/all/all-activity-6/bn.png',
                    title: '考試達人分享會五月份場次開始報名囉',
                    desc: '為了英檢考試所苦嗎? 差一點點就達到門檻嗎?  讓考試達人們陪你一起面對各種考試',
                    date: '2025-05-02',
                    link: '/activities/page'
                },
                {
                    bn: '/activities/all/all-activity-1/bn.png',
                    title: '️How Faculty Can Harness Generative AI for Enhanced Learning🕵',
                    desc: '美國印第安納大學教育科技領域專家 Curtis J. Bonk 教授，分享生成式AI在高等教育中的實際應用',
                    date: '2025-06-12',
                    link: '/activities/page'
                },
                {
                    bn: '/activities/all/all-activity-2/bn.png',
                    title: '️EMI Support Gathering中午小聚，分享心得贏好禮',
                    desc: '秦毓婷老師和吳思葦老師將聯合舉辦實體活動—「EMI Support Gathering」。屆時可以與老師們遊戲互動🎉、分享您的EMI學習經驗📚，還有準備了抽獎活動🎁豐富獎品等你來拿~',
                    date: '2025-05-15',
                    link: '/activities/page'
                },
        ]
    },
    {
        label: '教師',
        name: 'teacher',
        data:[
                {
                    bn: '/activities/all/all-activity-1/bn.png',
                    title: '申請英語檢測獎勵說明',
                    desc: '為了英檢考試所苦嗎? 差一點點就達到門檻嗎? 讓考試達人們陪你一起面對各種考試。本次活動精選托福、雅思、GRE學生達人，真實的考試心得，分享獨門高分秘笈!',
                    date: '2025/6/4',
                    link: '/activities/page'
                },
                {
                    bn: '/activities/all/all-activity-1/bn.png',
                    title: '️How Faculty Can Harness Generative AI for Enhanced Learning',
                    desc: '為了英檢考試所苦嗎? 差一點點就達到門檻嗎? 讓考試達人們陪你一起面對各種考試。本次活動精選托福、雅思、GRE學生達人，真實的考試心得，分享獨門高分秘笈!',
                    date: '2025/5/5',
                    link: '/activities/page'
                },
                {
                    bn: '/activities/all/all-activity-1/bn.png',
                    title: '113-2 EMI TA開始報名囉!!',
                    desc: '為了英檢考試所苦嗎? 差一點點就達到門檻嗎? 讓考試達人們陪你一起面對各種考試。本次活動精選托福、雅思、GRE學生達人，真實的考試心得，分享獨門高分秘笈!',
                    date: '2025/4/28',
                    link: '/activities/page'
                },
                {
                    bn: '/activities/all/all-activity-1/bn.png',
                    title: '考試達人分享會五月份場次開始報名囉/ The upcoming Exam Expert Sharing Session in May',
                    desc: '為了英檢考試所苦嗎? 差一點點就達到門檻嗎? 讓考試達人們陪你一起面對各種考試。本次活動精選托福、雅思、GRE學生達人，真實的考試心得，分享獨門高分秘笈!',
                    date: '2025/4/21',
                    link: '/activities/page'
                },
        ]
    },
    {
        label: '學生',
        name: 'student',
        data:[
                {
                    bn: '/activities/all/all-activity-1/bn.png',
                    title: '申請英語檢測獎勵說明',
                    desc: '為了英檢考試所苦嗎? 差一點點就達到門檻嗎? 讓考試達人們陪你一起面對各種考試。本次活動精選托福、雅思、GRE學生達人，真實的考試心得，分享獨門高分秘笈!',
                    date: '2025/6/4',
                    link: '/activities/page'
                },
                {
                    bn: '/activities/all/all-activity-1/bn.png',
                    title: '️How Faculty Can Harness Generative AI for Enhanced Learning',
                    desc: '為了英檢考試所苦嗎? 差一點點就達到門檻嗎? 讓考試達人們陪你一起面對各種考試。本次活動精選托福、雅思、GRE學生達人，真實的考試心得，分享獨門高分秘笈!',
                    date: '2025/5/5',
                    link: '/activities/page'
                },
                {
                    bn: '/activities/all/all-activity-1/bn.png',
                    title: '113-2 EMI TA開始報名囉!!',
                    desc: '為了英檢考試所苦嗎? 差一點點就達到門檻嗎? 讓考試達人們陪你一起面對各種考試。本次活動精選托福、雅思、GRE學生達人，真實的考試心得，分享獨門高分秘笈!',
                    date: '2025/4/28',
                    link: '/activities/page'
                },
                {
                    bn: '/activities/all/all-activity-1/bn.png',
                    title: '考試達人分享會五月份場次開始報名囉/ The upcoming Exam Expert Sharing Session in May',
                    desc: '為了英檢考試所苦嗎? 差一點點就達到門檻嗎? 讓考試達人們陪你一起面對各種考試。本次活動精選托福、雅思、GRE學生達人，真實的考試心得，分享獨門高分秘笈!',
                    date: '2025/4/21',
                    link: '/activities/page'
                },
        ]
    },
    {
        label: '助教',
        name: 'assistant',
        data:[
                {
                    bn: '/activities/all/all-activity-1/bn.png',
                    title: '申請英語檢測獎勵說明',
                    desc: '為了英檢考試所苦嗎? 差一點點就達到門檻嗎? 讓考試達人們陪你一起面對各種考試。本次活動精選托福、雅思、GRE學生達人，真實的考試心得，分享獨門高分秘笈!',
                    date: '2025/6/4',
                    link: '/activities/page'
                },
                {
                    bn: '/activities/all/all-activity-1/bn.png',
                    title: '️How Faculty Can Harness Generative AI for Enhanced Learning',
                    desc: '為了英檢考試所苦嗎? 差一點點就達到門檻嗎? 讓考試達人們陪你一起面對各種考試。本次活動精選托福、雅思、GRE學生達人，真實的考試心得，分享獨門高分秘笈!',
                    date: '2025/5/5',
                    link: '/activities/page'
                },
                {
                    bn: '/activities/all/all-activity-1/bn.png',
                    title: '113-2 EMI TA開始報名囉!!',
                    desc: '為了英檢考試所苦嗎? 差一點點就達到門檻嗎? 讓考試達人們陪你一起面對各種考試。本次活動精選托福、雅思、GRE學生達人，真實的考試心得，分享獨門高分秘笈!',
                    date: '2025/4/28',
                    link: '/activities/page'
                },
                {
                    bn: '/activities/all/all-activity-1/bn.png',
                    title: '考試達人分享會五月份場次開始報名囉/ The upcoming Exam Expert Sharing Session in May',
                    desc: '為了英檢考試所苦嗎? 差一點點就達到門檻嗎? 讓考試達人們陪你一起面對各種考試。本次活動精選托福、雅思、GRE學生達人，真實的考試心得，分享獨門高分秘笈!',
                    date: '2025/4/21',
                    link: '/activities/page'
                },
        ]
    },
]);

</script>