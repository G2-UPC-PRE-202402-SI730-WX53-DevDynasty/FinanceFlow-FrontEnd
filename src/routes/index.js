import {createRouter, createWebHistory} from "vue-router";
import roleSelectionComponent from "@/team-activities/components/role-selection.component.vue";
import leaderComponent from "@/team-activities/components/leader.component.vue";
import memberComponent from "@/team-activities/components/member.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Home


        // Restaurants







        // Orders





        //Team Activities
        { path: '/team-activities', name:'team-activities', component: roleSelectionComponent, meta: {title: 'Team Activities'}},
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
