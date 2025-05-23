import { createRouter, createWebHistory } from "vue-router";
import Home from "../Views/Home.vue";
import About from "../Views/About.vue";
import Contact from "../Views/Contact.vue";
import Explorer from "../Views/Explorer.vue";
import Gallery from "../Views/Gallery.vue";
import Maps from "../Views/Maps.vue";
import Feed from "../Views/Feed.vue";

const routes = [
    {path: "/", component: Home },
    {path: "/about", component: About },
    {path: "/contact", component: Contact },
    {path: "/explorer", component: Explorer},
    {path: "/gallery", component: Gallery },
    {path: "/maps", component: Maps },
    {path: "/feed", component: Feed }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;