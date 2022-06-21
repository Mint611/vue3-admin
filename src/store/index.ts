import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'
import { IUserInfo } from '@/api/types/common'
import createPersistedState from 'vuex-persistedstate'

const state = {
  count: 1,
  isCollapse: false,
  user: null as ({ token: string } & IUserInfo) | null
}

export type State = typeof state

export const key: InjectionKey<Store<State>> = Symbol('store')

export const store = createStore<State>({
  plugins: [createPersistedState()],
  state,
  mutations: {
    setIsCollapse (state, payload) {
      state.isCollapse = payload
    },

    setUser (state, payload) {
      state.user = payload
    }
  }
})

export function useStore () {
  return baseUseStore(key)
}
