<template>
    <div class="v-qtim__pagination">
        <PBtn
            v-if="getPrev" 
            type="prev"
            @click="dec"
        />
        <PBtn 
            v-for="(item) in getPagination"
            :key="item"
            :num="item" 
            :active="item === getPage"
            @click="mainStore.setPageProperties(item)"
        />
        <PBtn
            v-if="getNext"  
            type="next"
            @click="inc"
        />
    </div>
</template>

<script lang='ts' setup>
import { storeToRefs } from "pinia";
import { type IPropertyPagination } from "~/dto/article.dto";

    const mainStore = useMain()

    const {
        getPageArticles,
        getPagination,
        getPage,
        getPrev,
        getNext
    } = storeToRefs(mainStore)

    const inc = () => mainStore.setPageProperties(getPage.value + 1)
    const dec = () => mainStore.setPageProperties(getPage.value - 1)

    mainStore.clearPagination()
    mainStore.setPaginationList()
    
</script>
<style lang='scss' src='./index.scss'/>