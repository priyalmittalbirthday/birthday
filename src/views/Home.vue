<template>
  <div class="home">
    <days-left />
    <rules />
    <blog />
    <domain />
    <though />
    <skip />
    <though2 />
    <new-york />
    <blog2 />
    <new-rule />
    <crazy />
    <for-you />
    <food />
    <fights />
    <stay-connected />
  </div>
</template>

<script>
import DaysLeft from '../components/DaysLeft';
import Rules from '../components/Rules';
import StayConnected from '../components/StayConnected';
import Blog from '../components/Blog';
import Blog2 from '../components/Blog2';
import Though2 from '../components/Though2';
import Though from '../components/Though';
import Domain from '../components/Domain';
import Skip from '../components/Skip';
import NewYork from '../components/NewYork';
import NewRule from '../components/NewRule';
import Crazy from '../components/Crazy';
import ForYou from '../components/foryou';
import Food from '../components/Food';
import Fights from '../components/Fights';

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
    Fights,
    Skip,
    ForYou,
    NewYork,
    Blog2,
    Food,
    NewRule,
    Crazy
  }
};
</script>
