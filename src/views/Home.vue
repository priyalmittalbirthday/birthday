<template>
  <div class="home">
    <days-left />
    <rules />
    <stay-connected />
  </div>
</template>

<script>
// @ is an alias to /src
import DaysLeft from '../components/DaysLeft';
import Rules from '../components/Rules';
import StayConnected from '../components/StayConnected';

export default {
  name: 'home',
  components: {
    DaysLeft,
    Rules,
    StayConnected
  }
};
</script>
