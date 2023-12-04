<template>
    <div class="v-qtim__container">
        <h1>{{getArticle.title}}</h1>
        <div class="v-qtim__content">
            <div class="v-qtim__content-img">
                <img :src="getArticle.image" alt="">
            </div>
            <div class="v-qtim__text">
                <span>About</span>
                <p>{{getArticle.description}}</p>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { storeToRefs } from "pinia";

    const route = useRoute();
    const articles = useMain();

    articles.fetchArticleById(route.params.id as string);

    const { getArticle } = storeToRefs(articles);

</script>

<style lang="scss" scoped>
    h1 {
        font-size: 84px;
        font-weight: 400;
    }

    .v-qtim {
        &__container {
            margin: 80px auto;
        }
        
        &__content {
            width: 100%;
            margin-top: 73px;

            &-img {
                position: relative;
                width: 100%;
                height: 700px;
                overflow: hidden;

                img { 
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            
        }

        &__text {
            width: 55%;
            margin-top: 80px;

            span {
                font-size: 16px;
                font-weight: 400;
            }

            p {
                margin-top: 32px;
                font-size: 36px;
                font-weight: 400;
            }
        }
    }
</style>