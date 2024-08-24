<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container  fluid>
    <v-row>
      <v-col cols="4" class="blue">
        <v-container>
          <v-card
            class="mx-auto"
            max-width="600"
            style="border: 50;"
          >
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
          </v-card>
        </v-container>
      </v-col>
      <v-col cols="8" class="green">
        <v-responsive>
          <v-container>
            <v-carousel cycle :interval="interval" hide-delimiters :show-arrows="false">
              <v-carousel-item
                ><vue3VideoPlay v-bind="options"
              /></v-carousel-item>

              <v-carousel-item
               
              ><vue3VideoPlay v-bind="options2"
              /></v-carousel-item>

              <v-carousel-item
                src="https://ibpensistema.com/storage/molino2.gif"
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
      interval: 8000,
      options2: {
        width: "1200px",
        height: "750px",
        color: "#409eff",
        title: "",
        src: "https://ibpensistema.com/storage/nublado.mp4",
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
  .v-container {
  border-radius: 10px; /* Ajusta el valor según el redondeo deseado */
}
.blue {
  background-color: rgb(166, 255, 0);
  border-radius: 10px;
 
}
.green {
  background-color: rgb(236, 240, 0);
  border-radius: 10px;
}
</style>