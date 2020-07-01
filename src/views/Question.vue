<template>
    <div class="content">
        <div class="question__content" v-for="question in questions">
            <h1 class="question__content-headline">{{question.question_headline}}</h1>
            <p class="question__content-description">{{question.question_text}}</p>
            <div class="answers">
                <h2 class="answers__headline">{{answers.length}} ответов</h2>
                <div v-for="answer in answers">
                  <p class="answer__description">{{ answer.answer_text}}</p>
                  <small class="answer__information">{{takeName(answer.member_id, members)}}</small>
                </div>
            </div>
            <div class="add-answer">
                <h2 class="your">Ваш ответ</h2>
                <textarea v-model="answer_text" name="add-answer" id="add-answer" cols="40" rows="10"></textarea><br>
                <button v-on:click="addAnswer();">Отправить ответ</button>    
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
        answers: [],
        members: [],
        answer_text: ''
      }
    },
    firestore(){
      return {
        questions: db.collection('questions ').where("question_id", "==", this.$route.params.id),
        members: db.collection('members').orderBy('member_name'),
        answers: db.collection('answers').where("question_id", "==", this.$route.params.id)
      }
    },
    methods: {
      addAnswer: function(){
        if(this.answer_text !=''&& this.answer_text){
          const answer_id = Math.random().toString(36).substr(2, 12);
          const answer_text =this.answer_text;
          const answer_date = new Date();
          const member_id =sessionStorage['member_id'];
          const question_id = this.$route.params.id;
          db.collection('answers').add({answer_date, answer_id, answer_text, member_id, question_id})
          this.answer_text = ''
        }else{
          alert('Введите текст!')
        }
      },
      takeName: function(member_id, members){
        let a = true;
        for(let i=0; i < members.length;i++){
          if(members[i].member_id == member_id){
            a = false
            return members[i].member_name
          }
        }
        if(a){
          return 'Аноним'
        }
      }
    }
}
</script>