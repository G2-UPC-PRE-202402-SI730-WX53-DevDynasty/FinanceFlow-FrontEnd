import {createRouter, createWebHistory} from "vue-router";
import roleSelectionComponent from "@/worker/team-activities/pages/role-selection.component.vue";
import leaderComponent from "@/worker/team-activities/pages/leader.component.vue";
import memberComponent from "@/worker/team-activities/pages/member.component.vue";
import createTeamComponent from "@/worker/team-activities/components/create-team.component.vue";
import joinATeamComponent from "@/worker/team-activities/components/join-a-team.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Home


        // Restaurants







        // Orders





        //Team Activities
        { path: '/team-activities', name:'team-activities', component: roleSelectionComponent, meta: {title: 'Team Activities'}},
        { path: '/team-activities/create-team', name: 'team-activities-create-team', component: createTeamComponent, meta: { title: 'Create Team' }},
        { path: '/team-activities/join-a-team', name: 'team-activities-join-a-team', component: joinATeamComponent, meta: { title: 'Join a Team' }},
        { path: '/team-activities/leader', name:'team-activities-leader', component: leaderComponent, meta: {title: 'Leader'}},
        { path: '/team-activities/members', name:'team-activities-members', component: memberComponent, meta: {title: 'Members'}},



        // Profile


        // Notifications


        ]
});

router.beforeEach((to, from, next) => {
  let baseTitle = 'GastroGo';
  document.title = `${baseTitle} - ${to.meta['title']}`;
  next();
})

export default router;
