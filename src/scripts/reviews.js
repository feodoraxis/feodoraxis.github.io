import Vue from "vue";
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';

new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: {
    Swiper, SwiperSlide
  },
  data() {
    return {
      reviews: [],
      // sliderOptions: {}
      // slidesPerView
      sliderOptions: {
        slidesPerView: 2
      }
    }
  },
  // created() {
  //   // responsiveslider_w() {
  //     this.responsiveslider();
  //   // }
  // },
  methods: {
    requireImagesToArray(data) {
      return data.map((item) => {
        const requiredImage = require(`../images/${item.pic}`).default;
        item.pic = requiredImage;
        return item;
      })
    },
    slide(direction) {
      const slider = this.$refs["slider"].$swiper;

      switch(direction) {
        case "next":
          slider.slideNext();
          break;
        case "prev":
          slider.slidePrev();
          break;
      }
    },
    // responsiveslider() {
    //   // console.log(window.innerWidth);
    //   if ( window.innerWidth <= 480 )
    //     this.sliderOptions['slidesPerView'] = 1;
    //   else
    //     this.sliderOptions['slidesPerView'] = 2;
  
    // }
  },
  created() {
    const data = require("../data/reviews.json");
    this.reviews = this.requireImagesToArray(data);

    if ( window.innerWidth <= 480 )
      this.sliderOptions['slidesPerView'] = 1;
    else
      this.sliderOptions['slidesPerView'] = 2;
  },
  
});