<template>
    <div class="p-about">
        <section class="main-section">
            <div class="section-wrapper">
                <div class="c-title title-grey">
                    雙語同行、學習啟航<br>
                    Learn in two languages, go twice as far 
                </div>
                <div class="info-group">
                    <div class="info-img">
                        <img src="/about/main-img.avif" alt="">
                    </div>
                    <div class="info-content">
                        <div class="info-title c-title">關於中心</div>
                        <div class="info-desc">EMI課程教學與學習中心隸屬於本校雙語教育與學習推動辦公室(The Office of Bilingual Education, OBE)的功能性單位之一。<br><br>EMI課程教學與學習中心與校內外的相關機構和單位密切合作，致力於推動國立陽明交通大學的EMI課程 (English as a Medium of Instruction)發展，關注於提供教師的教學資源和給予學生的學習支持。</div>
                    </div>
                </div>
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