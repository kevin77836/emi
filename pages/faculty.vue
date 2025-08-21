<template>
    <div class="p-faculty">
        <section id="news" class="news-section">
            <div class="section-wrapper">
                <div class="c-title section-title">最新消息</div>
                <div class="news-item-group">
                    <NewsItem
                        v-for="(newItem, newIndex) in (newsData.showMore ? newsData.data : newsData.data.slice(0, 4))"
                        :key="'faculty-news-item-' + newIndex"
                        :data="newItem"
                    />
                </div>
                <div class="cta-group" v-if="newsData.data.length > 4">
                    <div class="c-button" @click="newsData.showMore = !newsData.showMore">
                        <div class="button-text">
                            <span v-if="newsData.showMore">較少</span>
                            <span v-else>更多</span>
                        </div>
                        <div class="button-img">
                            <img src="/icon-arrow.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="resource" class="resource-section">
            <div class="section-wrapper">
                <div class="c-title section-title">教學資源分享</div>
                <div class="link-group" v-for="(resourceItem, resourceIndex) in resourceData" :key="'faculty-resourceItem-'+resourceIndex">
                    <div class="link-gorup-title c-title title-grey">
                        {{ resourceItem.title }}
                    </div>
                    <div class="link-item-group">
                        <a :href="resourceData.link" class="c-link-item" v-for="(resourceData,resourceDataIndex) in resourceItem.data" :key="'faculty-resourceItem-'+resourceIndex+'-data-'+resourceDataIndex">
                            <div class="link-title">
                                {{ resourceData.title }}
                            </div>
                            <div class="link-arrow">
                                <img src="/icon-arrow.svg" alt="">
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section id="regulations" class="regulations-section">
            <div class="section-wrapper">
                <div class="c-title section-title">規章辦法</div>
                <div class="regulations-group">
                    <a class="c-regulation-card" v-for="(regulationItem, regulationIndex) in regulationsData" :key="'faculty-regulationItem-'+regulationIndex" :href="regulationItem.link">
                        <div class="regulation-card-icon">
                            <img :src="regulationItem.icon" alt="">
                        </div>
                        <div class="regulation-card-title">
                            {{ regulationItem.title }}
                        </div>
                    </a>
                </div>
            </div>
        </section>
        <div class="c-fixed-card">
            <div class="title-group">
                <div class="title-deco"></div>
                <div class="fixed-card-title">教師專區</div>
            </div>
            <div class="fixed-card-link-group">
                <a href="#news" class="fixed-card-link">
                    最新消息
                </a>
                <a href="#resource" class="fixed-card-link">
                    教學資源分享
                </a>
                <a href="#regulations" class="fixed-card-link">
                    規章辦法
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
const newsData = ref({
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
});

const resourceData = ref([
    {
        title: '線上課程',
        data:[
                {
                    title: '牛津線上課程',
                    link: '/resource/oxford-EMI-training'
                },
        ]
    },
    {
        title: '英語輔助寫作工具',
        data:[
                {
                    title: 'Grammarly',
                    link: '/resource/grammarly'
                },
        ]
    },
]);

const regulationsData = ref([
    {
        icon: '/faculty/icon-faculty-1.svg',
        title: '國際教授卓越教學(DVP)補助計畫',
        link: '/regulations/dvp'
    },
    {
        icon: '/faculty/icon-faculty-2.svg',
        title: '國立陽明交通大學國際合作課程補助計畫',
        link: '/regulations/international-collaborative-course'
    }
])
</script>