<template>
    <div class="p-laws">
        <section class="laws-section">
            <div class="section-wrapper">
                <div class="title-group">
                    <div class="title-img">
                        <img src="/icon-law.svg" alt="">
                    </div>
                    <div class="c-title title-grey">法規辦法</div>
                </div>
                <div class="link-group" v-for="(lawItem, index) in lawsData" :key="'lawItem-'+index">
                    <div class="link-gorup-title">
                        {{ lawItem.title }}
                    </div>
                    <div class="link-item-group">
                        <a :href="data.link" class="c-link-item" v-for="(data,dataIndex) in lawItem.data" :key="'lawItem-'+index+'-data-'+dataIndex">
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
const lawsData = ref([
    {
        title: '法規辦法',
        data:[
                {
                    title: '國際教授卓越教學(DVP)補助計畫',
                    link: '#'
                },
                {
                    title: '國立陽明交通大學國際合作課程補助計畫',
                    link: '#'
                },
                {
                    title: 'EMI補充課程補助方案',
                    link: '#'
                },
                {
                    title: '國立陽明交通大學英語檢測獎勵方案',
                    link: '#'
                },
                {
                    title: '外語課程修習辦法',
                    link: '#'
                },
                {
                    title: '外籍生華語課程學分修習辦法',
                    link: '#'
                },
        ]
    },
]);

</script>