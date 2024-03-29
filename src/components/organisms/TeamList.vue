<template>
    <ul class="teams-wrp">
        <li v-for="(team, index) in teams" :key="index" tabindex="0" :class="itemClass(index)"
            @mouseover="updateActiveTeamIndex(index)" @focus="updateActiveTeamIndex(index)" @focusout="resetActiveIndex"
            @mouseout="resetActiveIndex">
            <div class="team-logo">
                <img src="@/assets/img/team-placeholder.png" :alt="team.name" />
            </div>
            <div class="flex-1">
                <span class="text-muted fs-xs" v-if="team.leagues && !isSimpleList" v-html="formattedLeagues(team)"></span>
                <div>
                    <span class="team-name" v-html="highlightText(team.name)"></span>
                    <span v-if="team.stadium && !isSimpleList" class="fs-sm text-muted team-stadium-wrp"
                        v-html="highlightText(team.stadium)"></span>
                </div>
            </div>
            <Button v-if="!isSimpleList" :btnStyle="btnClasses(team)" :btnText="btnLabel(team)" :handleClick="() => toggleFollow(team)" />
        </li>
    </ul>
</template>
  
<script>
import Button from '../atoms/Button.vue';

export default {
    name: 'TeamList',
    components: {
        Button
    },
    props: {
        teams: {
            type: Array,
            required: true
        },
        isFollowingTheTeam: Function,
        toggleFollow: Function,
        isSimpleList: {
            type: Boolean,
            default: false
        },
        searchQuery: String
    },
    data() {
        return {
            activeTeamIndex: null
        };
    },
    methods: {
        updateActiveTeamIndex(index) {
            this.activeTeamIndex = index;
        },
        isActiveIndex(index) {
            return this.activeTeamIndex === index
        },
        resetActiveIndex() {
            this.activeTeamIndex = null;
        },
        itemClass(index) {
            return ['team-item d-flex flex-row align-items-center', this.isActiveIndex(index) ? 'focused' : null];
        },
        highlightText(text) {
            if (this.searchQuery && text.toLowerCase().includes(this.searchQuery.toLowerCase())) {
                const regex = new RegExp(this.searchQuery, 'gi');
                return text.replace(regex, match => `<span class="highlight">${match}</span>`);
            }
            return text;
        },
        formattedLeagues(team) {
            if (team.leagues && team.leagues.length > 0) {
                const formattedLeagues = team.leagues.map(league => this.highlightText(league));
                return formattedLeagues.join(", ");
            }
            return "";
        },
        btnLabel(team){
            return this.isFollowingTheTeam(team) ? 'Following' : 'Follow';
        },
        btnClasses(team){
            return 'btn-sm text-uppercase ' + (this.isFollowingTheTeam(team) ? 'btn-outlined-primary' : 'btn-primary');
        }
    }
}
</script>