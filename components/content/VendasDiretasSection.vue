
<template>
  <section class="w-full items-center justify-center flex flex-col bg-white p-6 md:p-10">
    <div class="ms-[10vh] mx-auto bg-cover bg-center rounded-lg shadow-lg overflow-hidden">
        <img
        src="/assets/images/vendas_diretas.png"
        alt="Vendas Diretas Banner"
        class="flex w-[90vw] max-w-[1000px] max-h-100 mb-5"
        />

        <div class=" ms-14">
            <h1 class="text-4xl md:text-3xl font-extrabold mb-4 uppercase">Vendas Diretas</h1>

            <p class="text-neutral-500 mb-6 w-3/4 md:w-3/4">
                O setor de vendas diretas movimenta milhões de empreendedores autônomos. O CNPJ MEI garante segurança e impulsiona o crescimento.
            </p>

            <p class="font-bold ">COM O MEISHOP, SUA EMPRESA CONTA COM UMA SOLUÇÃO COMPLETA:</p>

            <ul class="list-disc list-inside text-sm text-neutral-800 ms-3 mb-6 space-y-1">
                <li><span class="font-bold">Abertura simplificada</span> do MEI</li>
                <li><span class="font-bold">Emissão de Notas Fiscais</span> de Serviços</li>
                <li><span class="font-bold">Gestão contábil</span> do CNPJ MEI e com ME</li>
                <li><span class="font-bold">Suporte</span> ao empreendedor em todas as etapas</li>
            </ul>

            <p class="text-sm mb-6 uppercase">Tudo isso com <span class="font-semibold">operação e atendimento totalmente a cargo da nossa plataforma.</span></p>

            <ButtonBasePink class="mb-6 ">QUERO CONTRATAR</ButtonBasePink>
        </div>        

        <div class=" bg-gray-100 mx-auto float-left ms-13 w-fit flex flex-col md:flex-row items-center gap-8 mb-10 ps-4">
      
            <img
                src="/assets/images/homem_vendas.png"
                alt="Vendedor"
                class=" w-66 md:w-66 object-contain"
            />

            <div class="w-full md:w-1/2">
                <h2 class="text-lg font-bold mb-4">RESULTADOS PARA VOCÊ, VENDEDOR:</h2>
                <ul class="space-y-2 text-sm text-gray-800">
                    <li class="flex items-start gap-2 text-black">
                        <CheckIcon class="size-5"></CheckIcon> Acesso a <span class='font-bold'>benefícios previdenciários</span>
                    </li>
                    <li class="flex items-start gap-2 text-black">
                        <CheckIcon class="size-5"></CheckIcon> <span class='font-bold'>Economia em impostos</span> e recolhimento simplificado
                    </li>
                    <li class="flex items-start gap-2 text-black">
                        <CheckIcon class="size-5"></CheckIcon> <span class='font-bold'>Credibilidade</span> com emissão de notas fiscais 
                    </li>
                    <li class="flex items-start gap-2 text-black">
                        <CheckIcon class="size-5"></CheckIcon> Relacionamento via <span class='font-bold'>CNPJ com segurança jurídica e trabalhista</span>
                    </li>
                    <li class="flex items-start gap-2 text-black">
                        <CheckIcon class="size-5"></CheckIcon> <span class='font-bold'>Vantagens ao realizar compras</span> com CNPJ
                    </li>
                    <li class="flex items-start gap-2 text-black">
                        <CheckIcon class="size-5"></CheckIcon> Possibilidade de <span class='font-bold'>atuar como MEI e CLT ao mesmo tempo</span>
                    </li>
                </ul>

                <p class="mt-6 font-extrabold text-sm text-gray-900">
                Transforme a gestão do seu negócio. Empreenda com mais segurança e profissionalismo.
                </p>

                <ButtonBasePink class="mt-6 bg-pink-500 hover:bg-pink-600 mb-5">QUERO CONTRATAR</ButtonBasePink>
            </div>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ButtonBasePink from '~/components/items/ButtonBasePink.vue'
import { CheckIcon } from '@heroicons/vue/24/solid'
</script>
