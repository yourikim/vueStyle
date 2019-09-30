//////////1) 전역
// import Vue from "vue";
// import Router from "vue-router";
// import Home from "./views/home"; // es구문 import
// import End from "./views/end"; // es구문 import
//
// Vue.use(Router);
//
// const router = new Router({
//     mode: "history",
//     routes: [
//         {
//             path: "/",
//             name: "Root",
//             component: Home, // !! import 해둔 컴포넌트 적용
//         },
//         {
//             path: "/end",
//             name: "end",
//             component: End, // !! import 해둔 컴포넌트 적용
//         }
//     ],
// });
//
// export default router;


////////// 2) 지역
// import Vue from "vue";
// import Router from "vue-router";
//
// Vue.use(Router);
//
// const router = new Router({
//     mode: "history",
//     routes: [
//         {
//             path: "/",
//             name: "home",
//             component: () => import("./views/home.vue"), // !! dynamic import
//         },
//         {
//             path: "/end",
//             name: "end",
//             component: () => import("./views/end.vue"), // !! dynamic import
//         }
//     ],
// });
//
// export default router;

////////// 3) 혼합
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home"; // !! es구문 import (전역 적용됨)

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
        //router 테스트
        {
            path: "/",
            name: "Root",
            component: Home, // !! es구문 import
        },
        //router 테스트
        {
            path: "/end",
            name: "end",
            component: () => import("./views/end.vue"), // !! dynamic import
        },
        //scoped 테스트
        {
            path: "/scoped",
            name: "scoped",
            component: () => import("./views/TestHome.vue"), // !! dynamic import
        },
        //module 테스트
        {
            path: "/module",
            name: "module",
            component: () => import("./views/ComponentName.vue"), // !! dynamic import
        },
        //convention 테스트
        {
            path: "/new",
            name: "new",
            component: () => import("./views_new/ComponentName.vue"), // !! dynamic import
        }
    ],
});

export default router;
