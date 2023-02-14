import Vue from "vue";
import VueRouter from "vue-router";
import HomeLayout from "../components/base-layout.vue";
import Home from "../pages/home.vue";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: HomeLayout,
        children: [
            {
                path: "",
                name: "Home",
                component: Home,
                meta: {
                    next: {
                        text: "General > Concepts",
                        link: "general.concepts"
                    },
                    prev: null,
                    title: ['Games', 'Star Atlas']
                }
            },

            {
                path: "genopets",
                name: "Genopets",
                component: () => import("../pages/game-2/index.vue"),
                meta: {
                    next: {
                        text: "General > Concepts",
                        link: "general.concepts"
                    },
                    prev: null,
                    title: ['Games', 'Genopets']
                }
            },
            
            {
                path: "aurory",
                name: "Aurory",
                component: () => import("../pages/game-3/index.vue"),
                meta: {
                    next: {
                        text: "General > Concepts",
                        link: "general.concepts"
                    },
                    prev: null,
                    title: ['Games', 'Aurory']
                }
            },

            {
                path: "comparing",
                name: "Comparing",
                component: () => import("../pages/comparing/index.vue"),
                meta: {
                    next: {
                        text: "General > Concepts",
                        link: "general.concepts"
                    },
                    prev: null,
                    title: ['Comparing']
                }
            },

            {
                path: "refrences",
                name: "Refrences",
                component: () => import("../pages/refrences/index.vue"),
                meta: {
                    next: {
                        text: "General > Concepts",
                        link: "general.concepts"
                    },
                    prev: null,
                    title: ['Refrences']
                }
            },
        ]
    },
    {
        path: "*",
        redirect: { name: "404" }
    },
    {
        path: "/not-found/404",
        component: () => import("../pages/errors/404.vue"),
        name: "404"
    }

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    // base: "",
    routes,
    scrollBehavior() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ x: 0, y: 0, behavior: "smooth" });
            }, 100);
        });
    },
});








export default router;
