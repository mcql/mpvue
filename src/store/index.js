import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

const store = new vuex.Store({
    state: {
        typename: ''
    },
    mutations: {
        CHANGE_TYPENAME(state, typename) {
            state.typename = typename
        }
    },
    actions: {
        change_typename(context, typename) {
            context.commit('CHANGE_TYPENAME', typename)
        }
    }

})

export default store