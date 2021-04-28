<template>
<div class="container text-white border-0 bg-dark" style="max-width:100vw">
  <div class="title mb-5">
    <h2>Experiences</h2> 
    <h5> Academic and Professional </h5>
    <div class="line"></div>
  </div>

  <div class="container d-flex flex-row justify-content-around">
    <div class="text-end" style="width: 35vw;">
      <p class="fs-4 fw-bold mb-4">EDUCATION</p>
      <div class="lh-1 mb-5">
        <p class="fs-6">From September 2020</p>
        <p class="fs-5 fw-bold">Computer Science Master at USMB</p>
        <p class="fs-6">Specialized in artificial intelligence and collaborative systems</p>
      </div>
      <div class="lh-1 mb-5">
        <p class="fs-6">2017 - 2020</p>
        <p class="fs-5 fw-bold">IT License</p>
        <p class="fs-6">University Savoie Mont-Blanc, France</p>
      </div>
      <div class="lh-1 mb-5">
        <p class="fs-6">2013 - 2017</p>
        <p class="fs-5 fw-bold">Scientific Baccalaureate</p>
        <p class="fs-6">Lycée de l'Albanais at Rumilly, France</p>
      </div>
    </div>
    <div class="vertecal"></div>
    <div class="text-start" style="width: 35vw;">
      <p class="fs-4 fw-bold">PROFESSIONAL</p>
      <div class="lh-1 mb-5">
        <p class="fs-6">01.2020 - 05.2020</p>
        <p class="fs-5 fw-bold">Urbalog LAET Project</p>
        <p class="fs-6">Digitizing the Urbalog board game on Android with the Nearby Connection API</p>
      </div>
      <div class="lh-1 mb-5">
        <p class="fs-6">07.2019</p>
        <p class="fs-5 fw-bold">Pfeiffer Vacuum SAS, Annecy</p>
        <p class="fs-6">Interim IT mission: implementation of a new Qlickview access management program + Laravel development</p>
      </div>
      <div class="lh-1 mb-5">
        <p class="fs-6">07.2018</p>
        <p class="fs-5 fw-bold">Pfeiffer Vacuum SAS, Annecy</p>
        <p class="fs-6">Interim IT mission: Management of SAP tables and inventory of sub-programs</p>
      </div>
    </div>
  </div>

</div>
</template>


<script>
export default {

}
</script>

<style lang="scss" scoped>

.title{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    }


h2 {
    font-size: 3rem;
}
.line{
  width: 20%;
  height: 5px;
  margin: auto;
  border-bottom: 2px solid;
}

.vertecal{
  border-left: 2px solid;
  // border-right: 1px solid;
}

</style>

