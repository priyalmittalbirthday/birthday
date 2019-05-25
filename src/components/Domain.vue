<template>
  <div id="example-2" class="text-xs-center my-5">
    <v-btn large outline color="indigo" class="text-capitalize my-5" @click="show = !show">
      Un Wrap My gift for today
    </v-btn>
    <transition name="bounce">
      <div v-if="show">
        <v-card
          class="mx-auto"
          color="#26c6da"
          dark
          max-width="600"
        >
          <v-card-title>
            <p class="display-1 font-weight-bold text-capitalize">Congratulations</p>
            <v-spacer />
            <p class="font-weight-light text-xs-right ml-5 font-italic">24 May, 2019</p>
          </v-card-title>

          <v-card-text class="headline font-weight-light">
            <p class="text-capitalize my-2">You have become the proud owner of:</p>
            <p class="my-5 font-weight-bold display-1">www.priyalmittal.com</p>
            <v-btn large outline color="white" class="text-capitalize">
              <a href="https://www.priyalmittal.com" target="_blank">Lets checkout</a>
            </v-btn>
          </v-card-text>
          <v-card-actions>
            <v-list-tile class="grow">
              <v-list-tile-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  src="https://s3.amazonaws.com/staticwebsiteaman/pic1.jpg"
                />
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>Made with ❤️ by Aman Rayat</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-card-actions>
        </v-card>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>

<style scoped>
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  a {
    text-decoration: none;
    color: white;
  }
</style>
