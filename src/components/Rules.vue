<template>
  <div
    id="e3"
    style="max-width: 600px; margin: auto;"
    class="grey lighten-3 my-5"
  >
    <v-toolbar
      color="orange"
      dark
    >
      <v-toolbar-title>What the FUCK is it ?</v-toolbar-title>
      <v-spacer />
    </v-toolbar>

    <v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="cyan darken-2" class="white--text">
              <v-layout>
                <v-flex xs5>
                  <p class="text-sm-center align-center my-3 number">1️</p>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Counter</div>
                      <div class="text-capitalize">Real Time Counter to you birthday</div>
                      <div>(Yippee 😀)</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-card color="purple" class="white--text">
              <v-layout row>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Everyday Thoughts</div>
                      <div>
                        Since it is your 25th Birthday.
                      </div>
                      <div>I will give you one photo and some good thoughts everyday</div>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <p class="text-sm-center align-center my-3  number">2</p>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-card color="grey darken-2" class="white--text">
              <v-layout>
                <v-flex xs5>
                  <p class="text-sm-center align-center my-3  number">3</p>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">25 Things about you.</div>
                      <div>We can see 25 things about you type of blog everyday.</div>
                      <div>(This is a stretch, but I will try my best 🤴)</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
        <v-spacer />
      </v-container>
    </v-card>
  </div>
</template>

<style>
  .number {
    font-size: 70px;
  }
</style>
