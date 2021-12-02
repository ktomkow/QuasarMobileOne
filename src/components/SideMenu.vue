<template>
  <div>
    <q-list>
      <q-item-label header>
        {{ $t("side_menu.title") }}
      </q-item-label>
      <SideMenuLink v-for="tile in menuTiles" :key="tile.title" v-bind="tile" />
    </q-list>
  </div>
</template>

<script>
import { ref, reactive, computed } from "vue";
import SideMenuLink from "components/SideMenuLink.vue";

export default {
  name: "SideMenu",
  components: { SideMenuLink },
  setup(props) {
    const state = reactive({
      text: "napis",
    });

    const menuTiles = computed(() => [
      {
        title: "side_menu.home",
        icon: "home",
        link: "/",
      },
      {
        title: "side_menu.stepper_demo",
        icon: "directions_walk",
        link: "/stepper_demo",
      },
      {
        title: "side_menu.activities",
        icon: "surfing",
        link: "/activities",
      },
      {
        title: "side_menu.settings",
        icon: "settings",
        link: "/settings",
      },

      {
        title: "side_menu.info",
        icon: "info",
        link: "/info",
      },

      {
        title: "side_menu.404",
        icon: "dangerous",
        link: "/404",
      },
    ]);

    return { state, menuTiles };
  },
};
</script>
