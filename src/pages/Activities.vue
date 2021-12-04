<template>
  <q-page class="fit">
    <q-tab-panels
      v-model="tab"
      animated
      transition-prev="jump-up"
      transition-next="jump-up"
    >
      <q-tab-panel name="add">
        <AddActivity @added="moveToHistory" />
      </q-tab-panel>
      <q-tab-panel name="history">
        <ActivityHistory />
      </q-tab-panel>
    </q-tab-panels>
    <q-footer>
      <q-tabs
        v-model="tab"
        dense
        align="justify"
        class="bg-primary text-white shadow-2"
      >
        <q-tab name="history" icon="history" label="history" />
        <q-tab name="add" icon="add_circle" label="add" />
      </q-tabs>
    </q-footer>
  </q-page>
</template>

<script>
import { toRefs, reactive } from "vue";
import { useStore } from "vuex";

import AddActivity from "./ActivitiesTabs/AddActivity.vue";
import ActivityHistory from "./ActivitiesTabs/ActivityHistory.vue";

export default {
  name: "Activities",
  components: {
    AddActivity,
    ActivityHistory,
  },
  setup() {
    const state = reactive({
      tab: "history",
    });
    const store = useStore();

    const moveToHistory = () => {
      state.tab = "history";
    };

    return { ...toRefs(state), moveToHistory };
  },
};
</script>

<style></style>
