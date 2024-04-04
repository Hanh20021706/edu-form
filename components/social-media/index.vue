<template>
  <div class="container mb-section-mb md:mb-section">
    <TitleSection title="Khách hàng của chúng tôi" />
    <div class="flex py-[24px] justify-between items-center flex-wrap">
      <div class="" v-for="item in data" :key="item">
        <img :src="item.image" alt="" class="max-w-[50px]" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          image: require("@/assets/images/social-media/image-1.png"),
        },
        {
          image: require("@/assets/images/social-media/image-2.png"),
        },
        {
          image: require("@/assets/images/social-media/image-3.png"),
        },
        {
          image: require("@/assets/images/social-media/image-4.png"),
        },
        {
          image: require("@/assets/images/social-media/image-5.png"),
        },
        {
          image: require("@/assets/images/social-media/image-6.png"),
        },
        {
          image: require("@/assets/images/social-media/image-7.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
