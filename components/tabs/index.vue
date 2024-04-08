<template>
  <div class="relative">
    <div class="absolute right-0 top-0 w-[150px] h-[150px]">
      <img src="~images/tab/subtract.png" alt="" />
    </div>
    <div class="container md:mb-section mb-section-mb">
      <TitleSection> {{ $t("tabs.title") }} </TitleSection>
      <div
        class="flex flex-col-reverse gap-[22px] md:grid md:grid-cols-12 md:items-center"
      >
        <div class="md:col-span-6">
          <v-tabs v-model="tab">
            <v-tab
              v-for="item in items"
              :key="item.tab"
              class="!md:max-w-[600px]"
              :ripple="false"
            >
              <div
                class="flex items-center gap-[18px] px-[12px] py-[8px] md:px-[20px] md:py-[18px]"
              >
                <div class="image-item">
                  <img :src="item.icon" alt="" class="w-[80px] h-[80px]" />
                </div>
                <div class="flex flex-col">
                  <h3
                    class="text-[16px] font-bold text-black md:text-[20px] normal-case mb-[16px]"
                  >
                    {{ item.name }}
                  </h3>
                  <p
                    class="text-[12px] font-light text-gray normal-case md:text-[16px]"
                  >
                    {{ item.desc }}
                  </p>
                </div>
              </div>
            </v-tab>
          </v-tabs>
        </div>

        <div class="md:col-span-6">
          <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in items" :key="item.tab">
              <div class="flex justify-center md:items-center">
                <img
                  :src="item.image"
                  alt=""
                  class="max-w-[300px] max-h-[200px] md:max-w-[500px] md:max-h-[350px]"
                />
              </div>
            </v-tab-item>
          </v-tabs-items>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: [
        {
          name: "Dễ Dàng & nhanh chóng",
          desc: "Tham gia khảo sát chỉ trong vài phút. Giao diện thân thiện và đơn giản để bạn tập trung vào ý kiến của mình",
          image: require("@/assets/images/tab/image-1.png"),
          icon: require("@/assets/images/tab/tab-1.png"),
        },
        {
          name: "An Toàn và Bảo Mật",
          desc: "Tham gia khảo sát chỉ trong vài phút. Giao diện thân thiện và đơn giản để bạn tập trung vào ý kiến của mình",
          icon: require("@/assets/images/tab/tab-2.png"),
          image: require("@/assets/images/tab/image-2.png"),
        },
        {
          name: "Khảo Sát Nổi Bật",
          desc: "Tham gia khảo sát chỉ trong vài phút. Giao diện thân thiện và đơn giản để bạn tập trung vào ý kiến của mình",
          image: require("@/assets/images/tab/image-3.png"),
          icon: require("@/assets/images/tab/tab-3.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.v-tabs-bar {
  height: auto !important;
}
.v-slide-group__wrapper {
  display: block !important;
}

.v-tabs-slider-wrapper {
  height: 0 !important;
}
.v-slide-group__content,
.v-tabs-bar__content {
  flex-direction: column;
  gap: 32px;
}
.v-tab {
  text-align: left;
  border: 2px solid #e4e7ec;
  max-width: 600px;
  border-radius: 12px;
  letter-spacing: normal !important;
}
.v-tab:before {
  background-color: #ffff !important;
}
.v-tab--active {
  border-color: #faa51a;
}
.v-tab--active img {
  opacity: 100% !important;
}
.image-item img {
  max-width: none;
  opacity: 50%;
}
</style>
