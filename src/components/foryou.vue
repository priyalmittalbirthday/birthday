<template>
  <v-card
    class="mx-auto my-5"
    color="#FEFF02"
    max-width="600"
  >
    <v-card-title>
      <p class="display-1 font-weight-bold text-capitalize">I'll be there for you</p>
      <v-spacer />
      <p class="font-weight-light text-xs-right ml-5 font-italic">4 June, 2019</p>
    </v-card-title>

    <v-card-text class="headline font-weight-light text-capitalize">
      <v-img
        class="white--text my-5 blog"
        height="500px"
        src="https://s3.amazonaws.com/staticwebsiteaman/pic10.jpg"
      />
      <p class="my-2 mt-5">
        Yup, thats right. I have told you over and over again that how much you mean to me.
        You have no idea how much i want you to be successful in life.
        I swear i was more happy on the day when you got that coop, even more than
        the day when i got mine.
        and You know what, U DESERVED IT !!! <br>
        I have so much faith in your skills and calibre that you will land the job of your and
        everybody's dream.
        You just need to keep your head down and keep working in the right
        direction. One step at a time.
        I promise that I never intend to make you feel bad with my words.
        Its just my way of motivating you.
        You and me together, we can rock the fucking world.
        Never give up or doubt your calibre.
      </p>
      <p class="font-italic mt-4">
        PS: Goes without saying, But.I'ill be there for you......
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
