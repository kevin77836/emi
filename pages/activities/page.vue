<template>
    <div class="p-page">
        <section class="page-section">
            <div class="section-wrapper">
                <div class="page-date">
                    2025/6/12
                </div>
                <div class="c-title title-grey">
                    How Faculty Can Harness Generative AI for Enhanced Learning🕵
                </div>
                <div class="page-content">
                    <div class="page-group">
                        <div>
                            <span class="highlight">時間</span>｜114年6月12日（週四）9:00 - 11:00<br>
                            <span class="highlight">地點</span>｜陽明交通大學 光復校區 人社一館216教室<br>
                            <span class="highlight">線上同步直播</span>｜提供遠距參與（活動前一天寄送連結）<br>
                            <span class="highlight">講者</span>｜ Curtis J. Bonk 教授（Indiana University, Bloomington Instructional Systems Technology）<br>
                            <span class="highlight">講座語言</span>｜全英語演講<br>
                            <span class="highlight">參加對象</span>｜全國大專校院教師<br>
                            <span class="highlight">報名方式</span>｜即日起至6/9止，於表單連結 https://docs.google.com/forms/d/1ejVFUzqN7wmvblBFSVlx0n04YIqiKukTXyz2ADLN1IE/viewform?edit_requested=true<br>
                            <span class="highlight">人數上限</span>｜實體參與35名、線上參與100名<br>
                            <span class="highlight">聯絡人</span>｜陽明交大教發中心 吳婉萍助理 (wanping@nycu.edu.tw，03-5712121#50143)<br>
                        </div>
                    </div>
                    
                    <div class="page-group">
                        <div class="page-img">
                            <img src="/activities/all/all-activity-1/bn.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="cta">
                    <a @click="backPage" class="c-button">
                        <div>
                            回上一頁
                        </div>
                        <div class="button-img">
                            <img src="/icon-arrow.svg" alt="">
                        </div>
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    const smartBack = useSmartBack();
    const backPage = () => smartBack();
</script>
