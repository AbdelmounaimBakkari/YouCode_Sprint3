<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/skills">Skills</router-link> |
    <router-link to="/projects">My Projects</router-link>
  </div> -->
  <router-view />
</template>

<style lang="scss">

@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
    url(./assets/fonts/Montserrat-Medium.ttf) format("truetype");
}


// $theme-colors:(
//   info : rgb(87, 0, 0)
// );

$info : rgb(87, 0, 0);

@import "./node_modules/bootstrap/scss/bootstrap";


*{
  font-family: 'Montserrat';
}

</style>
