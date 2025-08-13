<template>
    <div class="p-resource">
        <section class="resource-section">
            <div class="section-wrapper">
                <div class="title-group">
                    <div class="title-img">
                        <img src="/icon-resource.svg" alt="">
                    </div>
                    <div class="c-title title-grey">學習資源</div>
                </div>
                <div class="link-group" v-for="(resourceItem, index) in resourceData" :key="'resourceItem-'+index">
                    <div class="link-gorup-title">
                        {{ resourceItem.title }}
                    </div>
                    <div class="link-item-group">
                        <a :href="data.link" class="c-link-item" v-for="(data,dataIndex) in resourceItem.data" :key="'resourceItem-'+index+'-data-'+dataIndex">
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
const activeName = ref('all');

const resourceData = ref([
    {
        title: '教學增能',
        data:[
                {
                    title: '英國牛津線上課程',
                    link: '#'
                },
        ]
    },
    {
        title: '軟體服務',
        data:[
                {
                    title: 'Grammarly',
                    link: '#'
                },
        ]
    },
    {
        title: '英語學習',
        data:[
                {
                    title: 'NYCU OBE YouTube',
                    link: '#'
                },
                {
                    title: "校園英語 Podcast 《Your Senpais' Here》",
                    link: '#'
                },
        ]
    },{
        title: '校內相關單位',
        data:[
                {
                    title: '雙語教育與學習推動辦公室',
                    link: '#'
                },
                {
                    title: '語言教學與研究中心',
                    link: '#'
                },
                {
                    title: '語言學習與寫作中心',
                    link: '#'
                },
        ]
    },
    {
        title: '校外相關單位',
        data:[
                {
                    title: '國立中山大學 南區雙語教育區域資源中心',
                    link: '#'
                },
                {
                    title: '國立成功大學 大學雙語教師專業發展中心',
                    link: '#'
                },
                {
                    title: '國立臺灣大學 EMI教學資源中心',
                    link: '#'
                },
                {
                    title: '國立臺灣師範大學 EMI教學資源中心',
                    link: '#'
                },
                {
                    title: '國立中興大學 EMI教學資源中心',
                    link: '#'
                },
                {
                    title: '國立臺灣科技大學EMI教學資源中心',
                    link: '#'
                },
        ]
    },
]);

</script>