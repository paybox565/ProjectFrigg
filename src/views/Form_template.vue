<template>
    <div class="wrapper container">
        <div class="sample">
            <form @submit.prevent="formSubmited = true" v-if="!formSubmited">
                <div class="progress">
                    <div class="progress-bar" :style="progressWidth"></div>
                </div>
                <div>
                    <my-input v-for="(item, index) in  info"
                              :name="item.name"
                              :value="item.value"
                              :placeholder="item.placeholder"
                              :pattern="item.pattern"
                              :key="index"
                              @changedata="onChangeData(index, $event)">
                    </my-input>
                </div>
                <button class="btn btn-primary" :disabled="done < info.length">
                    Send Data
                </button>
            </form>
            <div v-else>
                <router-link :to="{name: 'products'}">Back to movies</router-link>
                <h1>Your request is currently being processed</h1>
                <table class="table table-bordered">
                    <tr v-for="(item, index) in  info">
                        <td>{{ item.name }}</td>
                        <td>{{ item.value }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import MyInput from '../../src/components/form/Input.vue';

    export default {
        data(){
            return {
                info: [
                    {
                        name: 'Original title',
                        value: '',
                        pattern: /^[a-zA-Z ]{2,30}$/
                    },
                    {
                        name: 'Release date',
                        value: '',
                        pattern: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
                        placeholder: '1978-12-20'
                    },
                    {
                        name: 'Contact phone',
                        value: '',
                        pattern: /^[0-9]{7,14}$/
                    },
                    {
                        name: 'Email',
                        value: '',
                        pattern: /.+/
                    }
                ],
                controls: [],
                done: 0,
                formSubmited: false
            }
        },
        created(){
            for(let i = 0; i < this.info.length; i++){
                this.controls.push(false);
            }
        },
        methods: {
            onChangeData(index, data){
                this.info[index].value = data.value;
                this.controls[index] = data.valid;

                let done = 0;

                for(let i = 0; i < this.controls.length; i++){
                    if(this.controls[i]){
                        done++;
                    }
                }

                this.done = done;
            }
        },
        computed: {
            progressWidth(){
                return {
                    width: (this.done / this.info.length * 100) + '%'
                }
            }
        },
        components: {
            MyInput
        }
    };
</script>

<style lang="scss">

    @import './src/styles/bootstrap-custom.scss';
    @import './src/assets/fonts/font-awesome.min.scss';
    @import './node_modules/bootstrap/scss/bootstrap.scss';

</style>
