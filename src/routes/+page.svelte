<script>
    import { onClient } from "../helpers/on-client";

    let post; 
    let fetchPostID = 1;

    onClient(async () => {
        let result = await _app.sampleAPI.http.get("/posts/" + fetchPostID);
        post = result.data;
        console.log(post);
    });

    function fetchPost() {
        onClient(async () => {
            post = null;
            let result = await _app.sampleAPI.http.get("/posts/" + fetchPostID); 
            post = result.data; 
        });
    }

</script> 

<div class="splash"> 
    <div class="splash-content">
        <div class="title">
            <h1>laravel9-svelte3-template.frontend</h1>
            <h3>Custom Laravel9 + Svelte3 Template</h3>
        </div> 
        <br />
        <div class="sample-api-result">
            <p align="center">
                Using sample API from <i>http://jsonplaceholder.typicode.com</i>
            </p>
            <b>Result : <i>GET /posts/:id</i></b>
            <div class="filter">
                <b>ID: &nbsp;</b>
                <input 
                    type="number" 
                    min=1
                    max=100 
                    bind:value={fetchPostID}
                />
                <button on:click={fetchPost}>
                    Go
                </button>
            </div>
            <div class="result"> 
                {#if post}
                    <table class="result-table">
                        <tr> 
                            <td>ID</td>
                            <td>{post.id}</td>
                        </tr>
                        <tr> 
                            <td>User ID</td>
                            <td>{post.userId}</td>
                        </tr> 
                        <tr> 
                            <td>Title</td>
                            <td>{post.title}</td>
                        </tr> 
                        <tr> 
                            <td>Body</td>
                            <td>{post.body}</td> 
                        </tr>
                    </table>
                {:else}
                    <div class="loading"> 
                        Loading...
                    </div>
                {/if}
            </div>
        </div> 
    </div>
</div>

<style lang="scss"> 
    .splash {
        display: flex; 
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100%; 
        width: 100%;
        
        .splash-content { 
            margin: 20px;
            margin-top: 50px;

            .title {
                h1, h3 {
                    margin: 0;
                }

                h3 {
                    font-weight: normal;
                }
            }

            .filter {
                margin: 20px 0;
            }

            .sample-api-result {
                .result {
                    @media only screen and (min-width: 500px) {
                       width: 800px;
                    }
 
                    .result-table {
                        tr {
                            td:first-child {
                                color: black;
                                font-weight: bold;
                                width: 100px;
                            }  

                            td {
                                border: 1px solid black;
                                padding: 5px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>