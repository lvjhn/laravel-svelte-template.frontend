<script>
    import FrameLayout from "@/layouts/common/FrameLayout.svelte";

    let windowWidth; 
    let windowHeight;

    let innerFrameWidth;
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
        <div slot="middle" let:width={innerFrameWidth1} let:height={innerFrameHeight1}> 
            <FrameLayout 
                className="content" 
                type="A" 
                width={innerFrameWidth1} 
                height={innerFrameHeight1}
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
                <div slot="middle" let:width={innerFrameWidth2} let:height={innerFrameHeight2}> 
                    <FrameLayout 
                        className="content" 
                        type="A" 
                        width={innerFrameWidth2} 
                        height={innerFrameHeight2}
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
            </FrameLayout>
        </div>
    </FrameLayout>
</div>

<style lang="scss" scoped>
    
</style>

