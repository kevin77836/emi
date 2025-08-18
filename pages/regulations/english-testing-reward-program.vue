<template>
    <div class="p-page">
        <section class="page-section">
            <div class="section-wrapper">
                <h2 class="c-title title-grey">
                    國立陽明交通大學「大專校院學生雙語化學習計畫」英語檢測獎勵方案
                </h2>
                <div class="page-content">
                    <div class="page-group">
                        <h4 class="highlight">一、</h4>
                        <p>
                            「培力英檢 BESTEP」: 通過 B2(含聽說讀寫四項),獎勵 3000 元 ; 通過C1(含聽說讀寫四項)以上,獎勵 5000 元 ; 學生於大二第一學期開學前提出考試並通過相當 CEFR B2 等級者,可獲得額外 500 元獎勵金。                        
                        </p>
                    </div>
                    <div class="page-group">
                        <h4 class="highlight">二、</h4>
                        <p>
                            報考下列英檢獎勵金由其它經費支應,聽說讀寫四項能力皆須達指定標準,各項補助標準及金額如下:<br><br>

                            A. 全民英語能力分級檢定測驗 GEPT:通過中高級初試(聽、讀)及複試(說、寫)以上,獎勵 1800 元。<br>
                            B. 外語能力測驗 FLPT:筆試成績 195 分(含)以上、口試成績 S-2+(含)以上且寫作成績 B 級(含)以上者,獎勵 1600 元。<br>
                            C. 托福網路測驗 TOEFL iBT:聽力成績 17 分(含)以上、閱讀成績 18分(含)以上、口試成績 20 分(含)以上且寫作成績 17 分(含)以上者,獎勵 4000 元。<br>
                            D. 雅思國際英語測驗系統 IELTS:聽說讀寫皆達 5.5(含)以上者,獎勵3800 元。<br>
                            E. 多益英語測驗 TOEIC:聽力成績 400 分(含)以上、閱讀成績 385 分(含)以上、口試成績 160 分(含)以上且寫作成績 150 分(含)以上者,獎勵 2500 元。<br>
                            F. 劍橋國際英語認證 B2 First(FCE):聽說讀寫四項成績皆達 160 分(含)以上者,獎勵 1900 元。<br>
                            G. 劍橋領思-職場英語測驗 Linguaskill Business:聽說讀寫四項成績皆達 CEFR B2 等級(含)以上者,獎勵 2300 元。<br>
                            H. 劍橋領思-實用英語測驗 Linguaskill General:聽說讀寫四項成績皆達 CEFR B2 等級(含)以上者,獎勵 2300 元。
                        </p>
                    </div>
                    <div class="page-group">
                        <h4 class="highlight">三、</h4>
                        <p>
                            英語能力檢測獎勵,應於考試當學年度提出申請(配合計畫期程)。若學生先通過「培力英檢」獎勵補助,再申請其它英檢獎勵者,加碼 1000 元獎勵金。「培力英檢」及「其它英檢項目獎勵」,在學期間各以申請一次為限。雙語教育與學習辦公室得視當年度核定之計畫經費與使用情況調整補助內容。
                        </p>
                    </div>
                    <div class="page-group">
                        <h4 class="highlight">四、</h4>
                        <p>
                            本方案之「培力英檢」獎勵,由「教育部大專校院學生雙語化學習計畫」經費支應,其它英檢獎勵由計畫配合款或高等教育深耕計畫經費支應,教育部「教育部大專校院學生雙語化學習計畫」計畫結束,即停止本獎勵辦法所提之任何補助項目。
                        </p>
                    </div>
                    <div class="page-group">
                        <div>
                            <span class="highlight">下載 :</span><a href="https://drive.google.com/file/d/1Dq0tT7FFCEx7kzV95XHWEn26cpqeUi9Z/view?usp=sharing">英語檢測獎勵方案</a>
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