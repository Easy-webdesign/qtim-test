<template>
    <div class="v-qtim__articles">
        <div class="v-qtim__articles-box">
            <Article
                v-for="article in getPageArticles"
                :key="article.id"
                v-bind="article"
            />
        </div>

        <Pagination/>
    </div>
</template>

<script lang='ts' setup>
import { storeToRefs } from "pinia";
import { type IArticlesItem } from "~/dto/article.dto";

    const store = useMain()

    store.fetchArticles();

    const { getArticles, getPageArticles } = storeToRefs(store);


    store.setPageArticles(1)
</script>

<style lang='scss' src='./index.scss'/>