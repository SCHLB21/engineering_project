<template>
    <div class="content">
        <div class="add-question">
            <h1 class="add-question__headline">Задать вопрос</h1>
            <form>
                <div class="add_question__heading">
                    <label for="heading">Заголовок</label>
                    <input 
                    v-model="question_headline" 
                    type="text" 
                    id="heading" 
                    placeholder="Заголовок вопроса"
                    >
                </div>
                <div class="add_question__marks">
                    <label for="marks">Метки</label>
                    <input 
                    v-model="question_marks" 
                    type="text" 
                    placeholder="Например: python,js"
                    >
                </div>
                <textarea v-model="question_text" 
                name="add-question" 
                id="add-question" 
                cols="40" 
                rows="10" 
                placeholder="Введите вопрос"
                ></textarea><br>
                <button v-on:click="addQuestion();">Задать вопрос</button>
            </form>
        </div>
    </div>
</template>

<script>
import { db } from '../firebase'
export default {
    data(){
        return{
            question_headline: '',
            question_marks: '',
            question_text: ''
        }
    },
    methods: {
        addQuestion: function(){
            if(this.question_marks !='' && 
            this.question_marks &&
            this.question_text !='' && 
            this.question_text &&
            this.question_headline !='' && 
            this.question_headline){
            const member_id = sessionStorage['member_id'];
            const question_date = new Date();
            const question_headline = this.question_headline;
            const question_id = Math.random().toString(36).substr(2, 12);
            const question_marks = this.question_marks;
            const question_text = this.question_text;
            db.collection('questions ').add({member_id, question_date, question_headline, question_id, question_marks, question_text})
            this.answer_text = '';
            window.location.href = '#/';
            alert('Вопрос успешно задан')
        }else{
            alert('Заполните все поля')
            }
        }
    }
}
</script>

