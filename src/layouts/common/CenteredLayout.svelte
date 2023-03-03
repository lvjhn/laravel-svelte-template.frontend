<script> 
    import BlankLayout from "./BlankLayout.svelte";

    export let width = 500;
    export let height = 300; 
    export let className = "layout";

    let widthNorm; 
    let heightNorm;

    $ : widthNorm = !isNaN(width) ? width + "px" : width;
    $ : heightNorm = !isNaN(height) ? height + "px" : height;

    let windowWidth  = 0;
    let windowHeight = 0;


</script>

<svelte:window 
    bind:innerWidth={windowWidth}
    bind:innerHeight={windowHeight}
/>

{#if windowWidth > parseInt(width) + 100}
    <div 
        class="centered-layout {className}"
    >
        <div class="centered-item-container">
            <div 
                class="centered-item"
                style="
                    width: {widthNorm}; 
                    height: {heightNorm};
                "
            >
                <slot isBlankLayout={false} />
            </div>
        </div>
    </div>
{:else} 
    <BlankLayout {className}>
        <slot isBlankLayout={true} />
    </BlankLayout>
{/if}


<style> 
    .centered-layout {
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>
