<template>
  <div class="home container">
    <OrganismIntroContainer>
      <template #content>
        <p>Please have a look at the recent winning <router-link :to="'/eurojackpot'">numbers</router-link>.</p>
      </template>
    </OrganismIntroContainer>
  </div>
</template>

<script lang="ts">
import OrganismIntroContainer from '@/components/organisms/IntroContainer.vue'

import Vue from 'vue';

export default Vue.extend({
  name: 'HomeView',
  components: {
    OrganismIntroContainer
  },
});
</script>
