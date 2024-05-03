<template>
    <div class="question">
        <img draggable="false" :src="question.images[imageNumber]" class="q-image">
            
        <h2 style="padding: 0; margin-top: 0.25rem;" class="q-answer">{{ question.info.Název }}</h2>

        <div class="q-buttonHolder" style="margin-top: 0.5rem;">
            <button @click="$emit('nextQuestion')">Pokračovat</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            question: Object,
            imageNumber: Number,
        },
    }
</script>

<style>
    .q-answer {
        text-align: center;
    }

    h2 {
        padding: 1rem 0 0 0;
        margin: 0;
    }
</style>