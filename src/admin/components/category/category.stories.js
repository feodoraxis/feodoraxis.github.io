import { defaultView } from "../editLine/editLine.stories";
import category from "./category.vue";
import { action } from "@storybook/addon-actions";

const methods = {
    onRemove: action("onRemove"),
    onRemoveSkill: action("onRemoveSkill"),
    onEditSkill: action("onEditSkill")
};

export default {
    "title": "category",
    "components": { category } 
}

const skills = [
    {id: 0, title: "HTML", percent: 80},
    {id: 1, title: "CSS", percent: 50},
    {id: 2, title: "JS", percent: 70}
];

export const defaultValue = () => ({
    components: {category},
    data() {
        return {
            title: "Frontend",
        }
    },
    template: `
        <category
            :title="title"
            :skills="skills"
            @remove="onRemove
            @remove-skill="onRemoveSkill"
            @edit-skill="onEditSkill"
        />
    `,
    methods
});
defaultView.story = {
    name: "Категория"
}