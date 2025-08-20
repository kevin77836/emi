<template>
    <div class="p-page">
        <section class="page-section">
            <div class="section-wrapper">
                <h2 class="c-title title-grey">
                    英國牛津線上課程《Oxford EMI Training》
                </h2>
                <div class="page-content">
                    <div class="page-group">
                        <h4 class="highlight">(一) 課程說明</h4>
                        <p>
                            本課程由英國牛津EMI培訓中心獨家設計，專為高等教育機構需以英語授課之教師及專業人士所打造。課程針對EMI教學各階段需求，規劃四大核心學習模組，內容涵蓋<span class="highlight">EMI課堂設計與互動策略、教育政策、學術英語與跨文化溝通技巧、教學媒材與課室管理</span>，課程總時數40小時，完成後將核發牛津EMI培訓中心修業證書。
                        </p>
                        <p>
                            詳細內容請參閱附件：
                        </p>
                        <div class="link-group">
                            <a href="https://drive.google.com/uc?export=download&id=1r46nEw4JqrOg-PmuEHEPZgqlvQNIq8f1">《Participant Instructions - Accessing your Oxford EMI Self-Access course》</a>
                            <a href="https://drive.google.com/uc?export=download&id=1F5l4znWx1ZLynIannC6ek9QqrkH1zRlM">《Frequently Asked Questions》</a>
                        </div>
                    </div>
                    <div class="page-group">
                        <h4 class="highlight">(二) 費用說明</h4>
                        <ul>
                            <li>原課程費用為£530（約新臺幣21,783元）</li>
                            <li>本校全額補助，惟需預繳保證金5,000元</li>
                            <li>保證金退還條件：於修課期限內完成課程並取得證書</li>
                        </ul>
                    </div>
                    <div class="page-group">
                        <h4 class="highlight">(三) 修課期限</h4>
                        <ol>
                            <li>教師需提供相關資訊以利Oxford開通帳號。</li>
                            <li>帳號有效期限：帳號授權期限自8/1起為期一年, 逾期未完成者，帳號自動失效且保證金不予退還。</li>
                            <li>注意事項：</li>
                            <ul>
                                <li>逾期未完成者，帳號自動失效且保證金不予退還。</li>
                                <li>學習進度可自主安排，期間隨時登入修課。</li>
                            </ul>
                        </ol>
                    </div>
                    <div class="page-group">
                        <h4 class="highlight">(四) 報名注意事項</h4>
                        <ol>
                            <li>名額優先順序：</li>
                            <ul>
                                <li>首波開放「教育部大專校院學生雙語化學習計畫」所屬學院教師</li>
                                <li>次波開放其他學院專任教師（額滿即止）</li>
                                <li>報名表單： <a href="https://forms.gle/uLTQNoCnvuUi5jmq8">https://forms.gle/uLTQNoCnvuUi5jmq8</a></li>
                            </ul>
                            <li>報名流程：</li>
                            <ul>
                                <li>本辦公室確認資格後，將以電郵提供「聲明書」與保證金繳款資訊。</li>
                                <li>教師需簽署聲明書並掃描回傳，方完成報名程序。</li>
                            </ul>
                            <li>報名時間：即日起至額滿為止。</li>
                            <li>候補機制：</li>
                            <ul>
                                <li>若本次額滿，可聯繫辦公室登記候補；達一定人數將優先保留次年參訓名額。</li>
                            </ul>
                        </ol>
                        <div class="warning-hint">
                            ※ 注意：本課程資源珍貴，請審慎評估時間規劃後報名，以確保學習成效。
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