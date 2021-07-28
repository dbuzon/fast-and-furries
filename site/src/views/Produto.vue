<template>
  <div class="container">
    <div class="row justify-content-md-around">
      <div class="col-md-5 product">
        <img id="product-image" :src="img" alt="" />
      </div>
      <div class="col-md-5 product">
        <h2 id="product-name">{{ name }}</h2>
        <br />
        <p id="product-description">{{ desc }}</p>
        <br />
        <p>
          <span id="product-price">R$ {{ price }}</span>
        </p>
        <input @click="addToCart" type="submit" value="Adicionar ao carrinho" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Produto",
  data() {
    return {
      img: "",
      name: "",
      desc: "",
      price: "",
    };
  },
  created() {
    this.updateProduct();
  },
  methods: {
    addToCart() {
      alert("Produto adicionado ao carrinho");
    },

    async updateProduct() {
      let id = 0;
      if (window.location.search.length > 0) {
        id = parseInt(window.location.search.slice(4, 100));
      }

      let response = await fetch("http://localhost:3000/products/" + id);
      let product = await response.json();

      this.img = require("@/assets/images/" + product.img);
      this.name = product.title;
      this.desc = product.description;
      this.price = product.price.toFixed(2);
    },
  },
};
</script>

<style scoped>
.product {
  margin-bottom: 100px;
  margin-top: 20px;
  display: block;
  padding: 0 20px;
}

.product img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #c4c4c4;
}

.product p {
  display: block;
  margin-top: 20px;
  color: var(--preto);
}

.product span {
  font-size: 1.25em;
  font-weight: bold;
  color: var(--rosa-escuro);
}
</style>
