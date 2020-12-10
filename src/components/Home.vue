<template>
  <div class="home">
    <nav-menu class="nav-menu"></nav-menu>
    <router-view/>
  </div>
</template>

<script>

  import NavMenu from '@/components/NavMenu'

export default {
  name: 'Home',
  components: {NavMenu}
}

</script>
