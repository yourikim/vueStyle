<template>
    <div class="ListLocal">
        <h2 class="ListLocal_title">ListLocal</h2>

        <BaseButton />
        <BaseButtonGreen />

        <ul class="ListLocal_list">
            <li>
                ListLocal li
            </li>
        </ul>
    </div>
</template>

<script>
    import BaseButton from "../../atoms/ButtonBase/ButtonBase";
    import BaseButtonGreen from "../../atoms/ButtonBaseGreen/BaseButtonGreen";
    export default {
        name: "ListLocal",
        components: {BaseButtonGreen, BaseButton}
    }
</script>

<style lang="scss" scoped>
    .ListLocal {
        .ListLocal_title {
            background: aquamarine;
        }
    }
</style>
