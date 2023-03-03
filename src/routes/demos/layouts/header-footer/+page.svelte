<script>
    import FrameLayout from "@/layouts/common/FrameLayout.svelte";

    let windowWidth; 
    let windowHeight;

    let isLeftShown = false; 
    let isRightShown = false;

    let innerContentHeight;
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
        showLeft={isLeftShown}
        showRight={isRightShown}
    >
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

