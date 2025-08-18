<template>
    <div class="p-page">
        <section class="page-section">
            <div class="section-wrapper">
                <h2 class="c-title title-grey">
                    Oxford EMI Training
                </h2>
                <div class="page-content">
                    <div class="page-group">
                        <h4 class="highlight">【Course Overview】</h4>
                        <p>
                            Embark on a comprehensive EMI teaching journey with our specially crafted course, designed by the EMI Training Center in Oxford, UK. Delve into four key learning modules spanning education, education policy, language application, teaching media, and classroom management, totaling 40 hours of enriching content. Upon successful completion, participants will receive a certificate of study.<br>This exclusive course caters to teachers and professionals in higher education institutions, utilizing English as the primary teaching language. The original fee is £510 (approximately NT$20,800), but the course is fully subsidized by the school. To secure a spot, interested teachers need to pay a deposit of NT$5,000, refundable upon completion of all courses within the specified time frame.
                        </p>
                        <p>
                            For detailed course information, please refer to the documents below:
                        </p>
                        <div class="link-group">
                            <a href="https://drive.google.com/file/d/1r46nEw4JqrOg-PmuEHEPZgqlvQNIq8f1/view?usp=sharing">《Participant Instructions - Accessing your Oxford EMI Self-Access course》</a>
                            <a href="https://drive.google.com/file/d/1F5l4znWx1ZLynIannC6ek9QqrkH1zRlM/view?usp=sharing">《Frequently Asked Questions》</a>
                        </div>
                    </div>
                    <div class="page-group">
                        <h4 class="highlight">【Course Duration】</h4>
                        <ol>
                            <li>Teachers applying for the course should provide the necessary information to help tailor the course to their needs.  The course is accessible for one year, starting from August 1, allowing flexibility in learning and enabling participants to arrange their study progress independently. Logging in at any time during the course ensures convenience.</li>
                        </ol>
                        <p class="warning-hint">
                            Note: According to Oxford EMI Training Center regulations, if an account remains open for more than 90 days without course completion, it becomes invalid, and further course access is restricted, with the deposit being non-refundable.
                        </p>
                    </div>
                    <div class="page-group">
                        <h4 class="highlight">【Registration Notes】</h4>
                        <ol>
                            <li>Registration：</li>
                            <ul>
                                <li>Limited slots are available for our school's purchase of this course, prioritizing teachers from colleges implementing the bilingual learning plan for college students under the Ministry of Education. Remaining slots are open to full-time teachers from other colleges.</li>
                                <li>Registration Form：<a href="https://forms.gle/uLTQNoCnvuUi5jmq8">https://forms.gle/uLTQNoCnvuUi5jmq8</a></li>
                            </ul>
                            <li>Registration Process：</li>
                            <ul>
                                <li>Upon confirmation of registration eligibility, our office will provide the teacher's statement, deposit collection account number, and other relevant information. Registration is complete upon the teacher's submission of the signed declaration form.</li>
                            </ul>
                            <li>Deadline： From now until all slots are filled.</li>
                            <li>Waitlist Mechanism：</li>
                            <ul>
                                <li>If registration is full, teachers are encouraged to contact our office. If sufficient interest is received, consideration will be given to purchasing additional course slots.</li>
                            </ul>
                        </ol>
                    </div>
                </div>
                
                <div class="cta">
                    <a @click="backPage" class="c-button">
                        <div>
                            Back
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