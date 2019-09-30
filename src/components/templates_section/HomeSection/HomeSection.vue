<template>
    <div class="HomeSection">
        <h1 class="HomeSection__title">HomeSection Title!!</h1>

        <ListHome />

        <ListLocal />

        <div class="HomeSection__notice">
            <ul class="notice_list">
                <li class="item">
                    정적내용 공지사항
                </li>
                <li class="item">
                    정적내용 공지사항
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import ListHome from "../../modules/ListHome/ListHome";
    import ListLocal from "../../modules/ListLocal/ListLocal";
    export default {
        name: "HomeSection",
        components: {ListLocal, ListHome}
    }
</script>

<style lang="scss" scoped>
    .HomeSection {
        overflow: hidden;
        border: 1px solid red;

        .title {
            color: #000;
        }

        .ListHome {
            float: left;
            border: 1px dashed ;
            background: pink;
        }

        .ListLocal {
            float: right;
            border: 1px dashed ;
            background: pink;
        }
    }

    .HomeSection__notice {
        background: #ccc;
    }
</style>
