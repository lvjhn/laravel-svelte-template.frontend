<script>
    import CenteredLayout from "@/layouts/common/CenteredLayout.svelte";
</script>

<div class="view">
    <CenteredLayout className="content" width="600" height="300">
        <div class="inner-content">
            <div class="title">
                Hello, from CenteredLayout! 
            </div>
        </div>
    </CenteredLayout>
</div>

<style lang="scss" scoped>
    :global(.content) {
        width: 100%;
        height: 100%;
    }

    .inner-content {
        padding: 20px;
        box-shadow: 0px 0px 2px grey;
        border-radius: 5px;
    }

    :global(.content.blank-layout) {
        .inner-content {
            color: red;
            box-shadow: none;

            .title {
                text-align: center;
            }
        }
    }
</style>

