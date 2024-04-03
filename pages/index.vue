<template>
  <div>
    <Header />
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
