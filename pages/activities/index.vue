<template>
    <div class="p-activities-index">
        <section class="hero-section">
            <div class="hero-bg">
                <img src="/main-page/hero_bg.jpg" alt="">
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
                                <div class="activities-item" v-for="(item, index) in (tab.showMore ? tab.data : tab.data.slice(0, 4))" :key="'activities-pane-'+tabIndex + 'activies-item-' + index">
                                    <div class="activities-bn">
                                        <img :src="item.bn" alt="">
                                    </div>
                                    <div class="activities-info-group">
                                        <div class="title">
                                            {{ item.title }}
                                        </div>
                                    </div>
                                </div>
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
                    title: '申請英語檢測獎勵說明',
                    desc: '為了英檢考試所苦嗎? 差一點點就達到門檻嗎? 讓考試達人們陪你一起面對各種考試。本次活動精選托福、雅思、GRE學生達人，真實的考試心得，分享獨門高分秘笈!',
                    date: '2025/6/4',
                    link: '#'
                },
                {
                    bn: '/activities/all/all-activity-1/bn.png',
                    title: '️How Faculty Can Harness Generative AI for Enhanced Learning',
                    desc: '為了英檢考試所苦嗎? 差一點點就達到門檻嗎? 讓考試達人們陪你一起面對各種考試。本次活動精選托福、雅思、GRE學生達人，真實的考試心得，分享獨門高分秘笈!',
                    date: '2025/5/5',
                    link: '#'
                },
                {
                    bn: '/activities/all/all-activity-1/bn.png',
                    title: '113-2 EMI TA開始報名囉!!',
                    desc: '為了英檢考試所苦嗎? 差一點點就達到門檻嗎? 讓考試達人們陪你一起面對各種考試。本次活動精選托福、雅思、GRE學生達人，真實的考試心得，分享獨門高分秘笈!',
                    date: '2025/4/28',
                    link: '#'
                },
                {
                    bn: '/activities/all/all-activity-1/bn.png',
                    title: '考試達人分享會五月份場次開始報名囉/ The upcoming Exam Expert Sharing Session in May',
                    desc: '為了英檢考試所苦嗎? 差一點點就達到門檻嗎? 讓考試達人們陪你一起面對各種考試。本次活動精選托福、雅思、GRE學生達人，真實的考試心得，分享獨門高分秘笈!',
                    date: '2025/4/21',
                    link: '#'
                },
                {
                    bn: '/activities/all/all-activity-1/bn.png',
                    title: '【EMI教師分享會】重建與探索:我的EMI教學之旅 Recovery and Discovery: My Journey as an Instructor in EMI Teaching',
                    desc: '為了英檢考試所苦嗎? 差一點點就達到門檻嗎? 讓考試達人們陪你一起面對各種考試。本次活動精選托福、雅思、GRE學生達人，真實的考試心得，分享獨門高分秘笈!',
                    date: '2025/4/14',
                    link: '#'
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
                    link: '#'
                },
                {
                    bn: '/activities/all/all-activity-1/bn.png',
                    title: '️How Faculty Can Harness Generative AI for Enhanced Learning',
                    desc: '為了英檢考試所苦嗎? 差一點點就達到門檻嗎? 讓考試達人們陪你一起面對各種考試。本次活動精選托福、雅思、GRE學生達人，真實的考試心得，分享獨門高分秘笈!',
                    date: '2025/5/5',
                    link: '#'
                },
                {
                    bn: '/activities/all/all-activity-1/bn.png',
                    title: '113-2 EMI TA開始報名囉!!',
                    desc: '為了英檢考試所苦嗎? 差一點點就達到門檻嗎? 讓考試達人們陪你一起面對各種考試。本次活動精選托福、雅思、GRE學生達人，真實的考試心得，分享獨門高分秘笈!',
                    date: '2025/4/28',
                    link: '#'
                },
                {
                    bn: '/activities/all/all-activity-1/bn.png',
                    title: '考試達人分享會五月份場次開始報名囉/ The upcoming Exam Expert Sharing Session in May',
                    desc: '為了英檢考試所苦嗎? 差一點點就達到門檻嗎? 讓考試達人們陪你一起面對各種考試。本次活動精選托福、雅思、GRE學生達人，真實的考試心得，分享獨門高分秘笈!',
                    date: '2025/4/21',
                    link: '#'
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
                    link: '#'
                },
                {
                    bn: '/activities/all/all-activity-1/bn.png',
                    title: '️How Faculty Can Harness Generative AI for Enhanced Learning',
                    desc: '為了英檢考試所苦嗎? 差一點點就達到門檻嗎? 讓考試達人們陪你一起面對各種考試。本次活動精選托福、雅思、GRE學生達人，真實的考試心得，分享獨門高分秘笈!',
                    date: '2025/5/5',
                    link: '#'
                },
                {
                    bn: '/activities/all/all-activity-1/bn.png',
                    title: '113-2 EMI TA開始報名囉!!',
                    desc: '為了英檢考試所苦嗎? 差一點點就達到門檻嗎? 讓考試達人們陪你一起面對各種考試。本次活動精選托福、雅思、GRE學生達人，真實的考試心得，分享獨門高分秘笈!',
                    date: '2025/4/28',
                    link: '#'
                },
                {
                    bn: '/activities/all/all-activity-1/bn.png',
                    title: '考試達人分享會五月份場次開始報名囉/ The upcoming Exam Expert Sharing Session in May',
                    desc: '為了英檢考試所苦嗎? 差一點點就達到門檻嗎? 讓考試達人們陪你一起面對各種考試。本次活動精選托福、雅思、GRE學生達人，真實的考試心得，分享獨門高分秘笈!',
                    date: '2025/4/21',
                    link: '#'
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
                    link: '#'
                },
                {
                    bn: '/activities/all/all-activity-1/bn.png',
                    title: '️How Faculty Can Harness Generative AI for Enhanced Learning',
                    desc: '為了英檢考試所苦嗎? 差一點點就達到門檻嗎? 讓考試達人們陪你一起面對各種考試。本次活動精選托福、雅思、GRE學生達人，真實的考試心得，分享獨門高分秘笈!',
                    date: '2025/5/5',
                    link: '#'
                },
                {
                    bn: '/activities/all/all-activity-1/bn.png',
                    title: '113-2 EMI TA開始報名囉!!',
                    desc: '為了英檢考試所苦嗎? 差一點點就達到門檻嗎? 讓考試達人們陪你一起面對各種考試。本次活動精選托福、雅思、GRE學生達人，真實的考試心得，分享獨門高分秘笈!',
                    date: '2025/4/28',
                    link: '#'
                },
                {
                    bn: '/activities/all/all-activity-1/bn.png',
                    title: '考試達人分享會五月份場次開始報名囉/ The upcoming Exam Expert Sharing Session in May',
                    desc: '為了英檢考試所苦嗎? 差一點點就達到門檻嗎? 讓考試達人們陪你一起面對各種考試。本次活動精選托福、雅思、GRE學生達人，真實的考試心得，分享獨門高分秘笈!',
                    date: '2025/4/21',
                    link: '#'
                },
        ]
    },
]);

</script>