<template>
  <div>
    <!-- header mobile -->
    <div class="sm:hidden">
      <div class="px-[24px] pt-[22px] flex justify-between items-center">
        <div class="">
          <img src="~images/logo.png" alt="" class="max-w-[130px]" />
        </div>
        <div class="">
          <v-app-bar>
            <div class="cursor-pointer" @click.stop="drawer = !drawer">
              <IconsToggle />
            </div>
          </v-app-bar>

          <v-navigation-drawer
            v-model="drawer"
            absolute
            right
            temporary
            class="pt-[20px]"
          >
            <v-list nav dense>
              <v-list-item-group
                v-model="group"
                active-class="deep-purple--text text--accent-4"
              >
                <v-list-item>
                  <nuxt-link
                    to="/"
                    class="flex items-center gap-[8px] text-black text-[14px]"
                  >
                    <IconsBook />
                    {{ $t("home.guide") }}</nuxt-link
                  >
                </v-list-item>

                <v-list-item>
                  <nuxt-link
                    to="/"
                    class="flex items-center gap-[8px] text-black text-[14px]"
                  >
                    <IconsUser />

                    {{ $t("user.login") }}</nuxt-link
                  >
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>
        </div>
      </div>
    </div>
    <!-- header tablet -->

    <div class="hidden sm:block">
      <div
        class="container grid grid-cols-12 gap-1 py-[32px] items-center bg-white"
      >
        <div class="col-span-4">
          <div class="inline-block">
            <div
              class="bg-blueLight flex items-center gap-2 px-[12px] py-1 rounded-full"
            >
              <IconsWaring />
              <span class="text-white"> {{ $t("home.versionTest") }}</span>
            </div>
          </div>
        </div>
        <div class="col-span-4">
          <img src="~images/logo.png" alt="" class="max-w-[256px]" />
        </div>
        <div class="col-span-4 flex justify-between">
          <div class="w-full">
            <ul class="flex gap-3 items-center justify-between">
              <li class="hidden xl:block">
                <nuxt-link
                  to="/"
                  class="flex items-center gap-[8px] text-black"
                >
                  <IconsBook />
                  {{ $t("home.guide") }}</nuxt-link
                >
              </li>
              <!-- TODO: CONFIG I18N -->
              <li>
                <HeaderLang />
              </li>
              <li>
                <nuxt-link
                  to="/"
                  class="flex items-center gap-[8px] button-secondary px-[12px] py-[4px]"
                >
                  <IconsUser />
                  {{ $t("user.login") }}</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="scss">
.v-toolbar {
  height: auto !important;
  box-shadow: none !important;
  background-color: #fff !important;
}

.v-toolbar__content {
  height: auto !important;
}
</style>
