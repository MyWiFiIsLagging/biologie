<template>
    <Question v-if="!showAnswer" @nextQuestion="nextQuestion" :key="questionNumber" :question="quiz.questions[questionNumber]" :imageNumber="imageNumber"/>

    <Answer v-else @nextQuestion="nextQuestion" :key="-questionNumber" :question="quiz.questions[questionNumber]" :imageNumber="imageNumber"/>
    <div class="checkboxHolder">
        Neopakovat (postupně vybírá ze zamíchaného seznamu zástupců)
        <label for="checkbox" class="container">
            <input type="checkbox" id="checkbox" v-model="random" @change="shuffle()"/>
            <span class="checkmark"></span>
        </label>
    </div>
</template>

<style>
    .checkboxHolder {
        text-align: center;
        position: absolute;
        left: 50%;
        bottom: 40px;
        transform: translateX(-50%);
    }
    .container {
        display: block;
        position: relative;
        top: 5px;
        left: 50%;
        transform: translateX(-25px);
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 18px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Hide the browser's default checkbox */
    .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    /* Create a custom checkbox */
    .checkmark {
        border-radius: 5px;
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #ececec;
        border: 1px #3b3b3b solid;
    }

    /* On mouse-over, add a grey background color */
    .container:hover input ~ .checkmark {
        background-color: #dddddd;
    }

    /* When the checkbox is checked, add a blue background */
    .container input:checked ~ .checkmark {
        background-color: #202020;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the checkmark when checked */
    .container input:checked ~ .checkmark:after {
        display: block;
    }

    /* Style the checkmark/indicator */
    .container .checkmark:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
</style>

<script>
    import obojzivelnici from "../quizes/obojzivelnici.json";
    import ptaci from "../quizes/ptáci.json"
    import Question from "./Question.vue";
    import Answer from "./Answer.vue";

    export default {
        components: {
            Question,
            Answer
        },

        data() {
            return {
                questionNumber: 0,
                quiz: Object,
                answer: Object,
                imageNumber: Number,
                showAnswer: false,
                random: true,
            }
        },

        beforeMount() {
            this.quiz = ptaci

            this.imageNumber = Math.round((this.quiz.questions[this.questionNumber].images.length-1)*Math.random());
        },

        methods: {
            nextQuestion(image) {
                if (this.showAnswer) {
                    console.log(this.questionNumber)
                    if (this.random) {
                        this.questionNumber++;
                        if (this.questionNumber == this.quiz.questions.length) {
                            this.questionNumber = 0;
                        }
                    } else {
                        this.questionNumber = Math.round(Math.random()*(this.quiz.questions.length-1));
                    }
                    this.imageNumber = Math.round((this.quiz.questions[this.questionNumber].images.length-1)*Math.random());
                }

                this.showAnswer = !this.showAnswer
            },

            shuffle() {
                showAnswer = false;
                let currentIndex = this.quiz.questions.length;

                // While there remain elements to shuffle...
                while (currentIndex != 0) {

                    // Pick a remaining element...
                    let randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex--;

                    // And swap it with the current element.
                    [this.quiz.questions[currentIndex], this.quiz.questions[randomIndex]] = [
                    this.quiz.questions[randomIndex], this.quiz.questions[currentIndex]];
                }
            }
        }
    }
</script>