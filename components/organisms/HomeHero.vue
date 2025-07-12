<!-- components/organisms/HomeHero.vue -->
<template>
  <section class="bg-white py-8">
    <div class="w-4/5 mx-auto flex flex-col items-center text-center">
      <img src="/assets/images/hero-vendedor.png" class="w-full md:w-4/5" alt="Vendedor Hero" />
      <h1 class="text-2xl font-bold mt-6">VENDAS DIRETAS</h1>
      <p class="text-gray-700 mt-2">
        O setor de vendas diretas movimenta milhões de empreendedores autônomos...
      </p>
      <ButtonBase class="mt-6">QUERO CONTRATAR</ButtonBase>
    </div>
  </section>
</template>

<script setup lang="ts">
import ButtonBase from '~/components/atoms/ButtonBasePurple.vue'
</script>
