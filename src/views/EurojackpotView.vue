<template>
  <div>
    <OrganismDrawResult :draw="draw" v-if="draw && draw.numbers"/>
    <MoleculeErrorDisplay v-if="error" :message="error"/>
  </div>
</template>



<script lang="ts">
import gql from 'graphql-tag'
import { defineComponent } from 'vue'
import { Draw } from '@/types';

const QUERY_GET_DRAWS = gql`
query {
  draw(type:"eurojackpot",limit: 1 ) {
      draws {
        numbers,
        additionalNumbers,
        date,
        jackpot
      }
  }
}
`;

import OrganismDrawResult from '@/components/organisms/DrawResult.vue'
import MoleculeErrorDisplay from '@/components/molecules/ErrorDisplay.vue'

export default defineComponent({
  components: {
    OrganismDrawResult,
    MoleculeErrorDisplay
  },
  data () {
    return {
      draw: {} as Draw,
      error: null
    }
  },
   apollo: {
    draw: {
      query: QUERY_GET_DRAWS,
      update(data) {
        if(!data.draw.draws[0]){
          this.error = 'Unfortunately, there are no numbers available right now.'
          return null;
        }
        return data.draw.draws[0];
      },
      error(e){
        this.error = e.toString();
      }
    }
  }
});

</script>
