import { Store } from 'vuex';

export function set(context, item) {
  context.commit('set', item);
}