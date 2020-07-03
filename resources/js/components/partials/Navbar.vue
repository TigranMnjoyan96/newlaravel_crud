<template>

    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
        <div class="container">
            <router-link class="navbar-brand" to="/" exact>Navbar</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <router-link class="nav-item" tag="li" to="/" active-class="active" exact>
                        <a class="nav-link" href="#">Home</a>
                    </router-link>

                    <router-link class="nav-item" tag="li" to="/tag" active-class="active">
                        <a class="nav-link" href="#">Tag</a>
                    </router-link>


                    <router-link class="nav-item" tag="li" to="/tasks" active-class="active">
                        <a class="nav-link" href="#">Link</a>
                    </router-link>
                </ul>
            </div>
        </div>

    </nav>

</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
    .navbar-nav {
        font-size: 20px;
    }
</style>
