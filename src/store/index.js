import Vue from "vue";
import Vuex from "vuex"
import {reqGetSongs} from "@/api";
Vue.use(Vuex);

const state = {
    songs:[]
};
const mutations = {
    GETSONGS(state,songs){
        state.songs = songs;
    }
};
const actions = {
    async getSongs({commit}){
        let result = await reqGetSongs();
        console.log(result.data)
        if (result.data.code === 200){
            commit('GETSONGS',result.data.data)
        }
    }
};
const getters = {};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})