<template>
    <article class="ComponentName ComponentName--featured">
        <h1 class="ComponentName__title">
            <strong class="title">네이밍 규칙 제안 Title!!</strong>
        </h1>

        <div class="ComponentName__info">
            <h2 class="title">h2 Title!!</h2>
            <span class="txt">txt</span>
        </div>

        <div class="ComponentName__area">
            <h2 class="title">h2 Title!!</h2>
            <div class="area_test">
                <p class="txt">txt</p>
            </div>
        </div>

        <HomeSection />
    </article>
</template>

<script>
    import HomeSection from "../components/templates_section/HomeSection/HomeSection";
    export default {
        name: "ComponentName",
        components: {HomeSection}
    }
</script>

<style lang="scss" scoped>
    .ComponentName {
        border: 1px dashed #000;

       .title {
           border: 1px dashed #000;
       }

        /*!!이런식으로도 선언 가능*/
        &__title {
            color: #000;
        }

        &__info {}
        &__area {}

        /*!!이런식으로도 선언 가능*/
        &--featured {
            color: blue;

            .title {
                background: yellow;
            }
        }

        /*!!하위 컴포넌트의 root class명 접근 가능*/
        .HomeSection {
            background: yellow;
        }
    }

    /*!!이런식으로도 선언 가능*/
    .ComponentName__info {
        color: #000;

        .title {
            color: red;
        }

        .txt {
            color: #000;
        }
    }

    .ComponentName__area {
        color: blue;
    }

    .ComponentName--featured {

    }
</style>
