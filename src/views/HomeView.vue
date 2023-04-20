<template>

<div class="container">
        
        <div class="row gap-3">
                
            <div class="card" v-for="news in articles" :key="news" >

                <img :src="news.urlToImage" class="card-img-top" alt="...">

                    <div class="row card-body">     

                        <h5 class="card-title">{{news.title}}</h5>

                        <p class="card-text">{{news.author}}</p>

                        <p class="card-text">{{news.description}}</p>

                </div>

            </div>

        </div>
    
    </div>

</template>

<script>

    import { computed } from "@vue/runtime-core";
    import { useStore } from "vuex";

    export default {
    setup(){
            const store = useStore();
            store.dispatch("displayArticles");
            const articles = computed(() => store.state.articles);

            return {
                articles,
            }
        }
    };

</script>

<style>

</style>
