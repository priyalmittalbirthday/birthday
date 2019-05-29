<template>
  <v-card
    class="mx-auto my-5"
    color="#1A4B76"
    dark
    max-width="600"
  >
    <v-card-title>
      <p class="display-1 font-weight-bold text-capitalize">Halloween You.👻</p>
      <v-spacer />
      <p class="font-weight-light text-xs-right ml-5 font-italic">29 May, 2019</p>
    </v-card-title>

    <v-card-text class="headline font-weight-light text-capitalize">
      <v-img
        class="white--text rotate my-5"
        height="500px"
        src="https://s3.amazonaws.com/staticwebsiteaman/pic4.jpg"
      />
      <p class="my-2 mt-5">
        You are such a nice person to have backchodi with.
        I always wonder how my life would have been without you.
        Or Even better, How our lives would have turned out to be
        If we were in same college. I am sure we would be the best.
      </p>
      <p class="font-italic mt-4">PS: You are the CSS to my HTML.!!!</p>
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
</template>

<script>
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  }
};

</script>

<style>
  .rotate {
    transform: rotate(90deg);
  }
  .blog {
    background-color: #ffa500!important;
  }
</style>
