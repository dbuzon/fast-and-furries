<template>
  <div class="home">
    <div class="container text-center home-content-title">
      <div class="row">
          <div id="product-title" class="col-md-12"></div>
      </div>
    </div>
    <div id="product-container" class="container text-center"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',  
}
</script>

<style scoped>
.home-content-title h2{
    font-size: 30px;
    font-weight:bold;
}

.home-content-title p{
    font-size: 16px;
}

.home-content-title{
    margin-bottom: 60px;
}

.product{
    text-decoration: none;
    margin-bottom: 60px;
    display: block;
    padding: 0 20px;
}

.product:hover img, .product:hover p{
    filter: brightness(80%);
    color: var(--rosa-escuro);
    
}

.product img{
    width: 100%;
    border-radius: 10px;
    box-shadow: 0px 0px 5px #ccc;
    transition: 0.3s ease;
}

.product p{
    display: block;
    margin-top: 20px;
    text-decoration: none;
    color: var(--preto);
    font-weight: bold;
    transition: 0.3s ease;
}

.product span{
    font-size: 1.25em;
    color: var(--rosa-escuro);
}
</style>