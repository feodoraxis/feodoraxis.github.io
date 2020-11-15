<template lang="pug">
  <div class="app-container">
    <headline title="Панель управления">
      <avatar src="https://picsum.photos/300/300" />
      <h3>Content</h3>
    </headline>
    <navigation />

    <div class="page-content">
      <div class="container">
        
        <div class="header">
          <div class="title">Блок "Обо мне"</div>
          <iconed-btn type="iconed"  v-if="emptyCatIsShown == false" @click="emptyCatIsShown = true" title="Добавить группу" />
        </div>

        <ul class="skills">
          <li class="item" v-if="emptyCatIsShown">
            <category @remove="emptyCatIsShown = false" empty />
          </li>
          <li class='item' v-for="category in categories" :key="category.id">
            <category :category="category.category" :skills="category.skills" />
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
  import avatar from "./components/avatar";
  import headline from "./components/headline/headline";
  import navigation from "./components/navigation/navigation";
  import button from "./components/button";
  import category from "./components/category";

  export default {
    components: {
      headline,
      navigation,
      iconedBtn: button,
      category,
      avatar
    },
    data() {
      return {
        categories: [],
        emptyCatIsShown: false,
        avatar_link: ""
      }
    },
    created() {
      this.categories = require("./data/categoryes.json");
      this.avatar_link = require("../images/avatar.png");
      console.log(avatar_link);
    }
  }
</script>

<style type="postcss">
@import "../styles/admin_main.pcss";
</style>

<style type="postcss" scoped src="./app.pcss"></style>