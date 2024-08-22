<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4" class="blue">
        <v-container>
          <v-expansion-panels>
            <v-expansion-panel v-for="product in products" :key="product.id">
              <v-card>
                <v-card-title>{{ product.name }}</v-card-title>
                <v-card-text>
                  {{ product.description }}<br />
                  Precio: {{ product.price }}
                </v-card-text>
              </v-card>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-container>
      </v-col>
      <v-col cols="8" class="green">
        <v-responsive>
          <v-container>
            <v-carousel>
              <v-carousel-item
                ><vue3VideoPlay v-bind="options"
              /></v-carousel-item>

              <v-carousel-item
               
              ><vue3VideoPlay v-bind="options2"
              /></v-carousel-item>

              <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                cover
              ></v-carousel-item>
            </v-carousel>
          </v-container>
        </v-responsive>
      </v-col>
    </v-row>
  </v-container>
</template>

  <script>
export default {
  data() {
    return {
      options2: {
        width: "1200px",
        height: "750px",
        color: "#409eff",
        title: "",
        src: "http://jorgeperalta-001-site6.itempurl.com/storage/nublado.mp4",
        muted: false,
        webFullScreen: false,
        speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"],
        autoPlay: true,
        loop: true,
        mirror: false,
        ligthOff: false,
        volume: 0.3,
        control: true,
        controlBtns: [
          "audioTrack",
          "quality",
          "speedRate",
          "volume",
          "setting",
          "pip",
          "pageFullScreen",
          "fullScreen",
        ],
      },
      options: {
        width: "1200px",
        height: "750px",
        color: "#409eff",
        title: "",
        src: "https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4",
        muted: false,
        webFullScreen: false,
        speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"],
        autoPlay: true,
        loop: true,
        mirror: false,
        ligthOff: false,
        volume: 0.3,
        control: true,
        controlBtns: [
          "audioTrack",
          "quality",
          "speedRate",
          "volume",
          "setting",
          "pip",
          "pageFullScreen",
          "fullScreen",
        ],
      },

      products: [
        { name: "Lámpara LED", description: "60W, luz cálida", price: "$1500" },
        // ... other products
      ],
    };
  },
};
</script>
  
  <style>
.blue {
  background-color: rgb(208, 233, 241);
  opacity: 0.8;
}
.green {
  background-color: rgb(7, 8, 7);
}
</style>