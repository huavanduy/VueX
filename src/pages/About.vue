<template>
    <div>
        About Pages
        {{name}}
        <button @click="updateName('1312')">Set Name</button>
    </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex' ;
export default {
    name: "about-page",
    computed: {
        ...mapGetters(['name'])
    },
    methods: {
        ...mapMutations(['setName']),
        ...mapActions(['updateName'])
    }
}
</script>
<style>
    
</style>