<template>
    <nav class="navigation-component">
        <div class="container">
            <ul class="list">
                <li 
                    class="item"
                    v-for="link in links" 
                    :key="link.id">
                    <a 
                        :href="`\${link.alias}`" 
                        :class="['link', {active: link.is_active }]">{{link.title}}</a>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
const links = [
    {id: 0, title: "Обо мне", alias: "about", is_active: false},
    {id: 1, title: "Работы", alias: "works", is_active: true},
    {id: 2, title: "Отзывы", alias: "reviews", is_active: false},
];
export default {
    data() {
        return {
            links
        }
    }
}
</script>
<style lang="postcss" scoped src="./navigation.pcss"></style>