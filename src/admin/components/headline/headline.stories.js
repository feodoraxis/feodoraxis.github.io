import { defaultView } from "../editLine/editLine.stories";
import headline from "./headline.vue";

export default {
    "title": "headline",
    "components": { headline } 
}

export const defaultValue = () => ({
    components: {headline},
    template: `
        <headline title="Панель администрирования">
            <h3>
                Владимир Астаханов
            </h3>
        </headline>
    `
});

defaultView.story = {
    name: "Шапка"
}