<template>
  <button
    class="bg-[#EB3C7D] hover:bg-pink-800 text-white font-bold py-2 px-4 rounded transition"
    :class="customClass"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{ customClass?: string }>()
</script>
