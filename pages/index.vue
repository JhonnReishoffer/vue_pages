

<template>
{
    <script setup lang="ts">
import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

const isMobile = computed(() => width.value < 640)

const bannerSrc = computed(() =>
  isMobile.value
    ? return (
        <VendasDiretasSection />
    )
    : return (
        <VendasDiretasSectionMobile />
    )
)
</script>
}
</template>

<script setup lang="ts">
    import VendasDiretasSection from '@/components/content/VendasDiretasSection.vue'
    import VendasDiretasSectionMobile from '@/components/content/VendasDiretasSectionMobile.vue'
</script>
