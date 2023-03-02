<script> 
    import BlankLayout from "./BlankLayout.svelte";

    export let width = 960;
    export let className = "layout";

    let windowWidth  = 0;


</script>

<svelte:window 
    bind:innerWidth={windowWidth}
/>

{#if windowWidth < width} 
    <BlankLayout className={className}> 
        <slot />
    </BlankLayout>
{:else}
    <div 
        class="narrow-layout {className}"
        style="width: {width}px; margin: 0 auto;"
    >
        <slot />
    </div>
{/if}
