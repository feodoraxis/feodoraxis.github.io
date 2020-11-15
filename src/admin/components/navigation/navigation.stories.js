import { defaultView } from "../editLine/editLine.stories";
import navigation from "./navigation.vue";

export default {
    "title": "navigation",
    "components": { navigation } 
}

export const defaultValue = () => ({
    components: {navigation},
    template: `
        <navigation />
    `
});

defaultView.story = {
    name: "Навигация"
}