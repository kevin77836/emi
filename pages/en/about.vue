<template>
    <div class="p-about">
        <section class="main-section">
            <div class="section-wrapper">
                <div class="section-title c-title title-grey">
                    雙語同行、學習啟航<br>
                    Learn in two languages, go twice as far 
                </div>
                <div class="info-group">
                    <div class="info-img-carousel">
                        <ClientOnly>
                            <Swiper v-bind="swiperConfig" :modules="modules">
                                <SwiperSlide>
                                    <img src="/main-page/news-img/news-img-1.avif" alt="">
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/main-page/news-img/news-img-2.avif" alt="">
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/main-page/news-img/news-img-3.avif" alt="">
                                </SwiperSlide>
                            </Swiper>
                        </ClientOnly>
                    </div>
                    <div class="info-content">
                        <div class="info-title c-title">About Center</div>
                        <div class="info-desc">
                            <p>The EMI (English as a Medium of Instruction) Teaching and Learning Center is one of the functional units under the Office of Bilingual Education (OBE) at National Yang Ming Chiao Tung University.</p>
                            <p>The EMI Center collaborates closely with relevant institutions and units both within and outside the university, dedicated to promoting the development of EMI courses at our University. It focuses on providing teaching resources for instructors and offering learning support for students.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="team-section">
            <div class="section-wrapper">
                <div class="c-title">
                    Members
                </div>
                <el-tabs v-model="activeName" class="c-el-tabs teams-tabs">
                    <el-tab-pane name="center">
                        <template #label>
                            EMI<br>Center
                        </template>
                        <div class="team-grid">
                            <div v-for="(memberData,index) in centerTeam" :key="'center-member-'+index" class="c-team-card">
                                <div class="department-title">
                                    {{memberData.departmentTitle}}
                                </div>
                                <div class="name-group">
                                    <div class="name">{{memberData.name}}</div>
                                    <div v-if="memberData.title" class="name-title">{{memberData.title}}</div>
                                </div>
                                <div v-if="memberData.desc" class="team-desc">
                                    {{memberData.desc}}
                                </div>
                                <div class="info-group">
                                    <div class="tel">
                                        {{memberData.tel}}
                                    </div>
                                    <div class="email">
                                        {{memberData.email}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane name="english">
                        <template #label>
                            English<br>Division
                        </template>
                        <div class="team-grid">
                            <div v-for="(memberData,index) in englishTeam" :key="'center-member-'+index" class="c-team-card">
                                <div class="department-title">
                                    {{memberData.departmentTitle}}
                                </div>
                                <div class="name-group">
                                    <div class="name">{{memberData.name}}</div>
                                    <div v-if="memberData.title" class="name-title">{{memberData.title}}</div>
                                </div>
                                <div v-if="memberData.desc" class="team-desc">
                                    {{memberData.desc}}
                                </div>
                                <div class="info-group">
                                    <div class="tel">
                                        {{memberData.tel}}
                                    </div>
                                    <div class="email">
                                        {{memberData.email}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane name="chinese">
                        <template #label>
                            Chinese<br>Division
                        </template>
                        <div class="team-grid">
                            <div v-for="(memberData,index) in chineseTeam" :key="'center-member-'+index" class="c-team-card">
                                <div class="department-title">
                                    {{memberData.departmentTitle}}
                                </div>
                                <div class="name-group">
                                    <div class="name">{{memberData.name}}</div>
                                    <div v-if="memberData.title" class="name-title">{{memberData.title}}</div>
                                </div>
                                <div v-if="memberData.desc" class="team-desc">
                                    {{memberData.desc}}
                                </div>
                                <div class="info-group">
                                    <div class="tel">
                                        {{memberData.tel}}
                                    </div>
                                    <div class="email">
                                        {{memberData.email}}
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
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import ElementPlus from 'element-plus';

const modules = [Autoplay, EffectFade]

const swiperConfig = {
  slidesPerView: 1,
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false
  },
  speed: 500,
}

const activeName = ref('center');

const centerTeam = ref([
    {
        departmentTitle: 'Director',
        name: 'Ching-Fen Chang',
        desc: 'Facilitate and advance the implementation of a comprehensive bilingual program',
        tel: '(03)5171-2121 #31891',
        email: 'Email : cfchang@nycu.edu.tw'
    },
    {
        departmentTitle: 'Coordinator',
        name: 'Isure Su',
        desc: 'Planning for Faculty Activities',
        tel: '(03)5171-2121 #31896',
        email: 'Email : isuresu@nycu.edu.tw'
    },
    {
        departmentTitle: 'Project Assistant',
        name: 'Hui-Yu Liao',
        desc: 'Planning for Student Activities',
        tel: '(03)5171-2121 #31836',
        email: 'Email : krisliao@nycu.edu.tw'
    },
    {
        departmentTitle: 'Project Assistant',
        name: 'Lindsey Huang',
        desc: 'Planning for Faculty Activities',
        tel: '(03)5171-2121 #31856',
        email: 'Email : indyeel@nycu.edu.tw'
    },
    
    
]);

const englishTeam = ref([
    {
        departmentTitle: 'Language Teaching and Research Center',
        name: 'Szu-Wei (Linda) Wu',
        tel: '(03)571-2121 #52767',
        email: 'Email : lindawu@nycu.edu.tw'
    },
    {
        departmentTitle: 'Language Teaching and Research Center',
        name: 'Michael P. Nicholas',
        tel: '(03) 571-2121 #52773',
        email: 'Email : mpnicholas@nycu.edu.tw'
    },
    {
        departmentTitle: 'Language Teaching and Research Center',
        name: 'Tiffany Y. Chin',
        tel: '(03) 571-2121 #52768',
        email: 'Email : chintiffany@nycu.edu.tw'
    },
    {
        departmentTitle: 'Institute of Teaching English to Speakers of Other Languages / Language Teaching and Research Center',
        name: 'Yueh-Ching Chang',
        tel: '(03) 571-2121 #52776',
        email: 'Email : yuehchingchang@nycu.edu.tw'
    },
    {
        departmentTitle: 'Institute of Teaching English to Speakers of Other Languages / Language Teaching and Research Center',
        name: 'Fang-Ying Yang',
        tel: '(03) 571-2121 #50130',
        email: 'Email : fyang@nycu.edu.tw'
    },
]);

const chineseTeam = ref([
    {
        departmentTitle: 'Language Teaching and Research Center',
        name: 'Chia-Hui Lin',
        tel: '(03) 571-2121  #52406',
        email: 'Email : linjiahuilaoshi@nycu.edu.tw'
    },
    {
        departmentTitle: 'Language Teaching and Research Center',
        name: 'Vickie Zheng',
        tel: '(03) 571-2121 #52402',
        email: 'Email : vickiezheng@nycu.edu.tw'
    },
]);

</script>