<template>
    <!-- Кнопка пагинации -->
    <div :class="['v-qtim__btn-p', {'v-qtim__btn-p--active': active}]">
        {{num}}
    </div>
</template>

<script lang='ts' setup>
    const props = defineProps({
        num: Number,
        active: Boolean
    })
</script>
<style lang='scss' src='./index.scss'/>