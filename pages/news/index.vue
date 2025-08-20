<template>
    <div class="p-news-index">
        <section class="hero-section">
            <div class="hero-bg">
                <img src="/news/hero_bg.png" alt="">
            </div>
            <div class="hero-info-group">
                <div class="title-group">
                    <div class="title-en hero-title">
                        Latest news
                    </div>
                    <div class="title-ch hero-title">
                        最新消息
                    </div>
                </div>
            </div>
        </section>
        <section class="news-section">
            <div class="section-wrapper">
                <el-tabs v-model="activeName" class="c-el-tabs news-tabs">
                    <el-tab-pane v-for="(tab,tabIndex) in newsData" :key="'new-pane-'+tabIndex" :label="tab.label" :name="tab.name">
                        <div class="pane-content">
                            <div class="c-title">{{ tab.title }}</div>
                            <div class="news-item-group">
                                <NewsItem
                                    v-for="(item, index) in (tab.showMore ? tab.data : tab.data.slice(0, 4))"
                                    :key="'new-pane-'+tabIndex+'-news-item-' + index"
                                    :data="item"
                                />
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

const newsData = ref([
    {
        label: 'All',
        name: 'all',
        title: '校內/外活動',
        showMore: false,
        data:[
                {
                    title: '申請英語檢測獎勵說明',
                    date: '2025/6/4',
                    link: '/news/page'
                },
                {
                    title: '️How Faculty Can Harness Generative AI for Enhanced Learning',
                    date: '2025/5/5',
                    link: '/news/page'
                },
                {
                    title: '113-2 EMI TA開始報名囉!!',
                    date: '2025/4/28',
                    link: '/news/page'
                },
                {
                    title: '考試達人分享會五月份場次開始報名囉/ The upcoming Exam Expert Sharing Session in May',
                    date: '2025/4/21',
                    link: '/news/page'
                },
                {
                    title: '【EMI教師分享會】重建與探索:我的EMI教學之旅 Recovery and Discovery: My Journey as an Instructor in EMI Teaching',
                    date: '2025/4/14',
                    link: '/news/page'
                },
        ]
    },
    {
        label: '教師',
        name: 'faculty',
        title: '校內/外活動',
        data:[
                {
                    title: '申請英語檢測獎勵說明',
                    date: '2025/6/4',
                    link: '/news/page'
                },
                {
                    title: '️How Faculty Can Harness Generative AI for Enhanced Learning',
                    date: '2025/5/5',
                    link: '/news/page'
                },
                {
                    title: '113-2 EMI TA開始報名囉!!',
                    date: '2025/4/28',
                    link: '/news/page'
                },
                {
                    title: '考試達人分享會五月份場次開始報名囉/ The upcoming Exam Expert Sharing Session in May',
                    date: '2025/4/21',
                    link: '/news/page'
                },
        ]
    },
    {
        label: '學生',
        name: 'student',
        title: '校內/外活動',
        data:[
                {
                    title: '申請英語檢測獎勵說明',
                    date: '2025/6/4',
                    link: '/news/page'
                },
                {
                    title: '️How Faculty Can Harness Generative AI for Enhanced Learning',
                    date: '2025/5/5',
                    link: '/news/page'
                },
                {
                    title: '113-2 EMI TA開始報名囉!!',
                    date: '2025/4/28',
                    link: '/news/page'
                },
                {
                    title: '考試達人分享會五月份場次開始報名囉/ The upcoming Exam Expert Sharing Session in May',
                    date: '2025/4/21',
                    link: '/news/page'
                },
        ]
    },
    {
        label: '助教',
        name: 'assistant',
        title: '校內/外活動',
        data:[
                {
                    title: '申請英語檢測獎勵說明',
                    date: '2025/6/4',
                    link: '/news/page'
                },
                {
                    title: '️How Faculty Can Harness Generative AI for Enhanced Learning',
                    date: '2025/5/5',
                    link: '/news/page'
                },
                {
                    title: '113-2 EMI TA開始報名囉!!',
                    date: '2025/4/28',
                    link: '/news/page'
                },
                {
                    title: '考試達人分享會五月份場次開始報名囉/ The upcoming Exam Expert Sharing Session in May',
                    date: '2025/4/21',
                    link: '/news/page'
                },
        ]
    },
]);

</script>