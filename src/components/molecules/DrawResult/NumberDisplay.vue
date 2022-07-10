<template>
  <div class="molecule-number-display">
    <ul>
      <transition-group appear name="view">
        <li v-for="(item,index) in allNumbers"  :key="`number${index}`" :class="{'additional':item.additional}" :style="{transitionDelay: `${index*100}ms`}">
          <span v-html="item.number" />
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'

export default {
  props: {
    numbers: {
      type: Array as PropType<number[]>,
      required: true
    },
    additionalNumbers: {
      type: Array as PropType<number[]>,
      required: true
    }
  },
  computed: {
    allNumbers(){
      if(!this.numbers || !this.additionalNumbers) return [];
      const merged = [
        ...this.numbers.map(number=>{ return { number }}),
        ...this.additionalNumbers.map(number=>{ return {additional: true, number }})
      ];
      return merged;
    }
    
  }
}
</script>

<style lang="postcss" scoped>
ul {
  text-align: center;
  list-style: none;

  & li {
    display: inline-flex;
    flex-basis: 3em;
    align-items: center;
    justify-content: center;
    width: 3em;
    height: 3em;
    margin: 0.5em;
    font-size: calc(20 / 375 * 100vw);
    line-height: 1;
    background: gold;
    border-radius: 50%;
    transition: transform 250ms, opacity 250ms;

    @media (--xs) {
      font-size: 2rem;
    }

    &.additional {
      background: green;
    }
  }

  .view-leave-active {
    transition: opacity 0.2s ease-in-out, transform 0.25s ease;
  }

  .view-enter-active {
    transition: opacity 0.5s ease-in-out, transform 0.25s ease;
    transition-delay: 0.2s;
  }

  .view-enter,
  .view-leave-to {
    opacity: 0;
    transform: translateY(-100%);

  }

  .view-enter-to,
  .view-leave {
    opacity: 1;
  }
}
</style>