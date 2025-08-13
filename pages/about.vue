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
                        <div class="info-title c-title">關於中心</div>
                        <div class="info-desc">
                            <p>EMI課程教學與學習中心隸屬於本校雙語教育與學習推動辦公室 (The Office of Bilingual Education, OBE) 的功能性單位之一。</p>
                            <p>EMI課程教學與學習中心與校內外的相關機構和單位密切合作，致力於推動國立陽明交通大學的EMI課程 (English as a Medium of Instruction) 發展，關注於提供教師的教學資源和給予學生的學習支持。</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="team-section">
            <div class="section-wrapper">
                <div class="c-title">
                    團隊成員
                </div>
                <el-tabs v-model="activeName" class="teams-tabs">
                    <el-tab-pane label="中心成員" name="center">
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
                    <el-tab-pane label="英語團隊" name="english">
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
                    <el-tab-pane label="華語團隊" name="chinese">
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
        departmentTitle: '中心主任',
        name: '張靜芬',
        title: '副教務長',
        desc: '綜理及推動雙語計畫工作',
        tel: '(03)5171-2121 #31891',
        email: 'Email : cfchang@nycu.edu.tw'
    },
    {
        departmentTitle: '中心專員',
        name: '蘇芳渝',
        desc: '推廣及辦理教師雙語活動',
        tel: '(03)5171-2121 #31896',
        email: 'Email : isuresu@nycu.edu.tw'
    },
    {
        departmentTitle: '中心助理',
        name: '廖慧榆',
        desc: '推廣及辦理學生雙語活動',
        tel: '(03)5171-2121 #31836',
        email: 'Email : krisliao@nycu.edu.tw'
    },
    {
        departmentTitle: '中心助理',
        name: '黃昇華',
        desc: '推廣及辦理教師雙語活動',
        tel: '(03)5171-2121 #31856',
        email: 'Email : indyeel@nycu.edu.tw'
    },
    
    
]);

const englishTeam = ref([
    {
        departmentTitle: '語言教學與研究中心',
        name: '吳思葦',
        tel: '(03)571-2121 #52767',
        email: 'Email : lindawu@nycu.edu.tw'
    },
    {
        departmentTitle: '語言教學與研究中心',
        name: '李麥德 Michael P. Nicholas',
        tel: '(03) 571-2121 #52773',
        email: 'Email : mpnicholas@nycu.edu.tw'
    },
    {
        departmentTitle: '語言教學與研究中心',
        name: '秦毓婷',
        tel: '(03) 571-2121 #52768',
        email: 'Email : chintiffany@nycu.edu.tw'
    },
    {
        departmentTitle: '英語教學研究所 / 語言教學與研究中心',
        name: '張月菁',
        tel: '(03) 571-2121 #52776',
        email: 'Email : yuehchingchang@nycu.edu.tw'
    },
    {
        departmentTitle: '英語教學研究所 / 語言教學與研究中心',
        name: '楊芳盈',
        tel: '(03) 571-2121 #50130',
        email: 'Email : fyang@nycu.edu.tw'
    },
]);

const chineseTeam = ref([
    {
        departmentTitle: '華語教師團隊',
        name: '林佳慧',
        tel: '(03) 571-2121  #52406',
        email: 'Email : linjiahuilaoshi@nycu.edu.tw'
    },
    {
        departmentTitle: '華語教師團隊',
        name: '鄭彩娥',
        tel: '(03) 571-2121 #52402',
        email: 'Email : vickiezheng@nycu.edu.tw'
    },
]);

</script>