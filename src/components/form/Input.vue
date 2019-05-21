<template>
    <div class="form-group">
        <label>{{ name }}</label>
        <span class="fa ml-1" :class="validClass" v-if="activated">
            {{validText}}
        </span>
        <input type="text"
               class="form-control"
               :value="value"
               :placeholder="placeholder"
               @input="onInput"
        >
    </div>
</template>

<script>
    export default {
        props: ['name', 'value', 'pattern', 'placeholder'],
        data(){
            return {
                activated: this.value !== ''
            }
        },
        computed: {
            validClass(){
                return this.pattern.test(this.value) ?
                    'text-success' :
                    'text-danger';
            },
            validText() {
                return this.validClass === 'text-success' ? 'correct' : 'incorrect';
            }
        },
        methods: {
            onInput(e){
                this.activated = true;

                this.$emit('changedata', {
                    value: e.target.value,
                    valid: this.pattern.test(e.target.value)
                });
            }
        }
    }
</script>