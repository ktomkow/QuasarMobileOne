<template>
  <div class="bg-blue-3 fit">
    <div class='text-h5'>History</div>
    <q-list bordered>
      <q-item v-ripple v-for="activity in myActivities" :key="activity.id">
        <q-item-section avatar>
          <q-icon color="primary" name="bluetooth" />
        </q-item-section>
        <q-item-section>Icon as avatar</q-item-section>
        <q-item-section>Icon as avatar</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { toRefs, reactive, computed } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import { extend } from "quasar";

export default {
  name: "ActivityHistory",
  setup() {
    const state = reactive({});
    const store = useStore();

    const myActivities = computed(() => {
      return store.state.activity.myActivities;
    });

    return { ...toRefs(state), myActivities };
  },
};
</script>
