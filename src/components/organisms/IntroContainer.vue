<template>
  <div class="organism-intro">
    <slot name="headline">
      <AtomHeadlineTag tag="h1" content="Welcome to the <strong>Eurojackpot</strong> demo page"></AtomHeadlineTag>
    </slot>
    <slot name="content" />
  </div>
</template>

<script lang="ts">
import AtomHeadlineTag from '@/components/atoms/HeadlineTag.vue'

export default {
  components: {
    AtomHeadlineTag
  }
}
</script>

<style lang="postcss" scoped>
  .organism-intro {
    & >>> p {
      & a {
        font-weight: bold;
        text-decoration: underline;
      }
    }
  }
</style>