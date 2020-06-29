<template>
    <div class="content">
        <div class="marks__header">
            <h1 class="marks__headline">Метки</h1>
            <p class="marks__description">Метка — это ключевое слово, позволяющее отнести ваш вопрос в одну категорию с другими похожими вопросами. Благодаря подбору правильных меток другие участники смогут проще найти ваш вопрос и быстрее дать на него ответ.</p>
        </div>
        <div class="marks__links">
            <div class="mark" v-for="mark in marks">
                <div class="question__mark">{{mark.mark_name}}</div>
                <p class="mark__description">{{mark.mark_description}}</p>
                <small class="mark__number">{{mark.number_questions}}</small>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from '../firebase'
export default {
    data(){
      return{
        marks: []
      }
    },
    firestore(){
      return {
        marks: db.collection('marks').orderBy('mark_name')
      }
    }
}
</script>

