<script> 
    import { } from "os";
    import BlankLayout from "./BlankLayout.svelte";

    export let width = 0;
    export let height = 0; 
    export let className = "layout";
    export let type = "A";

    let widthNorm; 
    let heightNorm;

    $ : widthNorm = !isNaN(width) ? width + "px" : width;
    $ : heightNorm = !isNaN(height) ? height + "px" : height;

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
        {#if 
            containerHeight > (topSize + bottomSize) && 
            containerWidth > (leftSize + rightSize)
        }
            {#if showLeft}
                <div class="_left cell" style="width: {leftSize}px"> 
                    <slot 
                        name="left"
                        width={leftSize}
                        height={containerHeight}
                    >
                        Left
                    </slot>
                </div>         
            {/if} 
            {#if showCenter}
                {#if containerWidth > (leftSize + rightSize)}
                    <div 
                        class="_center" 
                        style="
                            flex-grow: 1; 
                            display: flex; 
                            flex-direction: column;
                        "> 
                        {#if showTop}
                            <div class="_top cell" style="height: {topSize}px"> 
                                <slot 
                                    name="top"
                                width={containerWidth - (leftSize + rightSize)}
                                height={topSize}
                            >
                                Top
                            </slot>
                        </div>         
                        {/if} 
                        {#if showMiddle}
                            <div 
                                class="_center cell" 
                                style="height: {containerHeight - (topSize + bottomSize)}px"
                            > 
                                <slot 
                                    name="middle"
                                    width={containerWidth - (leftSize + rightSize)} 
                                    height={containerHeight - (topSize + bottomSize)}    
                                >
                                    Middle
                                </slot>
                            </div>
                        {/if}
                        {#if showBottom}
                            <div 
                                class="_bottom cell" 
                                style="height: {bottomSize}px"
                    
                            > 
                                <slot 
                                    name="bottom"
                                    width={containerWidth - (leftSize + rightSize)}
                                    height={bottomSize}
                                >
                                    Bottom
                                </slot>
                            </div>
                        {/if}
                    </div>
                {:else} 
                    <slot name="out-of-space">
                        Out of Space
                    </slot>
                {/if}
            {/if}
            {#if showRight}
                <div class="_right cell" style="width: {rightSize}px"> 
                    <slot 
                        name="right"
                        width={rightSize} 
                        height={containerHeight}
                    >
                        Right
                    </slot>
                </div>
            {/if}   
        {:else} 
            <slot name="out-of-space">
                Out of Space
            </slot>
        {/if}
 
    <!-- TYPE A -->
    {:else if type == "B"}
        {#if 
            containerHeight > (topSize + bottomSize) && 
            containerWidth > (leftSize + rightSize)
        }
            {#if showTop}
                <div 
                    class="_top cell" 
                    style="height: {topSize}px"
                > 
                    <slot 
                        name="top"
                        width={containerWidth} 
                        height={topSize}
                    >
                        Top
                    </slot>
                </div>  
            {/if} 
            {#if showCenter}
                {#if containerHeight > (topSize + bottomSize)}
                    <div 
                        class="center" 
                        style="height: {containerHeight - (topSize + bottomSize)}px; display: flex;"
                    > 
                        <div class="_left cell" style="width: {leftSize}px"> 
                            <slot 
                                name="left"
                                width={leftSize} 
                                height={containerHeight - (topSize + bottomSize)}
                            >
                                Left
                            </slot>
                        </div>   
                        <div class="_middle cell" style="flex-grow: 1;"> 
                            <slot 
                                name="middle"
                                width={containerWidth - (leftSize + rightSize)}
                                height={containerHeight - (topSize + bottomSize)}    
                            >
                                Middle
                            </slot>
                        </div>  
                        <div class="_right cell" style="width: {rightSize}px">
                            <slot 
                                name="right"
                                width={rightSize} 
                                height={containerHeight - (topSize + bottomSize)}
                            >
                                Right
                            </slot>
                        </div>
                    </div>  
                {:else} 
                    <slot name="out-of-space">
                        Out of Space
                    </slot>
                {/if}
            {/if}
            {#if showBottom}
                <div class="_bottom cell" style="height: {bottomSize}px">
                    <slot 
                        name="bottom"
                        width={containerWidth}
                        height={bottomSize} 
                    >
                        Bottom
                    </slot>
                </div>
            {/if}
        {:else} 
            <slot name="out-of-space">
                Out of Space
            </slot>
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

    ._left, ._top, ._right, ._bottom, ._middle {
        z-index: 10;
        background-color: white;
    }

</style>
