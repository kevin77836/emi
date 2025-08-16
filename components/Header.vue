<template>
    <div class="c-header">
        <div class="header-wrap">
            <div class="left-group">
                <a href="/" class="logo-wrap">
                    <img src="/logo.svg" alt="">
                </a>
                <div class="left-btn-group">
                    <a v-for="(item, index) in menuGroups[0].items"
                       :key="'left-btn-' + index"
                       :href="item.link"
                       :class="{active: route.name == item.value}"
                       class="left-btn">
                        {{ item.text }}
                    </a>
                </div>
            </div>
            <div class="right-group">
                <div class="right-btn-group">
                    <a v-for="(item, index) in menuGroups[1].items"
                       :key="'right-btn-' + index"
                       :href="item.link"
                       :class="{active: route.name == item.value}"
                       class="right-btn">
                        {{ item.text }}
                    </a>
                </div>
                <div class="sperate-line"></div>
                <a href="/en" class="lang-btn">
                    EN
                </a>
            </div>
            <div class="hamburger" :class="{'active': hamburgerActive}" @click="toggleHamburger">
                <div class="bar"></div>
            </div>
            <div class="hamburger-menu" :class="{'active': hamburgerActive}">
                <div class="hamburger-menu-group hamburger-menu-group-1">
                    <a v-for="(item, index) in menuGroups[0].items"
                       :key="'hamburger-menu-group-1-item-' + index"
                       :href="item.link"
                       class="hamburger-menu-group hamburger-menu-group-1-item">
                        {{ item.text }}
                    </a>
                </div>
                <div class="sperate-line"></div>
                <div class="hamburger-menu-group hamburger-menu-group-2">
                    <a v-for="(item, index) in menuGroups[1].items"
                       :key="'hamburger-menu-group-2-item-' + index"
                       :href="item.link"
                       class="hamburger-menu-group hamburger-menu-group-2-item">
                        {{ item.text }}
                    </a>
                </div>
                <div class="sperate-line"></div>
                <div class="hamburger-menu-group hamburger-menu-group-lang">
                    <a href="/en" class="hamburger-menu-item">EN</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router'

    const route = useRoute()

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

    const menuGroups = ref([
        {
            items: [
                { text: '關於中心', link: '/about', value:'about' },
                { text: '最新消息', link: '/news', value:'news' },
                { text: '中心活動', link: '/activities', value:'activities' },
                { text: '學習資源', link: '/resource', value:'resource' },
                { text: '法規辦法', link: '/regulations', value:'regulations' },
                { text: '聯絡中心', link: '/contact', value:'contact' }
            ]
        },
        {
            items: [
                { text: '教師', link: '/faculty', value:'faculty' },
                { text: '學生', link: '/student', value:'student' },
                { text: '助教', link: '/teaching-assistant', value:'teaching-assistant' }
            ]
        },
    ]);
</script>