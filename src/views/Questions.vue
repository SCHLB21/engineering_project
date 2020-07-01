<template>
    <div class="content">
        <div class="content__header">
            <div class="content__header-heading">
                <h1 class="heading__headline">Вопросы</h1>
                <!-- /.heading -->
                <button class="heading__add-question"><router-link to="/addquestion">Задать вопросы</router-link></button>
                <!-- /.add-question -->
            </div>
            <!-- /.content__header-heading -->
            <div class="content__header-instruments">
                <div class="instruments__marks">
                    <input type="checkbox" name="filter">
                    <label for="marks">метки</label>
                    <input type="text" id="marks" placeholder="Например: python,js">
                </div>
                <div class="instruments__sorts">
                    <button class="sorts-new__button">новые</button>
                    <button class="sorts-popular__button">популярные</button>
                </div>
            </div>
            <!-- /.content__header-instruments -->
        </div>
                <!-- /.content__header -->
        <div class="content__questions">
            <section class="question" v-for="question in questions">
                <span class="question__number-responses">{{getNumber(question.question_id, answers)}}<br>ответов</span>
                <div class="question__essence">
                    <h2 class="question__headline"><router-link :to="getLink(question.question_id)">{{ question.question_headline }}</router-link></h2>
                    <p class="question__description">{{ question.question_text }}</p>
                    <div class="question__bottom">
                        <div class="question__marks">
                            <div class="question__mark" v-for="mark in getMarks(question.question_marks)">{{mark}}</div>
                        </div>
                        <div class="question__information">
                            <small class="question__date">Задан {{takeTime(question.question_date)}}</small></br>
                            <span class="question__creator">{{takeName(question.member_id, members)}}</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { db } from '../firebase'
import moment from 'moment'
export default {
    data(){
      return{
        questions: [],
        members: [],
        answers: []
      }
    },
    firestore(){
      return {
        questions: db.collection('questions ').orderBy('member_id'),
        members: db.collection('members').orderBy('member_name'),
        answers: db.collection('answers').orderBy('member_id')
      }
    },
    methods: {
        takeTime: function(time){
            return moment(time.toDate()).format('DD.MM.YYYY HH:mm:ss')
        },
        takeName: function(member_id, members){
            for(let i=0; i < members.length;i++){
                if(this.members[i].member_id == member_id){
                    return members[i].member_name
                }
            }
        },
        getLink: function(link){
            return '/question/'+link
        },
        getNumber: function(id, answers){
            let numberQ = 0
            for(let i=0; i<answers.length;i++){
                if(answers[i].question_id==id){
                    numberQ++
                }
            }
            return numberQ
        },
        getMarks: function(marks){
            return marks.split(',')
        }
    }
}
</script>