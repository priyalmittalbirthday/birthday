<template>
  <v-card
    class="mx-auto my-5"
    color="#F78670"
    dark
    max-width="600"
  >
    <v-card-title>
      <p class="display-1 font-weight-bold text-capitalize">The NYC Charm</p>
      <v-spacer />
      <p class="font-weight-light text-xs-right ml-5 font-italic">30 May, 2019</p>
    </v-card-title>

    <v-card-text class="headline font-weight-light text-capitalize">
      <v-img
        class="white--text my-5"
        height="500px"
        src="https://s3.amazonaws.com/staticwebsiteaman/pic5.JPG"
      />
      <p class="my-2 mt-5">
        You know what they say about NYC. The city of dreams. But honestly,
        Maybe 20 Years down the line I will only remember the city by the awesome
        time that we guys have spent there.
        I cannot imagine a better way of exploring the city than to rome around
        cluelessly with you.
        This one is to the late night Time square walk, Abercrombie store trips.
        53rd St, Herald square, Shake shack, Washington square park, Sport desert bar,
        Artichoke pizza, Indikitch, Eatly....
        And the list is never ending.
      </p>
      <p class="font-italic mt-4">
        PS: We should explore another city now. This is
        pretty much done.
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
