<template>
    <component class="headline" :is="tag" v-html="content"></component>
</template>

<script lang="ts">
export default {
   props: {
    tag: {
        type: String,
        default: 'h1'
    },
    content: {
        type: String,
        required: true
    }
   }
}
</script>


<style lang="postcss" scoped>
h1 {
  margin: 1em;
  font-size: calc(30 / 375 * 100vw);
  line-height: 1;

  @media (--xs) {
    font-size: 3rem;
  }
}

h2 {
  margin: 1em;
  font-size: calc(20 / 375 * 100vw);
  line-height: 1;

  @media (--xs) {
    font-size: 2rem;
  }
}

h3 {
  margin: 0.3em;
  font-size: calc(40 / 375 * 100vw);
  line-height: 1;

  @media (--xs) {
    font-size: 2rem;
  }
}
</style>