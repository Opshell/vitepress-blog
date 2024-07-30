<script setup lang="ts">
    import { data } from "../../.vitepress/theme/posts.data.ts";
    // import data from "../../.vitepress/theme/test.ts";

    console.log(data);
</script>

<template>
    <article class="article-block">
        <div class="left-block">
            <header class="header-block">
                <img src="" alt="">
                <h1>
                    <span>劉 育瑋</span>
                    <span>Opshell</span>
                </h1>

                <h2>Front-End Developer</h2>
            </header>

            <hr>

            <div class="skills-block">
                <section class="contact-block">
                    <h2>Front-End Skills</h2>

                    <ul>
                        <li>
                            <icon></icon>
                            <span>Vue</span>
                        </li>
                    </ul>
                </section>

                <section class="contact-block">
                    <h2>Back-End Skills</h2>

                    <ul>
                        <li>
                            <icon></icon>
                            <span>php</span>
                        </li>
                    </ul>
                </section>

                <section class="contact-block">
                    <h2>Design Tools</h2>

                    <ul>
                        <li>
                            <icon></icon>
                            <span>Figma</span>
                        </li>
                    </ul>
                </section>
            </div>

            <hr>

            <section class="contact-block">
                <h2>Contact</h2>

                <ul>
                    <li>
                        <icon></icon>
                        <a href="tel:+886 938643321" target="_blank" rel="noopener noreferrer">+886 938643321</a>
                    </li>
                    <li>
                        <icon></icon>
                        <a href="mailto:phenomx9990@gmail.com" target="_blank" rel="noopener noreferrer">phenomx9990@gmail.com</a>
                    </li>
                    <li>
                        <icon></icon>
                        <a href="https://www.opshell.info" target="_blank" rel="noopener noreferrer">Opshell's Website</a>
                    </li>
                    <li>
                        <icon></icon>
                        <a href="https://github.com/Opshell" target="_blank" rel="noopener noreferrer">Opshell's Github</a>
                    </li>
                    <li>
                        <icon></icon>
                        <a href="https://maps.app.goo.gl/9q1aF5LEaEihmDh37" target="_blank" rel="noopener noreferrer">Tainan, Taiwan</a>
                    </li>
                </ul>
            </section>
        </div>

        <div class="right-block">
            <section>
                <h2>About Opshell</h2>

                <p>
                    喜歡交流、學習技術的我，
                    從高中開始對程式語言萌生興趣，獨立製作了一個RPG畢業專題，
                    在大學、實習時期確認了喜愛的程式類型，並完成網頁技術相關的國科會計畫。

                    在之後的工作中，一頭熱的投入了全端網頁技術的海洋，
                    熟練HTML、CSS、Javascript、Typescript、Vue等前端語言、框架，
                    使用PHP、SQL撰寫網站後端，串接各式API，用GCP配合LAMP架站。

                    對設計美感與使用體驗有要求的我，
                    持續的學習與成長，面對新的挑戰，一步步超越自己。
                    不喜歡停滯不前，在時代與技術的洪流中，
                    只有被沖走或逆流而上兩個選項。
                </p>
            </section>

            <hr>

            <section>
                <h2>Work Experience</h2>


            </section>
        </div>
    </article>
</template>

<style lang="scss">


    .article-block {
        display: flex;

        width: 100%;
        max-width: 1520px;

        .left-block {
            flex-shrink: 0;
            width: 300px;
        }
        .right-block {
            width: 100%;
        }

        h2 {
            color: var(--vp-c-text-1);
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 36px;
            line-height: 48px;
        }

        p {
            /* The word "résumé" co */
            color: var(--vp-c-text-1);
            font-family: 'Inter';
            font-style: normal;
            font-weight: 300;
            font-size: 20px;
            line-height: 32px;
        }
    }
</style>