<template>
  <div class="">
    <button :class="classButton" class="flex items-center justify-center">
      <div v-if="iconLeft">
        <!-- Sử dụng slot để chèn nội dung của icon -->
        <slot />
      </div>
      {{ title }}
      <div v-if="iconRight">
        <!-- Sử dụng slot để chèn nội dung của icon -->
        <slot />
      </div>
    </button>
  </div>
</template>
<script>
export default {
  name: "Button",
  props: {
    title: String,
    classButton: String,
    iconLeft: Boolean,
    iconRight: Boolean,
  },
};
</script>
