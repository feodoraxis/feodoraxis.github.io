import tagsAdder from "./tagsAdder.vue";

export default {
    title: "tagsAdder",
    components: [tagsAdder]
}

export const defaultView = () => ({
    components: { tagsAdder },
    data() {
        return {
            tags: "One, two, three, deed"
        }
    },
    template: `
        <tags-adder v-model="tags"/>
    `
});

defaultView.story = {
    name: "Stadart Show",
    parameters: {
        backgropunds: [
            { name: 'grey', value: '#8395a7', default: true },
        ]
    }
}