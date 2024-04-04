<template>
  <div>
    <select
      class="bg-white text-black cursor-pointer border-none outline outline-0 transition-all focus:border-t-transparent focus:outline-0 disabled:border-0"
      v-model="selectedLanguage"
      @change="changeLanguage"
    >
      <option value="vi">Việt Nam</option>
      <option value="en">English</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLanguage: "vi", // Ngôn ngữ mặc định
    };
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.selectedLanguage;
    },
  },
};
</script>

<style lang="scss" scoped></style>
