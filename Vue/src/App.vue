<template>
  <div class="container">

    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
      <a class="navbar-brand" href="#">
        <img src="./assets/mers.png" height="40" width="150"/>
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto">
          <router-link tag="li" class="nav-item" exact to="/" active-class="active">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link tag="li" class="nav-item" exact to="/cars" active-class="active">
            <a class="nav-link">Cars</a>
          </router-link>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-dark mr-sm-2" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>


<script>
  export default {}
</script>
<style>

</style>
