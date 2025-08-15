<template>
  <NuxtLayout :name="layoutName">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const route = useRoute()

const layoutName = computed(() => {
  if (/^\/en(\/|$)/.test(route.path)) return 'en-layout'
  return 'default-layout'
})
</script>