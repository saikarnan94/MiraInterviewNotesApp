import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import listStore from './modules/listStore'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  // todo - implement local/persistent storage plugin so user changes are saved after page reload
  const Store = createStore({
    modules: {
      listStore
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: false
  })

  return Store
})
