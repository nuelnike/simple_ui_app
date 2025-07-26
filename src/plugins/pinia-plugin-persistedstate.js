/**
 * plugin for persisting app states in browser storage. 
 * Highly recommended if you must use pinia for state management
*/
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$pinia.use(piniaPluginPersistedstate);
});
