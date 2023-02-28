<script>
  import "../app.scss";
  import "../main.js";
  import "../style.scss";
  import { onMount } from "svelte";

  let isReady = false; 
  
  onMount(() => {
    isReady = true;
  });
</script>

<div class="root">
  {#if isReady}
    <slot />
  {:else}
    <div class="loading-screen">
      <div class="loading-text">
        Loading app...
      </div>
    </div>
  {/if} 
</div>

<style>
  .root {
    width: 100%;
    height: 100%;
  }

  .loading-screen {
    top: 0px;
    left: 0px;
    position: fixed; 
    width: 100%;
    height: 100%;
    display: flex; 
    align-items: center;
    justify-content: center;
  }
</style>