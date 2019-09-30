<template>
    <!-- scoped 테스트 -->

    <div class="TestHome">
        TestHome
        <strong class="title">
            title
        </strong>

        <!-- 하위 컴포넌트 테스트 -->
        <TestHeader />
    </div>
</template>

<script>
    import TestHeader from "../components/testScoped/TestHeader";
    export default {
        name: "TestHome",
        components: {TestHeader},
    }
</script>

<style lang="scss" scoped>
    .TestHome {
        color: red;

        .title {
            color: blue;
        }
    }

    // 하위 컴포넌트 테스트
    .TestHeader {
        color: red;

        // 스타일 적용안됨
        .title {
            color: blue;
        }
    }
</style>
