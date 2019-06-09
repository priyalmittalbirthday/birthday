<template>
  <v-card
    class="mx-auto my-5"
    color="#B2E6FA"
    max-width="600"
  >
    <v-card-title>
      <p class="display-1 font-weight-bold text-capitalize">New Rules</p>
      <v-spacer />
      <p class="font-weight-light text-xs-right ml-5 font-italic">1 June, 2019</p>
    </v-card-title>
    <v-card-text class="headline font-weight-light text-capitalize">
      <p class="my-2 mt-5">
        It takes a lot of effort, skill and time to come up with a new idea
        everyday and the fact that other person does not acknowledge it makes it
        very weird.
        So we have a new rule which says If you do not comment on the last days post,
        then next day post will be delayed till the time you acknowledge
        the previous post.
      </p>
      <p class="font-italic mt-4">
        PS: Yes, I am angry.
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
    background-color: #ffa500!important;
  }
</style>
