<script> 
    import BlankLayout from "./BlankLayout.svelte";

    export let width = 500;
    export let height = 300; 
    export let className = "layout";

    let widthNorm; 
    let heightNorm;

    $ : widthNorm = isNaN(width) ? width + "px" : width;
    $ : heightNorm = isNaN(width) ? width + "px" : width;

    let windowWidth  = 0;
    let windowHeight = 0;

    let marginTop = "auto";

    let paddingBottom = "20";

</script>

<svelte:window 
    bind:innerWidth={windowWidth}
    bind:innerHeight={windowHeight}
/>

{#if windowWidth > width}
    <div 
        class="centered-layout {className}"
    >
        <div 
            class="centered-container"
            style="
                width: 100%;
                height: 100%;
            "
        >
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
        display: table;
    }

    .centered-container {
        display: table-cell;
        vertical-align: middle;
    }

    .centered-item {
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>
