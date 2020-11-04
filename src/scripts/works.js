import Vue from 'vue';

const thumbs = {
  props: ["works", "currentWork"],
  template: "#preview-thumbs"
};

const btns = {
  props: ["slide_left", "slide_right"],
  template: "#preview-btns",
};

const display = {
  props: ["currentWork", "works", "slide_left", "slide_right"],
  template: "#preview-display",
  components: {thumbs, btns},
};

const tags = {
  props: ["tags"],
  template: "#preview-tags"
};

const info = {
  props: ["currentWork"],
  template: "#preview-info",
  components: {tags},
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(',');
    }
  }
};

new Vue({
  el: "#preview-component",
  template: "#preview-container",
  components: {display, info},
  data() {
    return {
      works: [],
      currentIndex: 0,
      slide_left: '',
      slide_right: 'active',
    }
  },
  computed: {
    currentWork() {
      return this.works[ this.currentIndex ];
    }
  },
  watch: {
    currentIndex(value) {
      this.makeInfiniteButtons(value);
    }
  },
  methods: {
    makeInfiniteButtons(index) {
      const worksNumber = this.works.length - 1;

      if ( index >= worksNumber ) {
        this.slide_left = 'active';
        this.slide_right = '';
        return;
      } else if (index == 0 ) {
        this.slide_left = '';
        this.slide_right = 'active';
        return;
      } else {
        this.slide_left = 'active';
        this.slide_right = 'active';
      }
      
    },
    requireImagesToArray(data) {
      return data.map(item => {
        const requiredImage = require(`../images/${item.photo}`).default;
        item.photo = requiredImage;
        return item;
      })
    },
    slide(direction) {
      switch( direction ) {
        case "next": 
          this.currentIndex++;
          
          if ( this.currentIndex > (this.works.length - 1) )
            this.currentIndex = this.works.length - 1;

          break;
        case "prev": 
          this.currentIndex--;
          
          if ( this.currentIndex < 0 )
            this.currentIndex = 0; 
          
            break;
      }
    }
  },
  created() {
    const data = require("../data/works.json");
    this.works = this.requireImagesToArray(data);
  }
});