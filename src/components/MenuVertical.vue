<script>
export default {};
</script>
<template>
  <nav class="menu">
    <h1><RouterLink to="/">Fregfilmes</RouterLink></h1>
    <span><RouterLink to="/categorias">categorias</RouterLink></span>
    <span><RouterLink to="/diretores">Diretores</RouterLink></span>
    <span>Atores</span>
  </nav>
  <nav class="busca">
    <input type="text"  placeholder="busca" />
  </nav>
</template>
<style>
.nav {
  display: flex;
  align-items: flex-start;
}
</style>
