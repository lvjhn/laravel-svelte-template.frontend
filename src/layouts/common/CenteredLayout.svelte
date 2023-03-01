<script> 
    import BlankLayout from "./BlankLayout.svelte";

    export let width = 500;
    export let height = 300; 

    let widthNorm; 
    let heightNorm;

    $ : widthNorm = width == "auto" ? "auto" : width + "px";
    $ : heightNorm = height == "auto" ? "auto" : height + "px";

    export let className;

    let windowWidth  = 0;


</script>

<svelte:window 
    bind:innerWidth={windowWidth}
/>


<div 
    class="centered-layout {className}"
>
    <div 
        class="centered-item"
        style="width: {widthNorm}; height: {heightNorm};"
    >
        <slot />
    </div>
</div>


<style> 
    .centered-layout {
        display: flex; 
        align-items: center; 
        justify-content: center;
        width: 100%;
        height: 100%;
    }
</style>
