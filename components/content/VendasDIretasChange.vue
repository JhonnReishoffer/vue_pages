<script setup lang="ts">
import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

const isMobile = computed(() => width.value < 640)

const bannerSrc = computed(() =>
  isMobile.value
    ? '/assets/images/vendas_diretas_mobile.png'
    : '/assets/images/vendas_diretas.png'
)
</script>

<template>
  <img
    :src="bannerSrc"
    alt="Vendas Diretas Banner"
    class="w-full h-auto rounded-lg shadow-md"
  />
</template>