import { defaultView } from "../editLine/editLine.stories";
import skill from "./skill.vue";
import {action} from "@storybook/addon-actions";

const methods = {
    onApprove: action("onApprove"),
    onRemove: action("onRemove"),
};

export default {
    "title": "skill",
    "components": { skill } 
}

export const defaultValue = () => ({
    components: { skill },
    data() {
        return {
            skill: {
                id: 0,
                title: "t",
                percent: 50,
            }
            
        }
    },
    template: `
        <skill @approve="onApprove" @remove="onRemove" :skill="skill" />
    `,
    methods
});

defaultView.story = {
    name: "Скилы"
}