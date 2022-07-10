<template>
  <div class="organism-draw-result">
    <AtomHeadlineTag tag="h2" content="This week's Eurojackpot numbers"></AtomHeadlineTag>
    <MoleculeNumberDisplay v-if="draw" :numbers="draw.numbers" :additional-numbers="draw.additionalNumbers" />
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { Draw } from '@/types';
import AtomHeadlineTag from '@/components/atoms/HeadlineTag.vue'
import MoleculeNumberDisplay from '@/components/molecules/DrawResult/NumberDisplay.vue'

export default {
  props: {
    draw: {
      type: Object as PropType<Draw>
    }
  },
  components: {
    AtomHeadlineTag,
    MoleculeNumberDisplay
  }
}
</script>

<style lang="postcss" scoped>

</style>