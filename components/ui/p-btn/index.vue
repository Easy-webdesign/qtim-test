<template>
    <!-- Кнопка пагинации -->
    <div :class="['v-qtim__btn-p', {'v-qtim__btn-p--active': active}, type && `v-qtim__btn-p--${type}`]">
        <svg v-if="type === 'next' || type === 'prev'"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9.5 7.5L14.5 12.5L9.5 17.5" stroke="#494949" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        {{num}}
    </div>
</template>

<script lang='ts' setup>
    const props = defineProps({
        num: Number,
        type: String,
        active: Boolean
    })
</script>
<style lang='scss' src='./index.scss'/>