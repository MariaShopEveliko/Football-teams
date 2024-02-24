<template>
  <div id="app">
    Search teams
    <input
      type="text"
      v-model="searchQuery"
      @input="search"
      placeholder="Search teams"
    />
    <ul>
      <li v-for="(team, index) in filteredTeams" :key="index">
        {{ team.name }} - {{ team.stadium }} - {{ team.leagues.join(", ") }}
        {{ team.id }}
        <button @click="toggleFollow(team)">
          {{
            followedTeams.some((followedTeam) => followedTeam.id === team.id)
              ? "Unfollow"
              : "Follow"
          }}
        </button>
      </li>
    </ul>
    <div v-if="filteredTeams.length === 0">No Teams Found</div>
    <div>
      My teams:
      <ul>
        <li v-for="(team, index) in followedTeams" :key="index">
          {{ team.id }}
          {{ team.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["allTeams", "followedTeams"]),
  },
  data() {
    return {
      searchQuery: "",
      filteredTeams: [],
    };
  },
  methods: {
    ...mapActions(["toggleFollow"]),
    async fetchData() {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/92a45382-798e-4899-866c-152bd888424a"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        let data = await response.text();
        data = data.replace(/,\s*]/, "]");
        data = JSON.parse(data);
        this.$store.commit("setTeams", data.football_teams);
        this.filteredTeams = data.football_teams;
        localStorage.setItem("expiresIn", Date.now() + 86400000); // Set expiration time to 24 hours from now
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    search() {
      const query = this.searchQuery.toLowerCase();
      const filteredAllTeams = this.allTeams.filter(
        (team) =>
          team.name.toLowerCase().includes(query) ||
          team.stadium.toLowerCase().includes(query) ||
          team.leagues.some((league) => league.toLowerCase().includes(query))
      );
      this.filteredTeams = filteredAllTeams;
    },
    clearAllTeamsIfExpired() {
      const expiresIn = localStorage.getItem("expiresIn");
      if (!expiresIn || Date.now() >= expiresIn) {
        this.$store.commit("clearAllTeams");
        localStorage.removeItem("expiresIn");
      }
    },
  },
  beforeMount() {
    this.clearAllTeamsIfExpired();
  },
  mounted() {
    if (!this.allTeams.length > 0) {
      this.fetchData();
    } else {
      this.filteredTeams = this.allTeams;
    }
  },
};
</script>
