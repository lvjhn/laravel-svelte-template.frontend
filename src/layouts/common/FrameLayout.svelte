<script> 
    import { } from "os";
    import BlankLayout from "./BlankLayout.svelte";

    export let width = 500;
    export let height = 300; 
    export let className = "layout";
    export let type = "A";

    let widthNorm; 
    let heightNorm;

    $ : widthNorm = width == "auto" ? "auto" : width + "px";
    $ : heightNorm = height == "auto" ? "auto" : height + "px";

    let windowWidth  = 0;
    let windowHeight = 0;

    export let showLeft = true; 
    export let showCenter = true; 
    export let showRight = true; 
    export let showTop = true; 
    export let showMiddle = true; 
    export let showBottom = true;

    export let leftSize = 100; 
    export let rightSize = 100;
    export let topSize = 100; 
    export let bottomSize = 100;

    export let containerHeight = 0;
    export let containerWidth = 0;

</script>

<svelte:window 
    bind:innerWidth={windowWidth}
    bind:innerHeight={windowHeight}
/>
<div 
    class="frame-layout {className} type-{type}" 
    style="width: {widthNorm}; height: {heightNorm}"
    bind:clientHeight={containerHeight}
    bind:clientWidth={containerWidth}
>   
    <!-- TYPE A -->
    {#if type == "A"}
        {#if showLeft}
            <div class="_left cell" style="width: {leftSize}px"> 
                <slot name="left">Left</slot>
            </div>         
        {/if} 
        {#if showCenter}
            <div 
                class="_center cell" 
                style="
                    flex-grow: 1; 
                    display: flex; 
                    flex-direction: column;
                "> 
                {#if showTop}
                    <div class="_top cell" style="height: {topSize}px"> 
                        <slot name="top">Top</slot>
                    </div>         
                {/if} 
                {#if showMiddle}
                    <div class="_center cell" style="height: {height - (topSize + bottomSize)}px"> 
                        <slot name="middle">Midle</slot>
                    </div>
                {/if}
                {#if showBottom}
                    <div class="_bottom cell" style="height: {bottomSize}px"> 
                        <slot name="bottom">Bottom</slot>
                    </div>
                {/if}
            </div>
        {/if}
        {#if showRight}
            <div class="_right cell" style="width: {rightSize}px"> 
                <slot name="right">Right</slot>
            </div>
        {/if}   

    <!-- TYPE A -->
    {:else if type == "B"}
        {#if showTop}
            <div class="_top cell" style="height: {topSize}px"> 
                <slot name="top">Top</slot>
            </div>  
        {/if} 
        {#if showCenter}
            <div 
                class="center cell" 
                style="height: {height - (topSize + bottomSize)}px; display: flex;"
            > 
                <div class="_left cell" style="width: {leftSize}px"> 
                    <slot name="left">Left</slot>
                </div>   
                <div class="_middle cell" style="flex-grow: 1;"> 
                    <slot name="middle">Middle</slot>
                </div>  
                <div class="_right cell" style="width: {rightSize}px">
                    <slot name="right">Right</slot>
                </div>
            </div>  
        {/if}
        {#if showBottom}
            <div class="_bottom cell" style="height: {bottomSize}px">
                <slot name="bottom">Bottom</slot>
            </div>
        {/if}
    {/if}
</div>



<style> 
    .type-A {
        display: flex; 
        flex-direction: row;
    }

    .type-b {
        display: flex; 
        flex-direction: column;
    }

    .cell {
        outline: 1px solid black;

    }

</style>
