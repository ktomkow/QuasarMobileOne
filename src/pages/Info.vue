<template>
  <q-page class="flex flex-center column">
    <q-markup-table>
      <tbody>
        <tr>
          <td>app name</td>
          <td>{{state.appName}}</td>
        </tr>
        <tr>
          <td>package name</td>
          <td>{{state.packageName}}</td>
        </tr>
        <tr>
          <td>version code</td>
          <td>{{state.versionCode}}</td>
        </tr>
        <tr>
          <td>version number</td>
          <td>{{state.versionNumber}}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </q-page>
</template>

<script>
import { onMounted, reactive } from "vue";
export default {
  name: "Info",
  setup() {
    const state = reactive({
      appName: "",
      packageName: "",
      versionCode: "",
      versionNumber: ""
    });

    onMounted(() => {
      cordova.getAppVersion.getAppName(function (x) {
        state.appName = x;
      });
      cordova.getAppVersion.getPackageName(function (x) {
        state.packageName = x;
      });
      cordova.getAppVersion.getVersionCode(function (x) {
        state.versionCode = x;
      });
      cordova.getAppVersion.getVersionNumber(function (x) {
        state.versionNumber = x;
      });
    });

    return { state };
  },
};
</script>

<style></style>
