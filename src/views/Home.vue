<template>
  <div class="home">
    <days-left />
    <rules />
    <blog />
    <stay-connected />
  </div>
</template>

<script>
import DaysLeft from '../components/DaysLeft';
import Rules from '../components/Rules';
import StayConnected from '../components/StayConnected';
import Blog from '../components/Blog';

export default {
  name: 'home',
  components: {
    DaysLeft,
    Rules,
    StayConnected,
    Blog
  }
};
</script>
