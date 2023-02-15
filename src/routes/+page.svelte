<script>
    import { onClient } from "../helpers/on-client";

    let data; 

    onClient(() => {
        _app.backend.http.post("/auth/user/profile-information");
    });

</script> 

<div class="splash"> 
    <div class="title">
        <h1>laravel9-svelte3-template.frontend</h1>
        <h3>Custom Laravel9 + Svelte3 Template</h3>
    </div> 
</div>

<style lang="scss"> 
    .splash {
        display: flex; 
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100%; 
        width: 100%;
        margin-top: 100px;

        .title {
            h1, h3 {
                margin: 0;
            }

            h3 {
                font-weight: normal;
            }
        }
    }
</style>