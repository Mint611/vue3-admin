import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'

export interface State {
    count: number;
    foo: string;
}

export const key: InjectionKey<Store<State>> = Symbol('store')

export const store = createStore<State>({
  state () {
    return {
      count: 0,
      foo: 'hello'
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export function useStore () {
  return baseUseStore(key)
}
