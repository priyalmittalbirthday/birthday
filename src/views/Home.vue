<template>
  <div class="home">
    <days-left />
    <rules />
    <blog />
    <domain />
    <though />
    <skip />
    <though2 />
    <stay-connected />
  </div>
</template>

<script>
import DaysLeft from '../components/DaysLeft';
import Rules from '../components/Rules';
import StayConnected from '../components/StayConnected';
import Blog from '../components/Blog';
import Though2 from '../components/Though2';
import Though from '../components/Though';
import Domain from '../components/Domain';
import Skip from '../components/Skip';

export default {
  name: 'home',
  components: {
    DaysLeft,
    Rules,
    StayConnected,
    Blog,
    Domain,
    Though,
    Though2,
    Skip
  }
};
</script>
