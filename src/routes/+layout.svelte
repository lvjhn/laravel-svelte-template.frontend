<script> 
    import "../main.js"
    import "../style.scss"
</script>

<div class="root">
    <slot />
</div>

<style> 
    .root {
        width: 960px; 
        margin: 25px auto;
    }
</style>