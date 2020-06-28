<template>
    <div class="content">
        <div class="content__header">
            <div class="content__header-heading">
                <h1 class="heading__headline">Вопросы</h1>
                <!-- /.heading -->
                <button class="heading__add-question">Задать вопросы</button>
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
            <section class="question">
                <span class="question__number-responses">0</br>ответов</span>
                <div class="question__essence">
                    <h2 class="question__headline">Заголовок</h2>
                    <p class="question__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, placeat.</p>
                    <div class="question__bottom">
                        <div class="question__marks">
                            <div class="question__mark">python</div>
                            <div class="question__mark">js</div>
                        </div>
                        <div class="question__information">
                            <small class="question__date">Задан 01.01.1999</small></br>
                            <span class="question__creator">Дима Комков</span>
                        </div>
                    </div>
                </div>
            </section>
            <section class="question">
                <span class="question__number-responses">0</br>ответов</span>
                <div class="question__essence">
                    <h2 class="question__headline">Заголовок</h2>
                    <p class="question__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, placeat.</p>
                    <div class="question__bottom">
                        <div class="question__marks">
                            <div class="question__mark">python</div>
                            <div class="question__mark">js</div>
                        </div>
                        <div class="question__information">
                            <small class="question__date">Задан 01.01.1999</small></br>
                            <span class="question__creator">Дима Комков</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

