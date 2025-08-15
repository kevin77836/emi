<template>
    <div class="p-laws">
        <section class="laws-section">
            <div class="section-wrapper">
                <div class="title-group">
                    <div class="title-img">
                        <img src="/icon-law.svg" alt="">
                    </div>
                    <div class="c-title title-grey">Regulations</div>
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
        title: 'Regulations',
        data:[
                {
                    title: 'Distinguished Visiting Professorship (DVP) Subsidy Program',
                    link: '#'
                },
                {
                    title: 'Subsidization Program for EMI Supplementary Classes',
                    link: '#'
                },
                {
                    title: 'English Testing Reward Program',
                    link: '#'
                },
                {
                    title: 'Course Selection Policy',
                    link: '#'
                },
                {
                    title: 'Regulations on Chinese Course Credits  for International Students',
                    link: '#'
                },
        ]
    },
]);

</script>