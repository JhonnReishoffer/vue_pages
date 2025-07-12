<template>
  <footer class="bg-black text-white p-8">
    <div class="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <img src="/assets/images/logo_footer_1.png" alt="Logo MEISHOP" class="h-10" />
        <p class="text-xs ms-1 mt-2">Redes Socias MEISHOP</p>
        <div class="flex gap-2">
            <a>
                <img
                src="/assets/images/icons8-instagram-32.png"
                alt="Instagram"
                />
            </a>
            <a>
                <img
                src="/assets/images/icons8-facebook-novo-30.png"
                alt="Facebook"
                />
            </a>
            <a>
                <img
                src="/assets/images/icons8-youtube-30.png"
                alt="YouTube"
                />
            </a>
        </div>
      </div>
      <div>
        <ul class="space-y-2">
          <FooterLink text="BENEFÍCIOS DE SER MEI" />
          <FooterLink text="ABRIR MEI" />
          <FooterLink text="DÚVIDAS" />
        </ul>
      </div>
      <div class="flex flex-col gap-4">
        <ButtonBase>Quero ser assinante</ButtonBase>
        <ButtonBase>Já sou assinante</ButtonBase>
      </div>
    </div>
    <div class="text-xs text-gray-400 mt-2">
        <a><p>TERMO DE PROTEÇÃO DE PRIVACIDADE</p></a>
        <a><p>POLÍTICA DE PRIVACIDADE</p></a>
        <a><p>INSTRUMENTO PARTICULAR DE ACEITE DE LICENÇA DE USO DOS SERVIÇOS E SOLUÇÕES DA PLATAFORMA MEiShop</p></a>
    </div>
  </footer>
</template>

<script setup lang="ts">
    import ButtonBase from '~/components/atoms/ButtonBasePurple.vue'
    import FooterLink from '~/components/atoms/FooterLink.vue'
</script> 
