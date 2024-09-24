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