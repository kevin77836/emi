<template>
    <div class="c-header">
        <div class="header-wrap">
            <div class="left-group">
                <a href="/en" class="logo-wrap">
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
                <a href="/" class="lang-btn">
                    中
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
                       class="hamburger-menu-item hamburger-menu-group-1-item">
                        {{ item.text }}
                    </a>
                </div>
                <div class="sperate-line"></div>
                <div class="hamburger-menu-group hamburger-menu-group-2">
                    <a v-for="(item, index) in menuGroups[1].items"
                       :key="'hamburger-menu-group-2-item-' + index"
                       :href="item.link"
                       class="hamburger-menu-item hamburger-menu-group-2-item">
                        {{ item.text }}
                    </a>
                </div>
                <div class="sperate-line"></div>
                <div class="hamburger-menu-group hamburger-menu-group-lang">
                    <a href="/" class="hamburger-menu-item">中</a>
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
                { text: 'About EMI', link: '/en/about', value:'en-about' },
                { text: 'News', link: '/en/news', value:'en-news' },
                { text: 'Activity', link: '/en/activities', value:'en-activities' },
                { text: 'Learning Resources', link: '/en/resource', value:'en-resource' },
                { text: 'Regulations', link: '/en/law', value:'en-law' },
                { text: 'Contact', link: '/en/contact', value:'en-contact' }
            ]
        },
        {
            items: [
                { text: 'Faculty', link: '/en/faculty', value:'en-faculty' },
                { text: 'Students', link: '/en/student', value:'en-student' },
                { text: 'TA', link: '/en/teaching-assistant', value:'en-teaching-assistant' }
            ]
        },
    ]);
</script>