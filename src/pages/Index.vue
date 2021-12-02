<template>
  <q-page class="flex flex-center column q-gutter-sm">
    <h6>{{ $t("hello") }}</h6>
    <q-btn color="primary" label="Show short toast" @click="showShortToast" />
    <q-btn color="primary" label="Show long toast" @click="showLongToast" />
    <q-btn color="primary" label="Show alert" @click="showAlert" />
    <q-btn color="positive" label="vuex" @click="callVuex" />
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "PageIndex",
  setup() {
    const store = useStore();
    const showToast = (duration) => {
      window.plugins.toast.showWithOptions(
        {
          message: "Hi, I am toast",
          duration: duration, // which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
          position: "bottom",
          addPixelsY: -120, // added a negative value to move it up a bit (default 0)
        },
        () => {}, // optional
        () => {} // optional
      );
    };

    const showShortToast = () => {
      showToast("short");
    };

    const showLongToast = () => {
      showToast("long");
    };

    const showAlert = () => {
      alert("Hi, I am alert");
    };

    const callVuex = () => {
      console.log(store.state.language.languages[0]);
      store.dispatch('language/set', 'pl');
      console.log('active: ', store.getters['language/getActiveCode']);
    };

    return { showShortToast, showLongToast, showAlert, callVuex };
  },
});
</script>
