<template>
  <li class="flex flex-row items-center ">
    <img
        src="/assets/images/icons8-reproduzir-30.png"
        alt="Arrow-right"
        class="size-4 me-2"
    />
    <a href="#" class="hover:text-purple-300 transition">{{ text }}</a>
  </li>
</template>

<script setup lang="ts">
defineProps<{ text: string }>()
</script>
