<template>
  <q-page class="flex flex-center column">
    {{ state.version }}
  </q-page>
</template>

<script>
import { onMounted, reactive } from "vue";
export default {
  name: "Info",
  setup() {
    const state = reactive({
      version: "",
    });

    onMounted(() => {
      cordova.getAppVersion.getVersionNumber(function (version) {
        state.version = version;
      });
    });

    return { state };
  },
};
</script>

<style></style>
