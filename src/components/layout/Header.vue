<template>
    <div>
        <nav class="site-header sticky-top py-1">
      <div class="container d-flex flex-column flex-md-row justify-content-between">
        <a class="py-2" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
        </a>
        <router-link class="py-2 d-none d-md-inline-block" to="/">Home</router-link>
        <router-link class="py-2 d-none d-md-inline-block" to="/list-product">Products</router-link>
        <router-link class="py-2 d-none d-md-inline-block" to="/about">About</router-link>
        <router-link class="py-2 d-none d-md-inline-block" to="/about">Enterprise</router-link>
        <router-link class="py-2 d-none d-md-inline-block" to="/about">Support</router-link>
        <router-link class="py-2 d-none d-md-inline-block" to="/about">Pricing</router-link>
        <router-link class="py-2 d-none d-md-inline-block" to="/cart">Cart</router-link>
      </div>
    </nav>
    </div>
    <div class="content">
        <router-view/>
    </div>
    
</template>
<script>
export default {
    
}
</script>
<style>

.site-header {
  background-color: rgba(0, 0, 0, .85);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
}
.site-header a {
  color: #999;
  transition: ease-in-out color .15s;
}
.site-header a:hover {
  color: #fff;
  text-decoration: none;
}
.content {
    padding: 16px;
    min-height: 400px;
}
</style>