<template>
    <div class="row">
        <div class="container">
            <form @submit.prevent="createTag">
                <input type="text" v-model="tag"  class="col s12">
                <button class="btn btn-success">create</button>
            </form>

        </div>
    </div>
</template>

<script>
    import  axios from "axios";

    export default {
        name: "CreateTag",
        data() {
            return {
                tag: ''
            }
        },
        methods: {
            createTag() {
                axios.post('/api/tags', {
                    tag: this.tag
                })
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {

                    })
            }
        },
        mounted() {
            this.createTag()
        }
    }
</script>

<style scoped>

</style>
