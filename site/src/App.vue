<template>
    <div class="content">
        <HeaderFF v-show="SelectNavbar"></HeaderFF>
        <nav-bar v-show="!SelectNavbar"></nav-bar>              
        <router-view />
    </div> 
    <FooterFF v-show="!SelectNavbar"></FooterFF>
</template>

<script>
import FooterFF from "./components/FooterFF.vue";
import NavBar from "./components/NavBar.vue";
import HeaderFF from "./components/HeaderFF.vue";

export default {
    components: {
        FooterFF,
        NavBar,
        HeaderFF,
    },
    setup() {},
    
    computed: {
        SelectNavbar() {
            return (this.$route.name == 'Login' || this.$route.name == 'Cadastro');
        }
    }
};
</script>

<style>
@import './assets/styles/reset.css';
@import url(https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css);
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);
@import './assets/styles/default.css';
@import './assets/styles/mobile.css';

#app {
    font-family: 'RobotoS';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;  
}

.content {
    flex: 1 0 auto;
}

</style>
