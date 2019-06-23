<template>
  <v-card
    class="mx-auto mt-5"
    dark
    color="#9CE38B"
    max-width="600"
  >
    <v-card-title>
      <p class="display-1 font-weight-bold text-capitalize">Birth Day week</p>
      <v-spacer />
      <p class="font-weight-light text-xs-right ml-5 font-italic">12 June, 2019</p>
    </v-card-title>

    <v-card-text class="headline font-weight-light text-capitalize">
      <v-img
        class="white--text my-5 blog"
        height="500px"
        src="https://s3.amazonaws.com/staticwebsiteaman/IMG_0697.jpg"
      />
      <p class="my-2 mt-5">
        So mitti it is officially your birthday week now.I am soo happy that this time i get to
        celebrate your birthday again with you. I just wanted to thank uncle and aunty for
        doing something great just nine months and 25 years from now. I turned out to be
        one of the best gift i ever got. Hahahaha..... <br>
        I just wanted to tell you how exicted i am for your birthday. <br>
        I am sorry, your gifts were not here on time. <br>
        But dont worry i will make it up for you. <br>
        I dont have anything special to write today so i decided to just tell you how
        important you are to me. <br>
        Love you. <br>
        Always be be my side no matter what.
      </p>
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

};

</script>

<style>
  .blog {
    transform: rotate(90deg);
  }
</style>
