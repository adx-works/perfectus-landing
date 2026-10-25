<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// Основной домен — перфектус.рф (в URL записывается в punycode)
const siteUrl = 'https://xn--e1aaprgigif.xn--p1ai'

const route = useRoute()

const canonicalUrl = computed(() => {
  const path = route.path === '/' ? '/' : route.path.replace(/\/+$/, '')
  return siteUrl + path
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }],
  meta: [{ property: 'og:url', content: canonicalUrl }]
})
</script>
