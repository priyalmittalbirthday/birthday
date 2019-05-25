<template>
  <div class="home">
    <days-left />
    <rules />
    <blog />
    <domain />
    <stay-connected />
  </div>
</template>

<script>
import DaysLeft from '../components/DaysLeft';
import Rules from '../components/Rules';
import StayConnected from '../components/StayConnected';
import Blog from '../components/Blog';
import Domain from '../components/Domain';

export default {
  name: 'home',
  components: {
    DaysLeft,
    Rules,
    StayConnected,
    Blog,
    Domain
  }
};
</script>
