<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Demo app </q-toolbar-title>
        <language-picker/>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered behavior="mobile">
      <SideMenu />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import SideMenu from "components/SideMenu.vue";
import LanguagePicker from "src/components/LanguagePicker.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    SideMenu,
    LanguagePicker,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
