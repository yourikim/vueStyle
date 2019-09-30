<template>
    <div :class="$style.area">
        BasePanel

        <div :class="$style.box">
            box
        </div>
    </div>
</template>

<script>
    export default {
        name: "BasePanel"
    }
</script>

<style lang="scss" module>
    .area {
        border: 1px solid red;

        .box {
            background: #ccc;
        }
    }
</style>
