<template>
  <div
    class="bg-originLight py-[36px] flex flex-col items-center gap-[16px] text-center"
  >
    <div class="flex justify-center items-center max-w-[400px]">
      <div class="pr-[20px] border-r-[2px] border-gray py-[12px]">
        <img
          src="~images/logo.png"
          alt=""
          class="max-w-[150px] md:max-w-[200px]"
        />
      </div>
      <div class="flex pl-[20px] gap-[20px]">
        <div class="">
          <img src="~images/logo-1.png" alt="" class="max-w-[50px]" />
        </div>
        <div class="">
          <img src="~images/logo-2.png" alt="" class="max-w-[50px]" />
        </div>
      </div>
    </div>
    <div class="px-[20px]">
      <p class="font-normal text-blackLight">
        <span class="font-bold">{{ $t("footer.headquarters") }}: </span>
        {{ $t("footer.address") }}
      </p>
      <p class="mb-[16px] text-blackLight">
        <span class="font-bold">{{ $t("footer.email") }}: </span>
        {{ $t("footer.addressEmail") }}
      </p>
      <p class="text-blackLight">
        {{ $t("footer.desc") }}
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
