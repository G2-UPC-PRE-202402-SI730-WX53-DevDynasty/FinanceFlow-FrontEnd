import {createRouter, createWebHistory} from "vue-router";
import roleSelectionComponent from "@/team-activities/components/role-selection.component.vue";
import leaderComponent from "@/team-activities/components/leader.component.vue";
import memberComponent from "@/team-activities/components/member.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/team-activities', name:'team-activities', component: roleSelectionComponent, meta: {title: 'Team Activities'}},
        { path: '/team-activities/leader', name:'team-activities-leader', component: leaderComponent, meta: {title: 'Leader'}},
        { path: '/team-activities/member', name:'team-activities-member', component: memberComponent, meta: {title: 'Member'}},
        ]
});

router.beforeEach((to, from, next) => {
  let baseTitle = 'GastroGo';
  document.title = `${baseTitle} - ${to.meta['title']}`;
  next();
})

export default router;
