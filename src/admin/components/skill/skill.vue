<template>
    <div class="skill-component" v-if="editMode == false">
        <div class="title">{{skill.title}}</div>
        <div class="flex">
            <div class="percent">{{skill.percent}}</div>
            <div class="buttons">
                <icon symbol="pencil" class="btn" @click="editMode = true" grayscale />
                <icon symbol="trash" class="btn" @click="$emit('remove', skill.id)" grayscale />
            </div>
        </div>
    </div>

    <div class="skill-component" v-else>
        <div class="title">
            <div class='validation'>{{ validation.firstError('currentSkill.title') }}</div>
            <app-input 
                v-model="currentSkill.title"
                noSidePaddings
            />
        </div>
        <div class="flex">
                 <app-input 
                    v-model="currentSkill.percent"
                    type="number"
                    min="0"
                    max="100"
                    maxlength="3"
                />
            </div>
            <div class="buttons">
                <!-- <icon symbol="tick" class="btn" @click="$emit('approve', currentSkill)" /> -->
                <icon symbol="tick" class="btn" @click="editMode = false" />
                <icon symbol="cross" class="btn" @click="editMode = false" />
            </div>
        </div>
    </div>
</template>
<script>
import input from "../input";
import icon from "../icon";
import { Validator } from 'simple-vue-validator';


export default {
    props: {
        skill: {
            type: Object,
            default: () => {},
            required: true
        }
    },
    mixins: [require('simple-vue-validator').mixin],
    validators: {
        'currentSkill.title'(value) {
            return Validator.value(value).required('Заполните поле');
        }
    },
    data() {
        return {
            editMode: false,
            currentSkill: {
                id: this.skill.id,
                title: this.skill.title,
                percent: this.skill.percent
            }
        }
    },
    components: {
        icon, 
        appInput: input
    }
}
</script>
<style lang="postcss" scoped src="./skill.pcss"></style>