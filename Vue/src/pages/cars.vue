<template>
  <div>
    <h1>Cars page</h1>
    <ul>
      <router-link
        tag="li"
        v-for="car in 5"
        :to="'/car/' + car"
        :key="car"
      >
        <a>Car {{ car }}</a>
      </router-link>
    </ul>
    <!--    <div>-->
    <!--      <h1>C-class</h1>-->
    <!--      <img src="./../assets/1.jpeg" height="575" width="985" alt="">-->
    <!--      <router-link :to="'/car/'"></router-link>-->

    <!--    </div>-->
  </div>
</template>

<script>
  export default {}
</script>


