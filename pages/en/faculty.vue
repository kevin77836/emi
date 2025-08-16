<template>
    <div class="p-faculty">
        <section id="news" class="news-section">
            <div class="section-wrapper">
                <div class="c-title section-title">Latest news</div>
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
                <div class="c-title section-title">Regulations</div>
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
                <div class="fixed-card-title">Faculty</div>
            </div>
            <div class="fixed-card-link-group">
                <a href="#news" class="fixed-card-link">
                    Latest news
                </a>
                <a href="#resource" class="fixed-card-link">
                    Resources for EMI
                </a>
                <a href="#regulations" class="fixed-card-link">
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
                title: '【EMI Sharing】Recovery and Discovery: My Journey as an Instructor in EMI Teaching',
                date: '2025/6/4',
                link: '/news/page'
            },
            {
                title: '️【EMI Sharing】AI-Enhanced EMI Teaching – More Interactive & Efficient',
                date: '2025/5/5',
                link: '/news/page'
            },
            {
                title: '【EMI Sharing】Professor Chen-Yu Lin_Maximizing EMI Learning Experiences Through Interactive Classes - A Case Study of Teaching in Transportation',
                date: '2025/4/28',
                link: '/news/page'
            },
            {
                title: '【EMI Sharing】Distinguished Professor Kate Ching-Ju Lin_How to Stimulate Interest in Learning in EMI Teaching: A Case Study of Networking Technologies',
                date: '2025/4/21',
                link: '/news/page'
            },
            {
                title: '【EMI Sharing】Recovery and Discovery: My Journey as an Instructor in EMI Teaching',
                date: '2025/6/4',
                link: '/news/page'
            },
            {
                title: '️【EMI Sharing】AI-Enhanced EMI Teaching – More Interactive & Efficient',
                date: '2025/5/5',
                link: '/news/page'
            },
            {
                title: '【EMI Sharing】Professor Chen-Yu Lin_Maximizing EMI Learning Experiences Through Interactive Classes - A Case Study of Teaching in Transportation',
                date: '2025/4/28',
                link: '/news/page'
            },
            {
                title: '【EMI Sharing】Distinguished Professor Kate Ching-Ju Lin_How to Stimulate Interest in Learning in EMI Teaching: A Case Study of Networking Technologies',
                date: '2025/4/21',
                link: '/news/page'
            },
    ]
});

const resourceData = ref([
    {
        title: 'Online Course',
        data:[
                {
                    title: 'Oxford EMI Training',
                    link: '/en/resource/oxford-EMI-training'
                },
        ]
    },
    {
        title: 'English writing assistant',
        data:[
                {
                    title: 'Grammarly',
                    link: '/en/resource/grammarly'
                },
        ]
    },
]);

const regulationsData = ref([
    {
        icon: '/faculty/icon-faculty-1.svg',
        title: 'Distinguished Visiting Professorship (DVP) Subsidy Program',
        link: '/en/regulations/dvp'
    },
])
</script>