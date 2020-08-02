<template>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <!-- <h1>Filters & Mixins</h1>
                <p> {{title | toUppercase }} </p>
                <hr> -->
                <input type="text" v-model="filterText">
                <ul v-for="(fruit, i) in filteredFruits"  :key="i + 1">
                    <li> {{fruit}} </li>
                </ul>
            </div>
</template>

<script>
    import { fruitMixin } from './fruitMixin';
    export default {
         mixins: [fruitMixin],
         created() {
            console.log("In app created");
        }
    }
</script>   

<style>

</style>