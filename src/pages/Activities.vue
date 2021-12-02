<template>
  <q-page class="flex flex-center column">

  </q-page>
</template>

<script>
import { onMounted, reactive } from "vue";
import { useStore } from "vuex";

export default {
  name: "Activities",
  setup() {
    const state = reactive({});
    const store = useStore();

    return { state };
  },
};
</script>

<style></style>
