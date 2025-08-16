<template>
    <div class="p-main-page">
        <section class="hero-section">
            <div class="hero-bg">
                <img src="/main-page/hero_bg.jpg" alt="">
            </div>
            <div class="hero-info-group">
                <div class="title-group">
                    <div class="title-ch hero-title">
                        雙語同行、學習啟航
                    </div>
                    <div class="title-en hero-title">
                        Learn in two languages, go twice as far 
                    </div>
                </div>
                <a href="/en/about" class="hero-cta-group">
                    <div class="hero-cta-text">
                        About EMI
                    </div>
                    <div class="hero-cta-img">
                        <img src="/icon-arrow.svg" alt="">
                    </div>
                </a>
            </div>
        </section>
        <section class="news-section">
            <div class="section-wrapper">
                <div class="news-group">
                    <div class="c-title">
                        Latest News
                    </div>
                    <div class="news-item-group">
                        <NewsItem
                            v-for="(item, index) in newsData"
                            :key="'index-news-item-' + index"
                            :data="item"
                        />
                    </div>
                    <a href="/en/news" class="c-button">
                        <div class="hero-cta-text">
                            More news
                        </div>
                        <div class="hero-cta-img">
                            <img src="/icon-arrow.svg" alt="">
                        </div>
                    </a>
                </div>
                <div class="img-carousel">
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
            </div>

        </section>
        <section class="contact-us-section">
            <div class="contact-us-group">
                <div class="info-group">
                    <div class="c-title title-grey">
                        Contact
                    </div>
                    <div class="info-name">
                        Chiaotung Campus
                    </div>
                    <div class="contact-group">
                        <div class="contact-item address">Room 115B, Science Building 1, No. 1001, Daxue Rd. East Dist., Hsinchu City 300093, Taiwan</div>
                        <div class="contact-item tel">TEL  (03) 571-2121 ext. 31836</div>
                        <div class="contact-item email">EMAIL  obe@nycu.edu.tw</div>
                    </div>
                </div>
                <div class="map-group">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4713.778239956684!2d120.99147726707352!3d24.787126790511007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34683657ef245f31%3A0x3929da7f3a723e9a!2z5ZyL56uL6Zm95piO5Lqk6YCa5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1754984358570!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

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

const newsData = ref([
    {
      title: '【EMI Sharing】Recovery and Discovery: My Journey as an Instructor in EMI Teaching',
      date: '2025/6/4',
      link: '/news/page'
    },
    {
      title: "Is Foreign Culture Foreign_Session 2_ Do's and Don'ts for College Life",
      date: '2025/5/5',
      link: '/news/page'
    },
    {
      title: 'The upcoming Exam Expert Sharing Session in April',
      date: '2025/4/28',
      link: '/news/page'
    },
    {
      title: 'Student Speakers Wanted : Share Your Study Abroad Application Experience',
      date: '2025/4/21',
      link: '/news/page'
    },
]);
</script>