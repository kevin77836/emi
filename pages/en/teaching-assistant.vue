<template>
    <div class="p-teaching-assistant">
        <section id="news" class="news-section">
            <div class="section-wrapper">
                <div class="c-title section-title">Latest news</div>
                <div class="news-item-group">
                    <NewsItem
                        v-for="(newItem, newIndex) in (newsData.showMore ? newsData.data : newsData.data.slice(0, 4))"
                        :key="'teaching-assistant-news-item-' + newIndex"
                        :data="newItem"
                    />
                </div>
                <div class="cta-group" v-if="newsData.data.length > 4">
                    <div class="c-button" @click="newsData.showMore = !newsData.showMore">
                        <div class="button-text">
                            <span v-if="newsData.showMore">Less</span>
                            <span v-else>More</span>
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
                <div class="c-title section-title">Resources for EMI</div>
                <div class="link-group" v-for="(resourceItem, resourceIndex) in resourceData" :key="'teaching-assistant-resourceItem-'+resourceIndex">
                    <div class="link-gorup-title c-title title-grey">
                        {{ resourceItem.title }}
                    </div>
                    <div class="link-item-group">
                        <a :href="resourceData.link" class="c-link-item" v-for="(resourceData,resourceDataIndex) in resourceItem.data" :key="'teaching-assistant-resourceItem-'+resourceIndex+'-data-'+resourceDataIndex">
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
                <div class="c-title section-title">Regulations</div>
                <div class="laws-group">
                    <a class="c-law-card" v-for="(lawItem, lawIndex) in lawsData" :key="'teaching-assistant-lawItem-'+lawIndex" :href="lawItem.link">
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
                <div class="fixed-card-title">Teaching assistant</div>
            </div>
            <div class="fixed-card-link-group">
                <a href="#news" class="fixed-card-link">
                    Latest news
                </a>
                <a href="#resource" class="fixed-card-link">
                    Resources for EMI
                </a>
                <a href="#laws" class="fixed-card-link">
                    Regulations
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
                title: '113B Subsidization Program for EMI Supplementary Classes',
                date: '2025/6/4',
                link: '/news/page'
            },
            {
                title: '️113A Subsidization Program for EMI Supplementary Classes',
                date: '2025/5/5',
                link: '/news/page'
            },
            {
                title: '112-1 EMI TA POWER UP',
                date: '2025/4/28',
                link: '/news/page'
            },
    ]
});

const resourceData = ref([
    {
        title: 'TA Workshop',
        data:[
            {
                title: 'EMI TA Workshop',
                link: '#'
            },
            {
                title: 'NTU EMI TA Training',
                link: '#'
            },
            {
                title: 'EMI TA Professional Development Program',
                link: '#'
            },
        ]
    },
]);

const lawsData = ref([
    {
        icon: '/teaching-assistant/icon-teaching-assistant-1.svg',
        title: 'Subsidization Program for EMI Supplementary classes',
        link: '#'
    },
])
</script>