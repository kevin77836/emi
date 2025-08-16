<template>
    <div class="p-regulations">
        <section class="regulations-section">
            <div class="section-wrapper">
                <div class="title-group">
                    <div class="title-img">
                        <img src="/icon-regulation.svg" alt="">
                    </div>
                    <div class="c-title title-grey">法規辦法</div>
                </div>
                <div class="link-group" v-for="(regulationItem, index) in regulationsData" :key="'regulationItem-'+index">
                    <div class="link-gorup-title">
                        {{ regulationItem.title }}
                    </div>
                    <div class="link-item-group">
                        <a :href="data.link" class="c-link-item" v-for="(data,dataIndex) in regulationItem.data" :key="'regulationItem-'+index+'-data-'+dataIndex">
                            <div class="link-title">
                                {{ data.title }}
                            </div>
                            <div class="link-arrow">
                                <img src="/icon-arrow.svg" alt="">
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const regulationsData = ref([
    {
        title: '法規辦法',
        data:[
                {
                    title: '國際教授卓越教學(DVP)補助計畫',
                    link: '/regulations/dvp'
                },
                {
                    title: '國立陽明交通大學國際合作課程補助計畫',
                    link: '/regulations/international-collaborative-course'
                },
                {
                    title: 'EMI補充課程補助方案',
                    link: '/regulations/supplementary-classes'
                },
                {
                    title: '國立陽明交通大學英語檢測獎勵方案',
                    link: '/regulations/english-testing-reward-program'
                },
                {
                    title: '外語課程修習辦法',
                    link: 'https://ltrc.nycu.edu.tw/downloads/'
                },
                {
                    title: '外籍生華語課程學分修習辦法',
                    link: 'https://mandarin.ltrc.nycu.edu.tw/download/'
                },
        ]
    },
]);

</script>