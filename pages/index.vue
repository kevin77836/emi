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
                <a href="#" class="hero-cta-group">
                    <div class="hero-cta-text">
                        關於中心
                    </div>
                    <div class="hero-cta-img">
                        <img src="/icon-arrow.svg" alt="">
                    </div>
                </a>
            </div>
        </section>
        <section class="news-section">
            <div class="news-group">
                <div class="c-title">
                    最新消息
                </div>
                <div class="news-item-group">
                    <div class="news-item">
                        <div class="item-title">
                            申請英語檢測獎勵說明
                        </div>
                        <div class="item-date">
                            2025/6/4
                        </div>
                    </div>
                    <div class="news-item">
                        <div class="item-title">
                            申請英語檢測獎勵說明
                        </div>
                        <div class="item-date">
                            2025/6/4
                        </div>
                    </div>
                    <div class="news-item">
                        <div class="item-title">
                            申請英語檢測獎勵說明
                        </div>
                        <div class="item-date">
                            2025/6/4
                        </div>
                    </div>
                    <div class="news-item">
                        <div class="item-title">
                            申請英語檢測獎勵說明
                        </div>
                        <div class="item-date">
                            2025/6/4
                        </div>
                    </div>
                </div>
                <a href="#" class="c-button">
                    <div class="hero-cta-text">
                        更多消息
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
        </section>
        <section class="contact-us-section">
            <div class="contact-us-group">
                <div class="info-group">
                    <div class="c-title title-grey">
                        聯絡我們
                    </div>
                    <div class="info-name">
                        交大校區
                    </div>
                    <div class="contact-group">
                        <div class="contact-item address">30010 新竹市東區大學路1001號 科學1館1樓115B</div>
                        <div class="contact-item tel">TEL  (03) 571-2121 分機 31836</div>
                        <div class="contact-item email">EMAIL  obe@nycu.edu.tw</div>
                    </div>
                </div>
                <div class="map-group">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463648.02014302457!2d120.42071467343749!3d24.78688620000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34683657ef245f31%3A0x3929da7f3a723e9a!2z5ZyL56uL6Zm95piO5Lqk6YCa5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1754843561643!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
</script>