<template>
  <div id="page-wrapper" :class="{ 'page-collapsed': true }">
    <div @click="reduce = !reduce" class="overlay"></div>
    <vs-sidebar top="100px" notShadow square :open="open" fixed>
      <div
        v-for="item in items"
        :key="item.to"
        :id="item.to"
        :to="{ name: item.to }"
      >
        <div>
          <vs-sidebar-item
            :class="{ active: $route.name === item.to }"
            class="mb-1"
            :to="{ name: item.to }"
          >
            <template #icon>
              <i :class="item.icon" class="aside-icon"></i>
            </template>
            <span>{{ item.text }}</span>
          </vs-sidebar-item>
        </div>
      </div>
    </vs-sidebar>

    <vs-navbar
      square
      fixed
      notShadow
      color="#fff"
      padding-scroll
      center-collapsed
    >
      <template #left>
        <div class="d-flex align-center pl-1 pl-lg-2">
          <!-- <button @click="reduce = !reduce" class="toggle-sidebar-btn mt-1">
            <i class="isax isax-menu-1 lg"></i>
          </button> -->

          <h6 class="ml-3 sidebar-title">Solana Game Analytics</h6>
        </div>
      </template>
      <template #right>
        <div class="d-flex align-center pr-1 pr-lg-3">
          <img
            src="@/assets/icons/solanaLogo.png"
            class="d-none d-sm-block"
            style="max-width: 130px; height: auto"
          />
          <!-- <vs-button flat>Login</vs-button> -->
          <!-- <vs-button>Get Started</vs-button> -->
        </div>
      </template>
    </vs-navbar>

    <main class="pt-13 pb-16 mb-16">
      <div class="container pt-8">
        <div class="row">
          <div class="col-12">
            <div class="link-group-container">
              <div class="link-group">
                <RouterLink to="/" active-class="activate" exact>
                  Start Atlas
                </RouterLink>
                <RouterLink
                  :to="{ name: 'Genopets' }"
                  active-class="activate"
                  exact
                >
                  Genopets
                </RouterLink>
                <RouterLink
                  :to="{ name: 'Aurory' }"
                  active-class="activate"
                  exact
                >
                  Aurory
                </RouterLink>
                <RouterLink
                  :to="{ name: 'Comparing' }"
                  active-class="activate"
                  exact
                >
                  Comparing
                </RouterLink>
                <RouterLink
                  active-class="activate"
                  exact
                  :to="{ name: 'Refrences' }"
                >
                  Refrences
                </RouterLink>
              </div>
              <div class="link-group-header">
                <h3 class="d-flex">
                  <span
                    v-for="(item, i) in $route.meta.title"
                    :key="i"
                    class="d-flex align-center"
                  >
                    <span :class="{ 'muted-text fw-500 normal mt-1': i != 0 }">
                      {{ item }}
                    </span>
                    <i
                      v-if="i < $route.meta.title.length - 1"
                      class="isax isax-arrow-right-3 mx-2 md muted mt-1"
                    ></i>
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div
          style="background-color: #151521"
          class="px-3 px-lg-8 pt-7 pb-10 mb-16"
        >
          <vue-page-transition name="fade-in-up">
            <router-view />
          </vue-page-transition>
        </div>
        <div style="height: 100px"></div>
        <!-- <HomeFooter /> -->
      </div>
    </main>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      active: "home",
      reduce: true,
      open: false,
      items: [
        { text: "Introduction", to: "Home", icon: "isax isax-home" },
        { text: "Refrences", to: "refrences", icon: "isax isax-share" },
        { text: "Resources", to: "resources", icon: "isax isax-shield-search" },
      ],
    };
  },
  components: {
    // HomeFooter: () => import("../components/footer.vue"),
    RouterLink,
  },
  methods: {
    resizeHandler() {
      if (window.innerWidth > 1200) {
        // this.reduce = true;
      } else {
        // this.reduce = true;
      }
    },
  },
  mounted() {
    // dEventListener("resize", this.resizeHandler);
  },
  beforeMount() {
    this.resizeHandler();
  },
};
</script>

<style scoepd></style>
