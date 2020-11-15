<template>

    <div 
        :class="['skill-add-line', {blocked: blocked} ]"
        >
        <app-input 
            placeholder="Новый навык"
            noSidePaddings
        />
        <div class="percent">
            <app-input 
                noSidePaddings
            />
        </div>
        <app-button type="round" title="" />
    </div>

</template>
<script>
import input from "../input";
import button from "../button";

export default {
    props: {
        blocked: Boolean
    },
    components: {
        appInput: input,
        appButton: button
    }
}
</script>
<style lang="postcss" scoped src="./skillAddLine.pcss"></style>