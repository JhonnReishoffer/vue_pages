<template>
  <div class="flex flex-col min-h-screen bg-white">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/molecules/AppHeader.vue'
import AppFooter from '@/components/molecules/AppFooter.vue'
</script>
