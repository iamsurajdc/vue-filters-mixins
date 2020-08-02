<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p> {{title }} </p>
                <hr>
                <input type="text" v-model="filterText">
                <ul v-for="(fruit, i) in filteredFruits"  :key="i + 1">
                    <li> {{fruit}} </li>
                </ul>
            </div>
        </div>
        <hr>
        <app-list></app-list>
    </div>
</template>

<script>
    import List from './List.vue';
    import { fruitMixin } from './fruitMixin';

    export default {
        data: function() {
            return {
                title: "Hello World!",
                fruits: ['M&G: Mango', 'Me: Suraj', 'Kivi', 'Banana', 'Apple'],
                filterText: ""
            }
        },
         mixins: [fruitMixin],
        components: {
            appList: List
        }        
    }
</script>

<style>

</style>
