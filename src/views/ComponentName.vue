<template>
    <!-- module 테스트 -->

    <div :class="$style.area">
        area

        <div :class="$style.title">
            title
        </div>

        <BasePanel
                :class="$style['home_type']"
        />
    </div>
</template>

<script>
    import BasePanel from "../components/testModule/BasePanel";
    export default {
        name: "ComponentName",
        components: {BasePanel},
    };
</script>

<style lang="scss" module>
    .area {
        color: red;

        .title {
            color: blue;
        }
    }

    .home_type {
        background: blue;
    }
</style>
