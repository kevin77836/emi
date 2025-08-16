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
                    link: '/en/resource/grammarly'
                },
        ]
    },
    {
        title: 'English learning',
        data:[
                {
                    title: 'NYCU OBE YouTube',
                    link: 'https://www.youtube.com/@NYCUOBE'
                },
                {
                    title: "Campus English Podcast 《Your Senpais' Here》",
                    link: 'https://open.firstory.me/user/senpaishere/platforms'
                },
        ]
    },{
        title: 'Relevant on-campus offices',
        data:[
                {
                    title: 'The Office of Bilingual Education',
                    link: 'https://aa.nycu.edu.tw/aa/ch/app/folder/2637'
                },
                {
                    title: 'Language Teaching and Research Center',
                    link: 'https://ltrc.nycu.edu.tw/'
                },
                {
                    title: 'Language Learning and Writing Center (LLWC)',
                    link: 'https://llwc.obe.nycu.edu.tw/'
                },
        ]
    },
    {
        title: 'Relevant off-campus organizations',
        data:[
                {
                    title: 'NSYSU Resource Center for Bilingual Education',
                    link: 'https://emi-tdc.nsysu.edu.tw/index.aspx'
                },
                {
                    title: 'NCKU EMI Professional Development Center',
                    link: 'https://emipd.tw/'
                },
                {
                    title: 'NTU EMI Teaching and Learning Center',
                    link: 'https://cbe.ntu.edu.tw/'
                },
                {
                    title: 'NTNU Resource Center for EMI',
                    link: 'https://www.obe.ntnu.edu.tw/index.php/rcemi_zh/'
                },
                {
                    title: 'NCHU EMI Teaching and Learning Center',
                    link: 'https://emitlc.nchu.edu.tw/en-US'
                },
                {
                    title: 'NTUST EMI Teaching and Learning Center',
                    link: 'https://ntusttlc.ntust.edu.tw/'
                },
        ]
    },
]);

</script>