import { defaultView } from "../editLine/editLine.stories";
import skillAddLine from "./skillAddLine.vue";

export default {
    "title": "skillAddLine",
    "components": { skillAddLine } 
}

export const defaultValue = () => ({
    components: { skillAddLine },
    
    template: `
        <skillAddLine />
    `,
});

defaultView.story = {
    name: "Добавить скилл"
}