<template>
    <img src="/vivo/home/vendas-diretas/homem_vendas.png" alt="Vendedor"
            class="flex w-65 h-full grid-span-1 float-center align-center object-contain md:max-md:w-15 md:hidden md:max-md:block"  />
    <div class="md:flex  bg-gray-100 justify-center align-center w-full px-4 py-6 mb-5 auto-cols-auto md:max-md:grid-cols-1">
        <img src="/vivo/home/vendas-diretas/homem_vendas.png" alt="Vendedor"
            class="flex w-65 h-full mb-4 grid-span-1 object-contain md:max-md:hidden" />

        <div class="space-y-3 grid-span-2 md:max-md:grid-span-1">
            <h2 class="text-lg font-bold text-center ">RESULTADOS PARA VOCÊ, VENDEDOR:</h2>
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
                    <span>Relacionamento via <span class="font-bold">CNPJ com segurança jurídica e
                            trabalhista</span></span>
                </li>
                <li class="flex items-start gap-2">
                    <CheckIcon class="w-5 h-5  mt-1" />
                    <span><span class="font-bold">Vantagens ao realizar compras</span> com CNPJ</span>
                </li>
                <li class="flex items-start gap-2">
                    <CheckIcon class="w-5 h-5 mt-1" />
                    <span>Possibilidade de <span class="font-bold">atuar como MEI e CLT ao mesmo tempo</span></span>
                </li>
            </ul>
            <p class="mt-4 font-extrabold text-sm text-gray-900 text-center">
                Transforme a gestão do seu negócio. Empreenda com mais segurança e profissionalismo.
            </p>
            <div class="flex mt-4 mb-4">
                <NuxtLink
                    class="bg-[#EB3C7D] uppercase text-sm sm:text-lg text-white px-2 sm:px-16 py-2 rounded hover:bg-[#7e1c40] font-bold">
                    QUERO CONTRATAR</NuxtLink>
            </div>
        </div>

    </div>
    <h1 class="text-lg font-bold mt-6 text-center align-center md:hidden md:max-md:block mb-9 uppercase">
        IMPACTO DIRETO NO CUSTO OPERACIONAL, RISCO FISCAL E TRABALHISTA.
    </h1>
</template>

<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/24/solid'
</script>
