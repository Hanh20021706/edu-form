<template>
  <div class="container mt-[22px] mb-section-mb md:mt-[64px] md:mb-section">
    <div class="banner p-[22px] md:p-[88px]">
      <div
        class="flex flex-col-reverse md:grid md:grid-cols-12 md:items-center"
      >
        <div class="col-span-6">
          <h2
            class="text-[24px] font-bold text-white leading-[1.2] tracking-tight md:text-[44px]"
          >
            {{ $t("banner.title") }}
          </h2>
          <p
            class="text-[12px] md:text-[16px] md:font-medium font-light text-white my-[12px]"
          >
            {{ $t("banner.desc") }}
          </p>
          <button
            class="button-primary md:text-[18px] md:px-[32px] md:py-[16px] md:font-semibold flex gap-1 px-[12px] py-1 items-center"
          >
            {{ $t("banner.create") }}
            <IconsRight />
          </button>
        </div>
        <div class="col-span-6">
          <img src="~images/banner.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
  background-image: url("~images/bg-banner.png");
  border-radius: 10px;
  height: auto;
}
</style>
