<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img
      id="moscow"
      class="img"
      usemap="#moscow"
      style="max-width: 100%; width: auto; height: auto;"
      alt
      src="../assets/metromap_translated_kiev.png"
    >
  </div>
</template>

<script>
export default {
    name : 'HelloWorld',

    data() {
        return {
            msg : 'Kyiv Map',
        };
    },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
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
</style>
