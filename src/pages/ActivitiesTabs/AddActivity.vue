<template>
  <q-form
    @submit="onSubmit"
    @reset="onReset"
    class="q-gutter-lg q-mt-md flex column items-center"
  >
    <q-select
      outlined
      v-model="activity"
      :options="activityTypes"
      label="Type"
      class="fit q-px-lg"
      dense
    >
      <template v-slot:option="scope">
        <q-item v-bind="scope.itemProps">
          <q-item-section avatar>
            <q-icon :name="scope.opt.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ scope.opt.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </q-select>

    <q-date v-model="date" today-btn first-day-of-week="1" minimal />
    <q-input
      outlined
      v-model="description"
      stack-label
      dense
      class="fit q-px-lg"
      label="Description"
      clearable
      counter
      maxlength="100"
    />

    <div class="column items-center q-ma-xs q-pa-xs q-gutter-sm">
      <q-btn label="Reset" type="reset" color="primary" class="fit q-ml-sm" />
      <q-btn label="Save" type="submit" color="positive" class="fit q-px-lg" />
    </div>
  </q-form>
</template>

<script>
import { toRefs, reactive, computed } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import { extend } from "quasar";

export default {
  name: "AddActivity",
  setup(props) {
    const state = reactive({
      date: null,
      activity: { label: "" },
      description: null,
    });

    const store = useStore();
    const { t } = useI18n({ useScope: "global" });

    const activityTypes = computed(() =>
      store.state.activity.types.map((x) =>
        extend(true, { label: t(`activities.types.${x.name}`) }, x)
      )
    );

    const onSubmit = () => {
      console.log(state);
    };

    const onReset = () => {};

    return { ...toRefs(state), onSubmit, onReset, activityTypes };
  },
};
</script>
