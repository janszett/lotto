<template>
  <div class="molecule-error-message">
    <AtomHeadlineTag content="Error" tag="h3"/>
    <p v-html="message"></p>
  </div>
</template>

<script lang="ts">
import AtomHeadlineTag from '@/components/atoms/HeadlineTag.vue'

export default {
  props: {
    message: {
      type: String,
      required: true
    }
  },
  components: {
    AtomHeadlineTag
  }
}
</script>

<style lang="postcss" scoped>
  .molecule-error-message {
    &::before {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2em;
      height: 2em;
      font-size: 1.5em;
      line-height: 1;
      color: white;
      content: "!";
      background: #c00;
      border-radius: 50%;
    }
  }

</style>