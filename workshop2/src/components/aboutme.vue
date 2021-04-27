<template>
<div  class="container border-0 text-dark">

  <!-- Title -->
  <div class="row justify-content-center">
    <div class="col-8">
      <div class="text-center">
        <div class="card-body">
          <h3 class="card-title">ABOUT ME</h3>
          <p class="card-text">HOPE TO KNOW YOU AFTER</p>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="card border-0">
      <div class="row">
        <img class="photo" src="../assets/avatar.png" alt="photo">
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="card border-0">
            <div class="card-body paragraphe">
              <h5 class="card-title">WHO AM I ?</h5>
              <p class="card-text">
                I'm a Full-Stack Developer student. Actually, I have a Licence BAC+3 in IT and I just started a computer science Master specialized in artificial intelligence and collaborative systems. 
                IT is not only my professional background. It is also and above all a passion that has grown since I was 16 years old.
                I always liked to get into projects using the skills that I did not have or were even spare pure programming like web design, 3D modeling ect... 
                This allowed me to learn to be autonomous and to learn on my own, certainly not without difficulties far from it, but I always managed to overcome the obstacles and solve the problems I encountered ! 
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 text-dark paragraphe">
          <div class="card border-0 text-primary" >
              <ul class="list-group list-group-flush border-0 text-dark">
                <li class="list-group-item border-0"> <h5 class="card-title">Abdelmouanim Bakkari</h5></li>
                <li class="list-group-item border-0">Email: a.bakkari@student.youcode.ma</li>
                <li class="list-group-item border-0">Phone: 0603980747</li>
                <li class="list-group-item border-0">City: Youssoufia</li>
                <li class="list-group-item border-0">Languages : Arabic, French, English</li>
                <li class="list-group-item border-0 w-25 d-flex justify-content-evenly">
                  <fa :icon="['fab', 'facebook-f']"></fa>
                  <fa :icon="['fab', 'linkedin']"></fa>
                  <fa :icon="['fab', 'twitter']"></fa>
                  <fa :icon="['fab', 'github']"></fa>
                </li>
              </ul>
          </div>
        </div>
      </div>
  </div>
</div>

</template>

<script>
export default {
  data:function(){
    return {
      display: true
    }
  }
}
</script>

<style lang="scss" scoped>
.title{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    }
.photo {
    display: block;
    margin: 1rem auto;
    border-radius: 50%;
    width: 50Vmin;
    
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
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.paragraphe{
  text-align: left;
}

</style>