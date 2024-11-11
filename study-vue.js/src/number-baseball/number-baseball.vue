<!-- 자바스크립트 
 컴포넌트 구현-->
<template>
    <div>
        <h1>{{ result }}</h1>
        <form v-on:submit="onsubmitForm">
            <input ref="answer" maxlength="4" v-model="value">
            <button>입력</button>
        </form>
        <div>시도 : {{}}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: '',
                result: ''
            }
        },
        methods: {
            onsubmitForm(e) {
                e.preventDefault();
                
            }
        },


    }
</script>

<style>

</style>