<template>
  <q-page class="flex flex-center column q-gutter-sm">
    <h6>{{ $t("hello") }}</h6>
    <q-btn color="primary" label="Show short toast" @click="showShortToast" />
    <q-btn color="primary" label="Show long toast" @click="showLongToast" />
    <q-btn color="primary" label="Show alert" @click="showAlert" />
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  setup() {
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
    return { showShortToast, showLongToast, showAlert };
  },
});
</script>
