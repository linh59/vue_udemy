<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
         <!-- <router-link to="/" tag="li" active-class="active"><a>Home</a></router-link> -->
        <router-link to="/home"  active-class="active" >Home</router-link>
        <router-link to="/porfolio"  active-class="active" >Porfolio</router-link>
        <router-link to="/stocks"  active-class="active" >Stocks</router-link>

      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'HeaderBar',

}
</script>


