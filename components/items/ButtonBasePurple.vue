<template>
  <button
    class="bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded transition"
    :class="customClass"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{ customClass?: string }>()
</script>
