<template>
  <footer class="footer footer-basic bg-light shadow-sm d-flex justify-content-center" type="dark" variant="dark">
    <div class="social my-3">
      <a href="https://www.instagram.com/hama99o/" class="btn-light btn-outline-info mx-2" target="_blank">
        <i class="icon ion-social-instagram"></i>
      </a>
      <a href="https://github.com/Hama99o" class="btn-light btn-outline-info mx-2" target="_blank">
        <i class="fa fa-github" aria-hidden="true"></i>
      </a>
      <a href="https://twitter.com/hama99o1" class="btn-light btn-outline-info mx-2" target="_blank">
        <i class="icon ion-social-twitter"></i>
      </a>
      <a href="https://www.facebook.com/Hmmshl/" class="btn-light btn-outline-info mx-2" target="_blank">
        <i class="icon ion-social-facebook"></i>
      </a>
      <a href="https://www.linkedin.com/in/hammayoun-safi-2916581bb/" class="btn-light btn-outline-info mx-2" target="_blank">
        <i class="fab fa-linkedin-in"></i>
      </a>
      <p class="copyright text-dark mt-3 d-flex align-items-center justify-content-center">Hama99o © 2021</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

.footer-basic .social > a {
  font-size:24px;
  width:40px;
  height:40px;
  line-height:40px;
  display:inline-block;
  text-align:center;
  border-radius:50%;
  border:1px solid #ccc;
  color:inherit;
  opacity:0.75;
}
</style>
