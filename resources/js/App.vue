<template>
    <div>
        <navbar />

            <router-view />
    </div>
</template>

<script>
    import Navbar from "./components/partials/Navbar";

    export default {
        name: "App",
        components: {
            Navbar
        }
    }
</script>

<style scoped>

    @import "~materialize-css/dist/css/materialize.min.css";


</style>
