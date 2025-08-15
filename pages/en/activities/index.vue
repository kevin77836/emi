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
                    <el-tab-pane v-for="(tab,tabIndex) in activitiesData" :key="'activities-pane-'+tabIndex" :name="tab.name">
                        <template #label>
                            <div v-html="tab.label"></div>
                        </template>
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

const activitiesData = ref([
    {
        label: 'All',
        name: 'all',
        showMore: false,
        data:[
                {
                    bn: '/activities/all/all-activity-1/bn.png',
                    title: '️How Faculty Can Harness Generative AI for Enhanced Learning🕵',
                    desc: 'Professor Curtis J. Bonk, an expert in instructional technology from Indiana University, will share practical applications of generative AI in higher education.',
                    date: '2025-06-12',
                    link: '/activities/page'
                },
                {
                    bn: '/activities/all/all-activity-2/bn.png',
                    title: '️EMI Support Gathering: Share Your Thoughts Over Lunch and Win a Prize!',
                    desc: 'Professors Yu-Ting Ching and Sih-Wei Wu will co-host an in-person event — “EMI Support Gathering.”Join us for fun games , interactive activities with the professors, and a chance to share your EMI learning experiences .Exciting prizes await you in our lucky draw — don’t miss out!',
                    date: '2025-05-15',
                    link: '/activities/page'
                },
                {
                    bn: '/activities/all/all-activity-3/bn.png',
                    title: '2025 Cross-Cultural Dialogue – Session 3: Being a Student, the Way I Know It',
                    desc: '️This event invites you to share your own or your classmates’ real experiences in different education systems, learning environments, and campus cultures. Come listen to fascinating stories and perspectives — you might realize that there’s no single way to learn! 🌍Let’s explore how student life differs across the globe, together!',
                    date: '2025-06-12',
                    link: '/activities/page'
                },
                {
                    bn: '/activities/all/all-activity-4/bn.png',
                    title: 'Study Abroad Application Experience Sharing Session',
                    desc: 'Insider Application Tips × Study Abroad Insights × Preparation Strategies All students interested in studying abroad or interdisciplinary applications are welcome to join!',
                    date: '2025-05-09',
                    link: '/activities/page'
                },
                {
                    bn: '/activities/all/all-activity-5/bn.png',
                    title: 'Registration for 113-2 EMI TAs is now open!!',
                    desc: 'Want to become the ultimate teammate for both teachers and students in EMI classes? Professor Sih-Wei Wu (Linda) has specially designed two hands-on workshops just for EMI TAs — helping you level up your TA skills from every angle!  ',
                    date: '2025-05-20',
                    link: '/activities/page'
                },
                {
                    bn: '/activities/all/all-activity-6/bn.png',
                    title: 'Registration for the May sessions of the Exam Master Talk Series is now open!',
                    desc: 'Feeling stuck preparing for English exams? Almost reaching the benchmark but not quite there? Join our exam pros as they share strategies and support to help you overcome every testing challenge!',
                    date: '2025-05-02',
                    link: '/activities/page'
                },
                {
                    bn: '/activities/all/all-activity-1/bn.png',
                    title: '️How Faculty Can Harness Generative AI for Enhanced Learning🕵',
                    desc: 'Professor Curtis J. Bonk, an expert in instructional technology from Indiana University, will share practical applications of generative AI in higher education.',
                    date: '2025-06-12',
                    link: '/activities/page'
                },
                {
                    bn: '/activities/all/all-activity-2/bn.png',
                    title: '️EMI Support Gathering: Share Your Thoughts Over Lunch and Win a Prize!',
                    desc: 'Professors Yu-Ting Ching and Sih-Wei Wu will co-host an in-person event — “EMI Support Gathering.”Join us for fun games , interactive activities with the professors, and a chance to share your EMI learning experiences .Exciting prizes await you in our lucky draw — don’t miss out!',
                    date: '2025-05-15',
                    link: '/activities/page'
                },
        ]
    },
    {
        label: 'Faculty',
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
        label: 'Students',
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
        label: 'Teaching<br>Assistant',
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