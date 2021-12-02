<template>
  <div class="q-gutter-sm">
    <q-btn
      round
      size="md"
      v-for="language in languages"
      :color="language.active ? 'green' : ''"
      :key="language.code"
      @click="pickLanguage(language)"
    >
      <q-avatar size="md">
        <img :src="language.icon" />
      </q-avatar>
    </q-btn>
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";

export default {
  name: "LanguagePicker",
  setup(props) {
    const { locale } = useI18n({ useScope: "global" });
    const store = useStore();

    const languages = computed(() => {
      return store.state.language.languages;
    });

    const pickLanguage = (item) => {
      store.dispatch("language/set", item.code);
    };

    onMounted(() => {
      if (locale && locale.value) {
        store.dispatch("language/set", locale.value);
      }
    });

    return { languages, pickLanguage };
  },
};
</script>

<style></style>
