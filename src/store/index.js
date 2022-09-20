import axios from 'axios';
import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            userList: []
        }
    },
    getters: {
        getUserList(state) {
            return state.userList;
        }
    },
    mutations: {
        setUser(state, list) {
            state.userList = list;
        }
    },
    actions: {
        async getUserList(context) {
            return await axios.get('https://api.github.com/users?per_page=100').then(res => {
                context.commit('setUser', res.data)
                return res;
            }).catch((error) => {
                console.log('Get users API returns with error', error);
            });
        },
        async getSearchedUser({ commit }, searchVal) {
            // const result = state.userList.filter((user) => {
            //     return user.login.toLowerCase().includes(searchVal.toLowerCase())
            // });
            // console.log(result);
            // commit('setUser', result)
            await axios.get(`https://api.github.com/search/users?q=${searchVal}`).then(res => {
                commit('setUser', res.data.items)
            }).catch((error) => {
                console.log('Search users API returns with error', error);
            });
        },
    }
})

export default store
