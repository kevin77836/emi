<template>
    <div class="p-student">
        <section id="news" class="news-section">
            <div class="section-wrapper">
                <div class="c-title section-title">Latest news</div>
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
        <section id="regulations" class="regulations-section">
            <div class="section-wrapper">
                <div class="c-title section-title">Regulations</div>
                <div class="regulations-group">
                    <a class="c-regulation-card" v-for="(regulationItem, regulationIndex) in regulationsData" :key="'student-regulationItem-'+regulationIndex" :href="regulationItem.link">
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
                <div class="fixed-card-title">Students</div>
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
                title: "Is Foreign Culture Foreign_Session 2_ Do's and Don'ts for College Life",
                date: '2025/6/4',
                link: '/news/page'
            },
            {
                title: '️The upcoming Exam Expert Sharing Session in April',
                date: '2025/5/5',
                link: '/news/page'
            },
            {
                title: 'Student Speakers Wanted:: Share Your Study Abroad Application Experience',
                date: '2025/4/28',
                link: '/news/page'
            },
            {
                title: 'Is Foreign Culture Foreign_Session 1_Spring Celebration',
                date: '2025/4/21',
                link: '/news/page'
            },
            {
                title: "Is Foreign Culture Foreign_Session 2_ Do's and Don'ts for College Life",
                date: '2025/6/4',
                link: '/news/page'
            },
            {
                title: '️The upcoming Exam Expert Sharing Session in April',
                date: '2025/5/5',
                link: '/news/page'
            },
            {
                title: 'Student Speakers Wanted:: Share Your Study Abroad Application Experience',
                date: '2025/4/28',
                link: '/news/page'
            },
            {
                title: 'Is Foreign Culture Foreign_Session 1_Spring Celebration',
                date: '2025/4/21',
                link: '/news/page'
            },
    ]
});

const resourceData = ref([
    {
        title: 'English learning platform',
        data:[
            {
                title: 'Language Teaching and Research Center ',
                link: 'https://ltrc.nycu.edu.tw/'
            },
            {
                title: 'Language Learning and Writing Center (LLWC)',
                link: 'https://llwc.obe.nycu.edu.tw/'
            },
            {
                title: 'Test of English for English Medium Instruction',
                link: 'https://teemi.tw/'
            },
            {
                title: 'Bilingual Portal',
                link: 'https://www.ndc.gov.tw/Content_List.aspx?n=A3CE11B3737BA9EB&upn=5137965B2A81A120'
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
    {
        title: 'BEST Test of English Proficiency',
        data:[
            {
                title: 'BESTEP',
                link: 'https://bestep.tw/'
            },
            {
                title: 'Practice test',
                link: 'https://bestep.tw/exam/index.aspx'
            },
        ]
    },
]);

const regulationsData = ref([
    {
        icon: '/student/icon-student-1.svg',
        title: 'Course Selection Policy',
        link: 'https://ltrc.nycu.edu.tw/downloads/'
    },
    {
        icon: '/student/icon-student-2.svg',
        title: 'English Testing Reward Program',
        link: '#'
    }
])
</script>