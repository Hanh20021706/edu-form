<template>
  <div>
    <div
      class="relative md:grid md:grid-cols-12 md:items-center md:gap-5 h-[100vh]"
    >
      <div class="absolute top-0 right-0 bottom-0 z-0">
        <img src="~images/user/sign-in-2.png" alt="" class="max-w-[400px]" />
      </div>
      <div class="hidden md:block col-span-6 md:h-full">
        <img
          src="~images/user/sign-in.png"
          alt=""
          class="h-full object-cover"
        />
      </div>
      <div class="h-[100vh] md:col-span-6 md:max-w-[400px] md:h-auto">
        <div
          class="p-[20px] items-center justify-center flex flex-col h-full gap-[24px] max-w-[120px] z-10"
        >
          <img src="~images/logo.png" alt="" class="max-w-[250px]" />
          <h2 class="text-[22px] md:text-[32px] font-bold">
            {{ $t("user.login") }}
          </h2>
          <nuxt-link to="/" class="button-primary w-full text-center py-2">
            {{ $t("user.logonAccount") }}
          </nuxt-link>
          <div
            class="text-[16px] font-light item-content relative w-full text-center"
          >
            <span
              class="w-[150px] h-[1px] text-red-800 bg-gray3 absolute left-0 bottom-[50%]"
            ></span>
            {{ $t("user.and") }}
            <span
              class="w-[150px] h-[1px] text-red-800 bg-gray3 absolute right-0 bottom-[50%]"
            ></span>
          </div>
          <div
            class="flex max-h-[46px] items-center gap-2 button-secondary py-2 justify-center w-full"
          >
            <button class="">{{ $t("user.loginWidth") }}</button>
            <IconsLogoOne />
          </div>

          <nuxt-link to="/" class="text-blueLight w-full text-left">
            {{ $t("user.loginLocal") }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "user",
};
</script>

<style lang="scss"></style>
