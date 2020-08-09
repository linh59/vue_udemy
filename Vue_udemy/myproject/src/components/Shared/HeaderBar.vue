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
        <router-link to="/" active-class="active" exact>Home</router-link>
        <router-link to="/QuotePage"  active-class="active" >QuotePage</router-link>
        <router-link to="/FormPage/1"  active-class="active" >FormPage</router-link>
        <router-link to="/FormPage/2"  active-class="active" >FormPage 2</router-link>
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


