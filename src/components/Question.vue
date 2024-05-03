<template>
    <div class="question">
        <img draggable="false" :src="image" class="q-image">
            <div class="q-buttonHolder">
                <button @click="answer">Řešení</button>
            </div>
    </div>
</template>

<script>
    import { ref } from "vue";

    export default {
        props: {
            question: Object,
            imageNumber: Number,
        },

        data() {
            return {
                image: String,
            };
        },

        beforeMount() {
            this.image = this.question.images[this.imageNumber]
        },

        methods: {
            answer() {
                this.$emit('nextQuestion', this.image)
            }    
        }
    }
</script>

<style>
    @media only screen and (max-width: 768px) {
        .question {
            width: calc(100% - 2rem);
        }
    }

    @media only screen and (min-width: 769px) {
        .question {
            width: 480px;
        }
    }

    .question {
        background-color: white;
        padding: 0.75rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 10px;
        border: #cacaca 1px solid;
    }

    .q-image {
        width: 100%;
        border-radius: 10px;
        max-height: 50vh;
        object-fit: contain;
    }

    .q-buttonHolder {
        margin-top: 0.25rem;
        & button {
            width: 100%;
            height: 3rem;
            outline: none;
            border: none;
            border-radius: 1rem;
            font-size: 1.75rem;
            padding: 0;
            font-weight: 600;
            color: white;
            background-color: #202020;
            cursor: pointer;
        }
    }
</style>