<template>

<div> 

<nav class="navbar navbar-expand-md">

    <div class="container-fluid">

       <div class="collapse navbar-collapse" id="navbarSupportedContent">

           <ul class="navbar-nav mx-auto mb-2 mb-lg-0">

            <li class="nav-item mx-3">

                <router-link to="/">Home</router-link>

            </li>

            <li class="nav-item mx-3">

                <router-link to="/about">About</router-link>
                
            </li>

            </ul>

        </div>

    </div>

</nav>

</div>

</template>

<script>

</script>

<style>

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>