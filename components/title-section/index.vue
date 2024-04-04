<template>
  <div class="flex flex-col items-center gap-[14px] md:gap-[24px] mb-[24px]">
    <h2 class="text-[22px] md:text-[32px] font-bold text-black">
      {{ title }}
      <slot />
    </h2>
    <IconsFeature />
  </div>
</template>

<script setup>
defineProps(["title"]);
</script>

<style lang="scss" scoped></style>
