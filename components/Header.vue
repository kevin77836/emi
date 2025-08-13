<template>
    <div class="c-header">
        <div class="header-wrap">
            <div class="left-group">
                <a href="/" class="logo-wrap">
                    <img src="/logo.svg" alt="">
                </a>
                <div class="left-btn-group">
                    <a href="/about" class="left-btn">關於中心</a>
                    <a href="/news" class="left-btn">最新消息</a>
                    <a href="#" class="left-btn">中心活動</a>
                    <a href="#" class="left-btn">學習資源</a>
                    <a href="#" class="left-btn">法規辦法</a>
                    <a href="#" class="left-btn">聯絡中心</a>
                </div>
            </div>
            <div class="right-group">
                <div class="right-btn-group">
                    <a href="#" class="right-btn">教師</a>
                    <a href="#" class="right-btn">學生</a>
                    <a href="#" class="right-btn">助教</a>
                </div>
                <div class="sperate-line"></div>
                <a href="#" class="lang-btn">
                    EN
                </a>
            </div>
            <div class="hamburger" :class="{'active': hamburgerActive}" @click="toggleHamburger">
                <div class="bar"></div>
            </div>
            <div class="hamburger-menu" :class="{'active': hamburgerActive}">
                <div class="hamburger-menu-group hamburger-menu-group-1">
                    <a href="/about" class="hamburger-menu-item">關於中心</a>
                    <a href="/news" class="hamburger-menu-item">最新消息</a>
                    <a href="#" class="hamburger-menu-item">中心活動</a>
                    <a href="#" class="hamburger-menu-item">學習資源</a>
                    <a href="#" class="hamburger-menu-item">法規辦法</a>
                    <a href="#" class="hamburger-menu-item">聯絡中心</a>
                </div>
                <div class="sperate-line"></div>
                <div class="hamburger-menu-group hamburger-menu-group-2">
                    <a href="#" class="hamburger-menu-item">教師</a>
                    <a href="#" class="hamburger-menu-item">學生</a>
                    <a href="#" class="hamburger-menu-item">助教</a>
                </div>
                <div class="sperate-line"></div>
                <div class="hamburger-menu-group hamburger-menu-group-lang">
                    <a href="#" class="hamburger-menu-item">EN</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const hamburgerActive = ref(false);
    const toggleHamburger = () => {
        hamburgerActive.value = !hamburgerActive.value;

        if (hamburgerActive.value) {
            document.body.style.overflow = 'hidden';
            window.scrollTo({ top: 0, behavior: 'auto' })
        } else {
            document.body.style.overflow = '';
        }
    };
</script>