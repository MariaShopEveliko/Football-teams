import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allTeams: JSON.parse(localStorage.getItem("allTeams") || "[]"),
    followedTeams: JSON.parse(localStorage.getItem("followedTeams") || "[]"),
  },
  getters: {
    allTeams: (state) => state.allTeams,
    followedTeams: (state) => state.followedTeams,
  },
  mutations: {
    setTeams(state, teams) {
      state.allTeams = teams;
      localStorage.setItem("allTeams", JSON.stringify(teams));
    },
    toggleFollow(state, teamId) {
      const team = state.allTeams.find((team) => team.id === teamId);
      if (team) {
        team.is_following = !team.is_following;
        if (team.is_following) {
          state.followedTeams.push(team); 
        } else {
          state.followedTeams = state.followedTeams.filter(
            (t) => t.id !== team.id
          );
        }
        localStorage.setItem("followedTeams", JSON.stringify(state.followedTeams));
      }
    },
    clearAllTeams(state) {
      localStorage.removeItem("allTeams");
      state.allTeams = [];
    },
  },
  actions: {
    toggleFollow({ commit }, team) {
      commit("toggleFollow", team.id);
    },
  },
});