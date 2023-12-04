<template>
    <div class="v-qtim__article">
        <div class="v-qtim__article-box">
            <div class="v-qtim__article-img">
                <img :src="image" alt="">
                <img src="/article.png" alt="">
            </div>

            <p>{{preview}}</p>

            
        </div>

        <NuxtLink :to="`/articles/${id}`" target="_blank">Read more</NuxtLink>
    </div>
</template>

<script lang='ts' setup>
import { type IArticlesItem } from "~/dto/article.dto";

    defineProps({
        id: String,
        image: String,
        title: String,
        preview: String,
        description: String,
        createdAt: String,
    })
</script>
<style lang='scss' src='./index.scss'/>