<template>
  <v-card
    class="mx-auto my-5"
    color="#ECF1F4"
    max-width="600"
  >
    <v-card-title>
      <p class="display-1 font-weight-bold text-capitalize text-sm-center">Skipping</p>
    </v-card-title>

    <v-card-text class="headline font-weight-light text-capitalize">
      <v-img
        class="white--text"
        height="500px"
        src="https://thumbs.gfycat.com/RingedHighlevelCollardlizard-size_restricted.gif"
      />
      <p class="my-2 mt-5">
        Since we skipped two days. Here is a skipping GIF for you.😂
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
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  }
};

</script>

<style>
  .blog {
    background-color: #ffa500!important;
  }
</style>
