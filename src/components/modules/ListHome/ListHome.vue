<template>
    <div class="ListHome">
        <h2 class="ListHome__title">ListHome</h2>

        <BaseButton />
        <BaseButtonGreen />

        <ul class="list">
            <li class="item">
                ListHome li
            </li>
        </ul>
    </div>
</template>

<script>
    import BaseButton from "../../atoms/ButtonBase/ButtonBase";
    import BaseButtonGreen from "../../atoms/ButtonBaseGreen/BaseButtonGreen";
    export default {
        name: "ListHome",
        components: {BaseButtonGreen, BaseButton}
    }
</script>

<style lang="scss" scoped>
    .ListHome {
        .ListHome__title {
            background: yellow;
        }
    }
</style>
