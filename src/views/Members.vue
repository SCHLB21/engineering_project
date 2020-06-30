<template>
    <div class="content">
        <h1 class="members__headline">Участники</h1>
        <div class="members__list">
            <section class="member" v-for="member in members">
                <h2 class="member__name">{{member.member_name}}</h2>
                <div class="member__statistic">
                    <span class="member__number-questions">100 вопросов</span>
                    <span class="member__number-answers">1 ответ</span>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { db } from '../firebase'
export default {
    data(){
      return{
        members: []
      }
    },
    firestore(){
      return {
        members: db.collection('members').orderBy('member_name')
      }
    },
    methods:{
        // addMember: function(){
        //     alert('Добавлен');
        //     const member_id = Math.random().toString(36).substr(2, 12);
        //     const member_name = 'Сунгур Гасанов';
        //     const member_password = 'qwerty';
        //     const member_status = 'editor';
        //     db.collection('members').add({member_id, member_name, member_password, member_status})
        // }
    }
}
</script>
