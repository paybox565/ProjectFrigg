<template>
  <div class="wrapper">
    <div class="container">
      <div class="sample">
        <form action="" @submit.prevent="sendData">
          <div class="form-group">
            <label for="">First Name</label>
            <input type="text" class="form-control"
                   v-model="firstName">
          </div>
          <div class="form-group">
            <label for="">Last name</label>
            <input type="text" class="form-control"
                   v-model="lastName">
          </div>
          <div class="form-group">
            <label for="">Email</label>
            <input type="text" class="form-control"
                   v-model="email">
          </div>
          <div class="form-group">
            <label for="">Phone number</label>
            <input type="text" class="form-control"
                   v-model="phone">
          </div>
          <div class="form-group">
            <button type="button" class="btn btn-success" @click="addGuest">Add guest</button>
          </div>
          <div class="" v-show="guests">
              <div class="form-group"
                   v-for="(guest, index) in guests">
                <label @dblclick="deleteGuest(index)">Guest {{index + 1}} name</label>
                <input type="text" class="form-control"
                       v-model="guests[index].name">
              </div>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">Send data</button>
          </div>
        </form>
      </div>
      <div class="result">
        <table class="table table-bordered">
          <tr>
            <td>{{fullName}}</td>
          </tr>
          <tr>
            <td>{{email}}</td>
          </tr>
          <tr>
            <td>{{phone}}</td>
          </tr>
          <tr>
            <td>Guests</td>
          </tr>
          <tr v-for="guest in guests">
            <td>{{guest.name}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  data() {
    return {
      name: "HelloWorld",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      guests: [],
      showResult: false
    };
  },
  computed: {
    fullName(){
      return this.firstName + ' ' + this.lastName;
    }
  },
  methods: {
    sendData(){
      this.showResult = !this.showResult;
    },
    addGuest(){
      this.guests.push({'name':''});
    },
    deleteGuest(index){
      this.guests.splice(index, 1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import './src/styles/bootstrap-custom.scss';
@import './node_modules/bootstrap/scss/bootstrap.scss';

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

  .wrapper {
    text-align: left;
  }
</style>
