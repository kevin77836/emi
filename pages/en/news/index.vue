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
                    <el-tab-pane v-for="(tab,tabIndex) in newsData" :key="'new-pane-'+tabIndex" :name="tab.name">
                        <template #label>
                            <div class="en-tab" v-html="tab.label"></div>
                        </template>
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
                                        <span v-if="tab.showMore">Less</span>
                                        <span v-else>More</span>
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
        title: 'School activities',
        showMore: false,
        data:[
                {
                    title: '【EMI Sharing】Recovery and Discovery: My Journey as an Instructor in EMI Teaching',
                    date: '2025/6/4',
                    link: '/news/page'
                },
                {
                    title: "Is Foreign Culture Foreign_Session 2_ Do's and Don'ts for College Life",
                    date: '2025/5/5',
                    link: '/news/page'
                },
                {
                    title: 'The upcoming Exam Expert Sharing Session in April',
                    date: '2025/4/28',
                    link: '/news/page'
                },
                {
                    title: 'Student Speakers Wanted:: Share Your Study Abroad Application Experience',
                    date: '2025/4/21',
                    link: '/news/page'
                },
                {
                    title: '113B Subsidization Program for EMI Supplementary Classes',
                    date: '2025/4/14',
                    link: '/news/page'
                },
        ]
    },
    {
        label: 'Faculty',
        name: 'faculty',
        title: 'School activities',
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
        label: 'Students',
        name: 'student',
        title: 'School activities',
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
        label: 'Teaching<br>Assistant',
        name: 'assistant',
        title: 'School activities',
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