<template>
    <div class="p-resource">
        <section class="resource-section">
            <div class="section-wrapper">
                <div class="title-group">
                    <div class="title-img">
                        <img src="/icon-resource.svg" alt="">
                    </div>
                    <div class="c-title title-grey">Learning Resources</div>
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
        title: 'Development Program',
        data:[
                {
                    title: 'Oxford EMI Training',
                    link: '/en/resource/oxford-EMI-training'
                },
        ]
    },
    {
        title: 'Software Services',
        data:[
                {
                    title: 'Grammarly',
                    link: '#'
                },
        ]
    },
    {
        title: 'English learning',
        data:[
                {
                    title: 'NYCU OBE YouTube',
                    link: '#'
                },
                {
                    title: "Campus English Podcast 《Your Senpais' Here》",
                    link: '#'
                },
        ]
    },{
        title: 'Relevant on-campus offices',
        data:[
                {
                    title: 'The Office of Bilingual Education',
                    link: '#'
                },
                {
                    title: 'Language Teaching and Research Center',
                    link: '#'
                },
                {
                    title: 'Language Learning and Writing Center (LLWC)',
                    link: '#'
                },
        ]
    },
    {
        title: 'Relevant off-campus organizations',
        data:[
                {
                    title: 'NSYSU Resource Center for Bilingual Education',
                    link: '#'
                },
                {
                    title: 'NCKU EMI Professional Development Center',
                    link: '#'
                },
                {
                    title: 'NTU EMI Teaching and Learning Center',
                    link: '#'
                },
                {
                    title: 'NTNU Resource Center for EMI',
                    link: '#'
                },
                {
                    title: 'NCHU EMI Teaching and Learning Center',
                    link: '#'
                },
                {
                    title: 'NTUST EMI Teaching and Learning Center',
                    link: '#'
                },
        ]
    },
]);

</script>