<template>
  <div class="my-5">
    <p class="heading text-capitalize">Time to your Birthday 🎉</p>
    <v-layout row wrap>
      <v-flex xs12 sm2>
        <p class="digit">{{ days | two_digits }}</p>
        <p class="text">Days</p>
      </v-flex>
      <v-flex xs12 sm1 hidden-sm-and-down>
        <p class="digit">:</p>
      </v-flex>
      <v-flex xs12 sm2>
        <p class="digit">{{ hours | two_digits }}</p>
        <p class="text">Hours</p>
      </v-flex>
      <v-flex xs12 sm1 hidden-sm-and-down>
        <p class="digit">:</p>
      </v-flex>
      <v-flex xs12 sm2>
        <p class="digit">{{ minutes | two_digits }}</p>
        <p class="text">Minutes</p>
      </v-flex>
      <v-flex xs12 sm1 hidden-sm-and-down>
        <p class="digit">:</p>
      </v-flex>
      <v-flex xs12 sm2>
        <p class="digit">{{ seconds | two_digits }}</p>
        <p class="text">Seconds</p>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import moment from 'moment';

export default {
  data() {
    return {
      now: moment()
    };
  },
  computed: {
    date() {
      return moment();
    },
    seconds() {
      return Math.trunc(moment.duration(moment('June 18, 2019').diff(this.now)).asSeconds() % 60);
    },
    minutes() {
      return Math.trunc(moment.duration(moment('June 18, 2019').diff(this.now)).asMinutes() % 60);
    },
    hours() {
      return Math.trunc(moment.duration(moment('June 18, 2019').diff(this.now)).asHours() % 24);
    },
    days() {
      return Math.trunc(moment.duration(moment('June 18, 2019').diff(this.now)).asDays());
    }
  },
  mounted() {
    window.setInterval(() => {
      this.now = moment();
    }, 1000);
  }
};
</script>
<style>
  @import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:100);
  .heading {
    color: #ffa500;
    font-size: 100px;
    font-weight: 100;
    font-family: 'Roboto', serif;
    margin: 10px;
    text-align: center;
  }
  .text {
    color: #ffa500;
    font-size: 50px;
    font-family: 'Roboto Condensed', serif;
    font-weight: 400;
    margin-top:10px;
    margin-bottom: 10px;
    text-align: center;
  }
  .digit {
    color: #ecf0f1;
    font-size: 190px;
    font-weight: 100;
    font-family: 'Roboto', serif;
    margin: 10px;
    text-align: center;
  }
</style>
