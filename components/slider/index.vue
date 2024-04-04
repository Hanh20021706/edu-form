<template>
  <div>
    <div class="container md:mb-section mb-section-mb">
      <TitleSection> {{ $t("slider.title") }} </TitleSection>
      <v-carousel>
        <v-carousel-item v-for="(item, i) in data" :key="i">
          <div class="flex items-center px-[32px] md:flex-row flex-col">
            <div class="flex-1 md:max-w-[600px] max-w-[300px]">
              <div class="z-100">
                <img :src="item.image" alt="" />
              </div>
            </div>
            <div class="flex-1">
              <div
                class="flex flex-col gap-[16px] mb-[40px] px-[26px] items-center text-center md:items-start md:text-start"
              >
                <img class="w-[64px] h-[64px]" :src="item.icon" alt="" />
                <h3 class="text-black text-[18px] font-bold">
                  {{ item.title }}
                </h3>
                <p class="text-gray text-[16px] font-light">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          id: "slide1",
          image: require("@/assets/images/slider/image-1.png"),
          icon: require("@/assets/images/slider/item-1.png"),
          title: "Đăng nhập/ đăng ký",
          description:
            "Vui lòng truy cập trang web của chúng tôi bằng cách đăng nhập vào tài khoản của bạn.",
        },
        {
          id: "slide2",
          image: require("@/assets/images/slider/image-2.png"),
          icon: require("@/assets/images/slider/item-2.png"),
          title: "Thiết kế biểu mẫu",
          description:
            "Tạo ra một biểu mẫu hoàn toàn mới và điều chỉnh thiết kế của nó theo sở thích và yêu cầu cụ thể của bạn.",
        },
        {
          id: "slide3",
          image: require("@/assets/images/slider/image-4.png"),
          icon: require("@/assets/images/slider/item-4.png"),
          title: "Chia sẻ",
          description:
            "Chia sẻ biểu mẫu khảo sát nhanh chóng và thuận tiện để thu thập ý kiến và thông tin từ cộng đồng của bạn.",
        },
        {
          id: "slide4",
          image: require("@/assets/images/slider/image-5.png"),
          icon: require("@/assets/images/slider/item-5.png"),
          title: "Phân tích",
          description:
            "Kiểm tra kết quả thống kê và tải xuống các câu trả lời để sử dụng theo nhu cầu của bạn một cách thuận tiện.",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.v-carousel,
.v-image,
.v-carousel__controls {
  height: auto !important;
}
.v-window__next {
  right: 0;
}
.v-window__prev,
.v-window__next,
.v-carousel__controls {
  background-color: #fff;
}
.v-icon {
  color: black !important;
}
.v-btn--active {
  border: 8px solid #0c266f;
}
.v-carousel__controls__item .v-icon {
  color: #d9d9d9 !important;
}
.v-carousel__controls {
  height: auto !important;
}
</style>
