<template>
    <div class="content">
        <div class="question__content" v-for="question in questions">
            <h1 class="question__content-headline">{{question.question_headline}}</h1>
            <p class="question__content-description">{{question.question_text}}</p>
            <div class="answers">
                <h2 class="answers__headline">{{answers.length}} ответов</h2>
                <p class="answer__description" v-for="answer in answers">{{ answer.answer_text}}</p>
            </div>
            <div class="add-answer">
                <h2 class="your">Ваш ответ</h2>
                <textarea name="add-answer" id="add-answer" cols="40" rows="10"></textarea>
                <button>Отправить ответ</button>    
            </div>
        </div>
    </div>
</template>
<script>
import { db } from '../firebase'
export default {
    data(){
      return{
        questions: [],
        answers: []
      }
    },
    firestore(){
      return {
        questions: db.collection('questions ').where("question_id", "==", this.$route.params.id),
        answers: db.collection('answers').where("question_id", "==", this.$route.params.id)
      }
    }
}
</script>