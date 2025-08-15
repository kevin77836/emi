<template>
    <div class="p-student">
        <section id="news" class="news-section">
            <div class="section-wrapper">
                <div class="c-title section-title">最新消息</div>
                <div class="news-item-group">
                    <NewsItem
                        v-for="(newItem, newIndex) in (newsData.showMore ? newsData.data : newsData.data.slice(0, 4))"
                        :key="'student-news-item-' + newIndex"
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
                <div class="c-title section-title">學習資源分享</div>
                <div class="link-group" v-for="(resourceItem, resourceIndex) in resourceData" :key="'student-resourceItem-'+resourceIndex">
                    <div class="link-gorup-title c-title title-grey">
                        {{ resourceItem.title }}
                    </div>
                    <div class="link-item-group">
                        <a :href="resourceData.link" class="c-link-item" v-for="(resourceData,resourceDataIndex) in resourceItem.data" :key="'student-resourceItem-'+resourceIndex+'-data-'+resourceDataIndex">
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
        <section id="laws" class="laws-section">
            <div class="section-wrapper">
                <div class="c-title section-title">規章辦法</div>
                <div class="laws-group">
                    <a class="c-law-card" v-for="(lawItem, lawIndex) in lawsData" :key="'student-lawItem-'+lawIndex" :href="lawItem.link">
                        <div class="law-card-icon">
                            <img :src="lawItem.icon" alt="">
                        </div>
                        <div class="law-card-title">
                            {{ lawItem.title }}
                        </div>
                    </a>
                </div>
            </div>
        </section>
        <div class="c-fixed-card">
            <div class="title-group">
                <div class="title-deco"></div>
                <div class="fixed-card-title">學生專區</div>
            </div>
            <div class="fixed-card-link-group">
                <a href="#news" class="fixed-card-link">
                    最新消息
                </a>
                <a href="#resource" class="fixed-card-link">
                    學習資源分享
                </a>
                <a href="#laws" class="fixed-card-link">
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
                title: '️How student Can Harness Generative AI for Enhanced Learning',
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
        title: '英文學習平台',
        data:[
            {
                title: '語言教學與研究中心',
                link: '#'
            },
            {
                title: '語言學習與寫作中心',
                link: '#'
            },
            {
                title: '英語文說寫能力檢測平台',
                link: '#'
            },
            {
                title: '國家發展委員會雙語資源網',
                link: '#'
            },

        ]
    },
    {
        title: '英語輔助寫作工具',
        data:[
            {
                title: 'Grammarly',
                link: '#'
            },
        ]
    },
    {
        title: '培力英檢',
        data:[
            {
                title: 'BESTEP培力英檢',
                link: '#'
            },
            {
                title: '模擬試題',
                link: '#'
            },
        ]
    },
]);

const lawsData = ref([
    {
        icon: '/student/icon-student-1.svg',
        title: '外語課程修習辦法',
        link: '#'
    },
    {
        icon: '/student/icon-student-2.svg',
        title: '國立陽明交通大學英語檢測獎勵方案',
        link: '#'
    }
])
</script>