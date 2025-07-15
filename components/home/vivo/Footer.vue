<template>
    <footer class="bg-black py-8 md:py-12">
      <div class="container mx-auto px-4 sm:px-1">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Logo and Social Section (spanning 2 columns) -->
          <div class="md:col-span-2 flex flex-col items-center md:items-start">
            <div class="flex flex-wrap justify-center gap-4 mb-6">
              <img
                src="/vivo/logo_footer_1.png"
                class="h-8 sm:h-10"
                alt="MEiShop Logo"
              />
            </div>
  
            <p class="text-white font-bold mb-4 text-sm sm:text-base">
              Redes Sociais MeiShop
            </p>
  
            <div class="flex gap-4 mb-8">
              <a
                href="https://www.instagram.com/dicasmei/"
                class="text-white hover:text-yellow-wise transition-colors"
                target="_blank"
              >
                <img src="/vivo/home/icons8-instagram-32.png" class="h-8 w-8" alt="Instagram" />
              </a>
              <a
                href="https://www.facebook.com/dicasmei"
                class="text-white hover:text-yellow-wise transition-colors"
                target="_blank"
              >
                <img src="/vivo/home/icons8-facebook-novo-30.png" class="h-8 w-8" alt="Facebook" />
              </a>
              <a
                href="https://www.youtube.com/@DicasMEI"
                class="text-white hover:text-yellow-wise transition-colors"
                target="_blank"
              >
                <img src="/vivo/home/icons8-youtube-30.png" class="h-8 w-8" alt="YouTube" />
              </a>
            </div>

            <div>
            </div>
            
            <div class="space-y-2 text-center md:text-left">
              <a
              href="https://meishop.com.br/wp-content/uploads/2023/10/MEiShop-PROTECAO_DE_PRIVACIDADE.pdf"
              class="block text-white text-xs sm:text-sm underline hover:text-yellow-wise transition-colors"
              target="_blank"
              >
              TERMO DE PROTEÇÃO DE PRIVACIDADE
            </a>
            <a
            href="https://meishop.com.br/wp-content/uploads/2023/10/MEiShop-POLITICA_DE_PRIVACIDADE.pdf"
            class="block text-white text-xs sm:text-sm underline hover:text-yellow-wise transition-colors"
            target="_blank"
            >
            POLÍTICA DE PRIVACIDADE
          </a>
          <a
          href="https://meishop.com.br/wp-content/uploads/2023/10/MEiShop-ACEITE_DE_LICENCA.pdf"
          class="block text-white text-xs sm:text-sm underline hover:text-yellow-wise transition-colors"
          target="_blank"
          >
          INSTRUMENTO PARTICULAR DE ACEITE DE LICENÇA DE USO DOS SERVIÇOS E
          SOLUÇÕES DA PLATAFORMA MEiShop
        </a>
      </div>
    </div>
          <ul class="space-y-2 col-span-3 md:col-span-1 text-white text-sm">
            <li class="flex flex-row items-center ">
              <img
                  src="/assets/images/icons8-reproduzir-30.png"
                  alt="Arrow-right"
                  class="size-4 me-2"
              />
              <NuxtLink to="" class="text-white hover:text-purple-300 text-xl transition">BENEFÍCIOS DE SER MEI</NuxtLink>
            </li>
            <li class="flex flex-row items-center ">
              <img
                  src="/assets/images/icons8-reproduzir-30.png"
                  alt="Arrow-right"
                  class="size-4 me-2"
              />
              <NuxtLink to="" class="text-white hover:text-purple-300 text-xl transition">ABRIR MEI</NuxtLink>
            </li>
            <li class="flex flex-row items-center ">
              <img
                  src="/assets/images/icons8-reproduzir-30.png"
                  alt="Arrow-right"
                  class="size-4 me-2"
              />
              <NuxtLink to="" class="text-white hover:text-purple-300 text-xl transition">DÚVIDAS</NuxtLink>
            </li>
          </ul>  
          <!-- CTA Buttons (far right column) -->
          <div class="flex flex-col items-center md:items-end space-y-8">
            <NuxtLink
               to="/auth/login"
              class="w-full max-w-xs text-white bg-[#660099] rounded-lg text-base px-6 py-4 transition-colors duration-300 text-center"
            >
            Quero ser assinante
            </NuxtLink>
            <NuxtLink
              to="https://wa.me/+5514998549659"
              class="w-full max-w-xs text-white bg-[#660099] rounded-lg text-sm sm:text-base px-6 py-4 transition-colors duration-300 text-center"
              target="_blank"
            >
            Já sou assinante
            </NuxtLink>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
    
  </script>
  
  <style scoped>

  </style>
