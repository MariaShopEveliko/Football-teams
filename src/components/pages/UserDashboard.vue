<template>
    <section class="profile-card">
        <div class="profile-card-header">
            <div class="profile-info-wrp d-flex flex-column">
                <div class="d-flex align-items-center">
                    <div class="profile-img"
                        :style="{ 'background-image': 'url(' + require('@/assets/img/avatar.png') + ')' }">
                    </div>
                    <h2 class="text-white m-0 fs-lg profil-name">RichyRich</h2>
                </div>
                <div class="profile-level-wrp text-center">
                    <span class="profile-level fs-xxs text-white">Level 5</span>
                </div>
            </div>
            <ul class="profile-tabs d-flex justify-content-center text-uppercase fs-xs">
                <li>
                    <a href="javascript:void(0)" class="active">My teams</a>
                </li>
                <li>
                    <a href="javascript:void(0)">About</a>
                </li>
            </ul>
        </div>
        <div class="profile-card-body">
            <h2 class="text-uppercase">Search teams</h2>
            <SearchBox v-model="searchQuery" @input="search" @clear="clearSearch" />
            <TeamList v-if="filteredTeams.length > 0" :teams="filteredTeams" 
                :isFollowingTheTeam="isFollowingTheTeam" :toggleFollow="toggleFollow"
                :searchQuery="searchQuery" />
            <NotFound v-else :errorText="'No Teams Found'" />
        </div>
        <div class="profile-card-footer">
            <h2 class="text-uppercase">My teams</h2>
            <TeamList v-if="followedTeams.length > 0" :teams="followedTeams" 
                :isFollowingTheTeam="isFollowingTheTeam" :toggleFollow="toggleFollow" :isSimpleList="true" />
            <div v-else class="no-teams-wrp text-muted w-100 d-flex align-items-center justify-content-center">
                <p class="m-0 fs-sm">You aren't following any teams yet.</p>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import NotFound from "../molecules/NotFound.vue";
import SearchBox from "../molecules/SearchBox.vue";
import Button from "../atoms/Button.vue";
import TeamList from "../organisms/TeamList.vue";

export default {
    name: "UserDashboard",
    components: {
        NotFound,
        SearchBox,
        Button,
        TeamList
    },
    computed: {
        ...mapGetters(["allTeams", "followedTeams"]),
    },
    data() {
        return {
            searchQuery: "",
            filteredTeams: [],
            useName: "RichyRich"
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
        isFollowingTheTeam(team) {
            return this.followedTeams.some(followedTeam => followedTeam.id === team.id);
        },
        clearSearch() {
            this.searchQuery = "";
            this.filteredTeams = this.allTeams;
        }
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
        this.$store.commit("setPageTitle", this.useName);
    },
};
</script>
