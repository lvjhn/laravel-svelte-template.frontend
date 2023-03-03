<script>
    import FrameLayout from "@/layouts/common/FrameLayout.svelte";

    let windowWidth; 
    let windowHeight;

</script>

<svelte:window 
    bind:innerWidth={windowWidth}
    bind:innerHeight={windowHeight}
/>

<div class="view">
    <FrameLayout 
        className="content" 
        type="A" 
        width={windowWidth} 
        height={windowHeight}
    >
        <div slot="left"> 
            Left
        </div>
        <div slot="center"> 
            Center
        </div>
        <div slot="right"> 
            Right
        </div>
        <div slot="top"> 
            Top            
        </div>
        <div slot="bottom"> 
            Bottom
        </div> 
        <div slot="middle"> 
            Middle
        </div>
    </FrameLayout>
</div>

<style lang="scss" scoped>
    
</style>

