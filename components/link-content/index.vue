<template>
  <div class="container md:mb-[88px] mb-[22px]">
    <div class="banner-link px-[46px] py-[36px]">
      <div class="banner z-10">
        <h2 class="md:text-[44px] text-white text-[22px] font-medium">
          {{ $t("linkContact.title") }}
        </h2>
        <p
          class="text-white md:text-[18px] text-[14px] font-medium mt-[17px] md:mb-[110px] mb-[22px] tracking-tight"
        >
          {{ $t("linkContact.desc") }}
        </p>
        <nuxt-link to="/" class="button-primary px-[24px] py-[8px]">
          {{ $t("linkContact.button") }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.banner-link {
  background-image: url("~images/bg-banner.png");
  border-radius: 10px;
  height: auto;
}
</style>
