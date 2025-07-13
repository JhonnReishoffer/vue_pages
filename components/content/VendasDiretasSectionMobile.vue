<template>
  <section class="w-full px-4 py-6 md:hidden">
    <!-- Banner imagem principal -->
    <div class="w-full mx-auto mb-6">
      <img
        src="/assets/images/vendas_diretas.png"
        alt="Vendas Diretas Banner"
        class="w-full h-auto rounded-lg shadow-lg object-cover"
      />
      <h1 class="mt-4 text-3xl font-extrabold uppercase text-center">
        Vendas Diretas
      </h1>
      <p class="text-neutral-500 mt-2 text-base text-center">
        O setor de vendas diretas movimenta milhões de empreendedores autônomos. O CNPJ MEI garante segurança e impulsiona o crescimento.
      </p>
    </div>

    <!-- Texto de introdução e lista -->
    <div class="w-full mx-auto mb-6 space-y-4">
      <p class="font-bold text-base">
        COM O MEISHOP, SUA EMPRESA CONTA COM UMA SOLUÇÃO COMPLETA:
      </p>
      <ul class="list-disc list-inside text-sm text-neutral-800 space-y-1 ms-4">
        <li><span class="font-bold">Abertura simplificada</span> do MEI</li>
        <li><span class="font-bold">Emissão de Notas Fiscais</span> de Serviços</li>
        <li><span class="font-bold">Gestão contábil</span> do CNPJ MEI e ME</li>
        <li><span class="font-bold">Suporte</span> ao empreendedor em todas as etapas</li>
      </ul>
      <p class="text-sm uppercase">
        Tudo isso com <span class="font-semibold">operação e atendimento totalmente a cargo da nossa plataforma.</span>
      </p>
    </div>

    <!-- Botão principal -->
    <div class="w-full flex justify-center mb-10">
      <ButtonBasePink class="px-6">QUERO CONTRATAR</ButtonBasePink>
    </div>

    <!-- Bloco Benefícios para o Vendedor -->
    <div class="bg-gray-100 w-full px-4 py-6 rounded-lg">
      <img
        src="/assets/images/homem_vendas.png"
        alt="Vendedor"
        class="w-full h-auto mb-4 object-contain"
      />
      <div class="space-y-3">
        <h2 class="text-lg font-bold text-center">RESULTADOS PARA VOCÊ, VENDEDOR:</h2>
        <ul class="space-y-2 text-sm text-gray-800">
          <li class="flex items-start gap-2">
            <CheckIcon class="w-5 h-5 mt-1" />
            <span>Acesso a <span class="font-bold">benefícios previdenciários</span></span>
          </li>
          <li class="flex items-start gap-2">
            <CheckIcon class="w-5 h-5  mt-1" />
            <span><span class="font-bold">Economia em impostos</span> e recolhimento simplificado</span>
          </li>
          <li class="flex items-start gap-2">
            <CheckIcon class="w-5 h-5 mt-1" />
            <span><span class="font-bold">Credibilidade</span> com emissão de notas fiscais</span>
          </li>
          <li class="flex items-start gap-2">
            <CheckIcon class="w-5 h-5  mt-1" />
            <span>Relacionamento via <span class="font-bold">CNPJ com segurança jurídica e trabalhista</span></span>
          </li>
          <li class="flex items-start gap-2">
            <CheckIcon class="w-5 h-5  mt-1" />
            <span><span class="font-bold">Vantagens ao realizar compras</span> com CNPJ</span>
          </li>
          <li class="flex items-start gap-2">
            <CheckIcon class="w-5 h-5  mt-1" />
            <span>Possibilidade de <span class="font-bold">atuar como MEI e CLT ao mesmo tempo</span></span>
          </li>
        </ul>
        <p class="mt-4 font-extrabold text-sm text-gray-900 text-center">
          Transforme a gestão do seu negócio. Empreenda com mais segurança e profissionalismo.
        </p>
        <div class="flex justify-center mt-4">
          <ButtonBasePink class="px-6">QUERO CONTRATAR</ButtonBasePink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/24/solid'
import ButtonBasePink from '~/components/items/ButtonBasePink.vue'
</script>
