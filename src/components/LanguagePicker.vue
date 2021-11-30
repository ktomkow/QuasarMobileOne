<template>
  <div class="q-gutter-sm">
    <q-btn
      round
      size="md"
      v-for="language in state.languages"
      :color="language.active ? 'green' : ''"
      :key="language.code"
      @click="languageChosen(language)"
    >
      <q-avatar size="md">
        <img :src="language.icon" />
      </q-avatar>
    </q-btn>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
import { useI18n } from "vue-i18n";

export default {
  name: "LanguagePicker",
  setup(props) {
    const { locale } = useI18n({ useScope: "global" });
    const state = reactive({
      languages: [
        {
          name: "English",
          icon: "balls/united-kingdom.png",
          code: "en",
          active: false,
        },
        {
          name: "Polish",
          icon: "balls/poland.png",
          code: "pl",
          active: false,
        },
        {
          name: "Russian",
          icon: "balls/russia.png",
          code: "ru",
          active: false,
        },
        {
          name: "Japaneese",
          icon: "balls/japan.png",
          code: "ja",
          active: false,
        },
      ],
    });

    const languageChosen = (item) => {
      const current = state.languages.find((x) => x.active);
      if (current) {
        current.active = false;
      }
      item.active = true;
      locale.value = item.code;
    };

    const clear = () => {
      state.languages.forEach((x) => (x.active = false));
    };

    const markCurrentLanguage = () => {
      state.languages.forEach((x) => x.active = locale.value === x.code);
    };

    onMounted(() => {
      if(locale && locale.value) {
        markCurrentLanguage();
      }
    });

    return { state, languageChosen  };
  },
};
</script>

<style></style>
