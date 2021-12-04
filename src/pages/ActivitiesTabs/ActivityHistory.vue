<template>
  <div class="fit">
    <div class="text-h5">History</div>
    <q-list bordered>
      <q-item v-ripple v-for="activity in myActivities" :key="activity.id">
        <q-item-section avatar>
          <q-icon color="primary" :name="getIcon(activity.typeId)" />
        </q-item-section>
        <q-item-section>
          <span>{{ activity.id }}</span>
        </q-item-section>
        <q-item-section>{{ $d(activity.date) }}</q-item-section>
        <q-item-section>{{ activity.description }}</q-item-section>
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

    const getIcon = (typeId) => {
      return store.getters["activity/getIcon"](typeId);
    };

    return { ...toRefs(state), myActivities, getIcon };
  },
};
</script>
