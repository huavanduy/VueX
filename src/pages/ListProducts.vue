<template>
  <div>
    <div
      class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"
    >
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 font-weight-normal">Punny headline</h1>
        <p class="lead font-weight-normal">
          And an even wittier subheading to boot. Jumpstart your marketing
          efforts with this example based on Apple's marketing pages.
        </p>
        <a class="btn btn-outline-secondary" href="#">Coming soon</a>
      </div>
      <div class="product-device box-shadow d-none d-md-block"></div>
      <div
        class="product-device product-device-2 box-shadow d-none d-md-block"
      ></div>
    </div>

    <div
      class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3"
      v-for="(product, index) in products"
      :key="index"
    >
      <div
        class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"
      >
        <div class="my-3 p-3">
          <h2 class="display-5">{{ product.name }}</h2>
          <p class="lead">{{ product.price }}</p>
          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="handleClickDetail(product.id)"
          >
            View
          </button>
        </div>
        <div
          class="bg-dark box-shadow mx-auto"
          style="width: 40%; height: 360px; border-radius: 21px 21px 0 0"
        >
          <img v-bind:src="product.url[0].url" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import router from "../routers/index.js";
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "list-products",
  data() {
    return {

    };
  },
  mounted: function () {
    this.$store.dispatch('getProducts');
  },
  computed: {
    ...mapGetters(['products']),
    ...mapActions(['getProducts'])
  },
  methods: {
    handleClickDetail: function (id) {
      router.push(`/detail-product/${id}`);
    },
  },
 
};
</script>
<style>
.product-device {
  position: absolute;
  right: 10%;
  bottom: -30%;
  width: 300px;
  height: 540px;
  background-color: #333;
  border-radius: 21px;
  -webkit-transform: rotate(30deg);
  transform: rotate(30deg);
}

.product-device::before {
  position: absolute;
  top: 10%;
  right: 10px;
  bottom: 10%;
  left: 10px;
  content: "";
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
}

.product-device-2 {
  top: -25%;
  right: auto;
  bottom: 0;
  left: 5%;
  background-color: #e5e5e5;
}
</style>
