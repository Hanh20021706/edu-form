<template>
  <div class="">
    <h2 class="text-primary">{{ $t("welcome") }}</h2>
    <select v-model="selectedLanguage" @change="changeLanguage">
      <option value="en">English</option>
      <option value="vi">Vietnamese</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      selectedLanguage: "en", // Ngôn ngữ mặc định
    };
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.selectedLanguage;
    },
  },
};
</script>
