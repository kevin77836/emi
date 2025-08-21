<template>
    <div class="p-page">
        <section class="page-section">
            <div class="section-wrapper">
                <h2 class="c-title title-grey">
                    國立陽明交通大學雙語教育與學習推動辦公室 EMI補充課程補助方案
                </h2>
                <div class="page-content">
                    <div class="page-group">
                        <h4 class="highlight">一 、目的：</h4>
                        <p>
                            為強化本校大學部英語授課(EMI)課程教學和學習成效,本校雙語教育與學習推動辦公室特訂EMI課後補充課程補助方案協助EMI授課教師掌握全班學習進度,並提昇修習EMI課程學生精進知識與學習成效。
                        </p>
                    </div>
                    <div class="page-group">
                        <h4 class="highlight">二、申請對象：</h4>
                        <p>
                            開設EMI課程之教學單位、授課教師或修習EMI課程學生。
                        </p>
                    </div>
                    <div class="page-group">
                        <h4 class="highlight">三、教學對象：</h4>
                        <p>
                            修讀EMI課程學生。
                        </p>
                    </div>
                    <div class="page-group">
                        <h4 class="highlight">四、開課規定：</h4>
                        <p>
                            (一) 補充開課課程須為課務組認定之英語授課課程(不含語言課程、專題演講、個別研究、書報討論及專題討論、及大學專題及在職專班)。<br>
                            (二) 由本校大學部科系開設之EMI課程之系所、授課老師或修課學生提出申請,每次上課人數至少1位學生。<br>
                            (三) 補充課程助教可由開課系所或授課教師所推薦之博碩士生,或經授課教師推薦之成績優秀大學部學生(需由系所或授課教師推薦),利用課餘時間進行課後輔導課程。<br>
                            (四) 本辦公室得隨課堂錄影並將內容製成影片,作為相關課程補充教學使用。
                        </p>
                    </div>
                    <div class="page-group">
                        <h4 class="highlight">五、辦理程序 :</h4>
                        <p>
                            (一) 請申請單位或申請人於開課後第三周起至第八周前將補充課程補助申請表繳交至本辦公室。<br>
                            (二) 每堂課程結束後,需繳交課程紀錄表、學生簽到表及學生回饋單,並送至本辦公室存查。
                        </p>
                    </div>
                    <div class="page-group">
                        <h4 class="highlight">六、補助基準 :</h4>
                        <p>
                            課輔助教據身份別訂定以下鐘點費標準:<br>
                            大學生鐘點費每小時500元 ,<br>
                            碩士生鐘點費每小時600元 ,<br>
                            博士生鐘點費每小時725元 ,<br>
                            依實際授課時數支付。
                        </p>
                    </div>
                    <div class="page-group">
                        <h4 class="highlight">七、查無實際授課事實者,該申請單位或申請人不得再申請當學期課後輔導補助方案。</h4>
                    </div>
                    <div class="page-group">
                        <h4 class="highlight">八、本辦公室保留補助規則及補助金額修改之權利,並自發布日起開始實施。</h4>
                    </div>
                    <div class="page-group">
                        <div>
                            <span class="highlight">下載申請表：</span><a href="https://drive.google.com/uc?export=download&id=1s4vRgxw7u0-97Te2bWwIcMzAhyW_8B8l">EMI補充課程補助申請表</a>
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