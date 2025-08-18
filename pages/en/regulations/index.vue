<template>
    <div class="p-regulations">
        <section class="regulations-section">
            <div class="section-wrapper">
                <div class="title-group">
                    <div class="title-img">
                        <img src="/icon-regulation.svg" alt="">
                    </div>
                    <div class="c-title title-grey">Regulations</div>
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
        title: 'Regulations',
        data:[
                {
                    title: 'Distinguished Visiting Professorship (DVP) Subsidy Program',
                    link: '/en/regulations/dvp'
                },
                {
                    title: 'Subsidization Program for EMI Supplementary Classes',
                    link: '/en/regulations/supplementary-classes'
                },
                {
                    title: 'English Testing Reward Program',
                    link: 'https://drive.google.com/file/d/1Dq0tT7FFCEx7kzV95XHWEn26cpqeUi9Z/view?usp=sharing'
                },
                {
                    title: 'Course Selection Policy',
                    link: 'https://ltrc.nycu.edu.tw/downloads/'
                },
                {
                    title: 'Regulations on Chinese Course Credits  for International Students',
                    link: 'https://mandarin.ltrc.nycu.edu.tw/download/'
                },
        ]
    },
]);

</script>