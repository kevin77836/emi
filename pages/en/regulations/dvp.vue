<template>
    <div class="p-page">
        <section class="page-section">
            <div class="section-wrapper">
                <h2 class="c-title title-grey">
                    Distinguished Visiting Professorship (DVP) Subsidy Program
                </h2>
                <div class="page-content">
                    <div class="page-group">
                        <h4 class="highlight">I. Basis</h4>
                        <p>
                            The Distinguished Visiting Professorship Program (DVP) supported by the H&J Global Chair was launched in 2018. DVP program invites distinguished professors from liberal arts colleges in the United States or English-speaking countries to offer a complete semester-long course at NYCU. The program initially focused on foundational sciences (including physics, mathematics, chemistry, and biology) and then expanded to other professional fields, such as computer science, artificial intelligence, humanities, and so on. We hope to enrich students' international learning experiences through an entire semester of specialized subject instruction in English.
                        </p>
                    </div>
                    <div class="page-group">
                        <h4 class="highlight">II.Qualifications</h4>
                        <p>
                            The college or department that applies to the DVP program should provide the professor's bio and specific teaching award information to the Academic Affairs Office to verify the professor's eligibility based on the requirements of the DVP program before inviting. The DVP criteria involve the invitees being outstanding professors with relevant teaching awards from Liberal Arts Colleges in the United States or English-speaking countries. 
                        </p>
                        <p>
                            To align with the compact department, college, and university-level course review schedules of NYCU, the college/department is suggested to prepare the DVP application form, including the bio, significant teaching achievements/awards, brief course, and expense plan to apply for this DVP program. If the courses did not meet the criteria of "a complete semester-long course," "physical teaching at NYCU," and "suitable for nearly all first-year students", the subsidies will not be granted.
                        </p>
                        <p>
                            It is suggested that departments (teaching teams) and invitees continue progressing with the NYCU contracts and course discussions upon confirmation of subsidies. All course planning is suggested to be developed by departments (or teaching teams or instructors in charge) and the invited professors. At the end of the semester, the departments must submit a course report to the Academic Affairs Office to respond to the H&J Global Chair Committee on the overall teaching effectiveness and fund utilization. If the H&J Global Chair Committee requests more supporting documentation about the subsidized courses, departments must provide them.
                        </p>
                    </div>
                    <div class="page-group">
                        <h4 class="highlight"> III.Subsidy Scope</h4>
                        <p>
                            The maximum subsidy for each course taught by visiting instructors in Taiwan is NT$1,000,000 per semester. The expenses must comply with the relevant regulations of NYCU’s Accounting Office, covering the instructor's salary (including accommodation), labor and health insurance supplementary premiums to the government, one return economy class airfare, and course-related expenses (such as teaching assistant fees and course materials). Notably, equipment expenses are not eligible for reimbursement.
                        </p>
                    </div>
                    <div class="page-group">
                        <h4 class="highlight">IV. Process</h4>
                        <div class="page-img">
                            <img src="/regulations/dvp-en.png" alt="">
                        </div>
                    </div>
                    <div class="page-group">
                        <div>
                            <span class="highlight">Download：</span><a href="https://docs.google.com/document/d/1-0OmT2_zMA-R1kcc9CxfNZ4t3HxKf63C/edit?usp=sharing&ouid=103609433754049523591&rtpof=true&sd=true">DVP Application Form</a>
                        </div>  
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