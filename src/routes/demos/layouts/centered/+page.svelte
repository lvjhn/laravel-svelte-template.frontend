<script>
    import CenteredLayout from "@/layouts/common/CenteredLayout.svelte";
</script>

<div class="view">
    <CenteredLayout className="content" width="600" height="auto">
        <div class="inner-content">
            Hello, from CenteredLayout! <br />
        </div>
    </CenteredLayout>
</div>

<style lang="scss">
    .view :global(.content) {
        width: 100%;
        height: 100%;
    }

    .inner-content {
        padding: 20px;
        box-shadow: 0px 0px 2px grey;
        border-radius: 5px;
        height: 100%;
    }

</style>

