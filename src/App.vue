<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="stripe">
    <div style="background-color: lightblue; top: 0; height: 3rem;"></div>
    <div style="background-color: pink; top: 0.6rem; height: 1.8rem;"></div>
    <div style="background-color: white; top: 1.2rem; height: 0.6rem;"></div>
  </div>

  <div style="font-size: 0.85rem;" class="footer">
    <p>Made with 🤍 by Johana Menšíková 🏳️‍⚧️ <br>
        Designed by Kryštof Vyleťal</p>
  </div>

  <title>Poznávačka</title>
  
  <Quiz />

  <!--div style="position: absolute; bottom: 0; font-size: 0.75rem;" class="footer">
    <p style="padding: 0 2rem;">Zdarvím přátelé, mělo by to být opraveno, pokud bude něco špatně, napište mi. Možná z tohodle udělám reálnou web-aplikaci, automatická generace testů poznávaček ze seznamu záspuců zní kůl. 🤍</p>
  </div-->
</template>

<script>
  import Quiz from './components/Quiz.vue';

  function getRemainingTime(target) {
    var difference = target - Date.now();
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Format the result
    var formattedResult = days + ":" +
      (hours < 10 ? "0" + hours : hours) + ":" +
      (minutes < 10 ? "0" + minutes : minutes) + ":" +
      (seconds < 10 ? "0" + seconds : seconds);

    return formattedResult;
  }

  export default {
    data() {
      return {
        countdown: String,
        timeTarget: new Date('March 22, 2024 10:40:00 GMT+01:00')
      }
    },

    mounted() {
      this.countdown = getRemainingTime(this.timeTarget);
      setInterval(() => {
        this.countdown = getRemainingTime(this.timeTarget);
      }, 1000)
    },

    components: {
      Quiz
    }
  }
</script>

<style>
  * {
    font-family: Arial, Helvetica, sans-serif
  }

  body {
    margin: 0;
    background-color: #f3f3f3;
    background-image: url(./assets/franta.png);
    background-repeat: repeat;
    background-size: 20vh;
  }

  .stripe {
    z-index: -10;
    position: absolute;
    top: 1rem;
    left: 1rem;
    transform: rotate(-45deg);

    & * {
      width: 20rem;
      position: absolute;
      left: 0;
      transform: translateX(-50%);
    }
  }

  .countdown {
    width: 100%;
    height: 5rem;
    background-color: #202020;
    position: absolute;
    bottom: 1rem;

    & h2 {
      text-align: center;
      padding: 0;
      margin-top: 0.5rem;
      font-size: 1rem;
      color: rgb(255, 255, 255);
    }

    & h1 {
      text-align: center;
      padding: 0;
      margin-top: 0.25rem;
      font-size: 2.25rem;
      color: rgb(255, 255, 255);
    }
  }

  .footer {
    width: 100%;
    text-align: center;
    overflow: hidden;

      & p {
        margin-bottom: 0.5rem;
        overflow: hidden;
      }
  }
</style>