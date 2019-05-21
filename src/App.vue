<template>
  <div>
    <header>
      <div class="container">
        <div class="row">
          <div class="col col-sm-2">
            <img src="https://www.themoviedb.org/assets/2/v4/logos/powered-by-rectangle-green-dcada16968ed648d5eb3b36bbcfdd8cdf804f723dcca775c8f2bf4cea025aad6.svg" alt="">
          </div>
          <div class="col col-sm-7">
            <h1>My movies app</h1>
          </div>
          <div class="col col-sm-3">
            <div class="alert alert-default">
              <router-link to="/cart">
                <div>In Cart: {{ lengthInCart }}</div>
              </router-link>
            </div>
          </div>
        </div>
        <hr>
      </div>
    </header>
    <section>
      <div class="container">
        <div class="row">
          <div class="col col-sm-3 menu">
            <ul class="list-group">
              <router-link v-for="(item, index) in menuList"
                           :key="index"
                           :to="item.url"
                           tag="li"
                           class="list-group-item"
                           active-class="active">
                <a>{{ item.text }}</a>
              </router-link>
            </ul>
          </div>
          <div class="col col-sm-9">
            <transition name="slide" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    computed: {
      ...mapGetters('menu', {
        menuList: 'items'
      }),
      ...mapGetters('cart', {
        lengthInCart: 'cnt'
      })
    }
  }
</script>

<style>
  header {
    padding: 10px 0;
  }
  .menu{
    border-right: 1px solid #ddd;
  }

  .list-group-item{
    transition: background 0.3s, color 0.3s;
  }

  .list-group-item a{
    text-decoration: none;
  }

  .list-group-item.active a{
    color: inherit;
  }

  .slide-enter{

  }

  .slide-enter-active{
    animation: slideIn 0.5s;
  }

  .slide-enter-to{

  }

  .slide-leave{

  }

  .slide-leave-active{
    animation: slideOut 0.5s;
  }

  .slide-leave-to{

  }

  @keyframes slideIn{
    from{transform: rotateY(90deg);}
    to{transform: rotateY(0deg);}
  }

  @keyframes slideOut{
    from{transform: rotateY(0deg);}
    to{transform: rotateY(90deg);}
  }
</style>
