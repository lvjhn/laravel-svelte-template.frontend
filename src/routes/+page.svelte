<script>
    import { onClient } from "../helpers/on-client";
    import NarrowLayout from "@/layouts/common/NarrowLayout.svelte";

    let post; 
    let pingData; 
    let wsPingEventData;
    let fetchPostID = 1;

    onClient(async () => {
        handleWsEvents();
        doHttpRequests();
    });

    async function doHttpRequests() {
        _app.sampleAPI.http.get("/posts/" + fetchPostID)
            .then((response) => {
                post = response.data;
            });
    

        _app.backend.http.get("/ping")
            .then((response) => {
                pingData = response.data;
            }); 
    }

    async function handleWsEvents() {
        _app.backend.ws.channel("PingChannel")
            .listen(".ping_channel.ping_event", (event) => {
                wsPingEventData = event;
            });
    }

    function fetchPost() {
        onClient(async () => {
            post = null;
            let result = await _app.sampleAPI.http.get("/posts/" + fetchPostID); 
            post = result.data; 
        });
    }

</script> 

<div class="splash"> 
    <NarrowLayout>
        <div class="splash-content">
            <div class="title">
                <h1>laravel9-svelte3-template.frontend</h1>
                <h3>Custom Laravel9 + Svelte3 Template</h3>
            </div> 
            <br />
            <div class="sample-api-result">
                <h2>Sample API</h2      >
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
            <div class="backend-result">
                <h2>Back-end</h2>   

                <b>Result : HTTP - <i>GET /api/ping</i></b>
                <div class="result"> 
                    {#if pingData}
                        <pre>{JSON.stringify(pingData, null, 2)}</pre>
                    {:else}
                        <div class="loading"> 
                            Loading...
                        </div>
                    {/if}
                </div>

                <b>Result : WebSockets - PingChannel</b>
                <div class="result"> 
                    {#if wsPingEventData}
                        <pre>{JSON.stringify(wsPingEventData, null, 2)}</pre>
                    {:else} 
                        <pre>Loading...</pre>
                    {/if}
                </div>
            </div> 
        </div>  
    </NarrowLayout>
</div>

<style lang="scss"> 
    .splash {
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
                    margin: 0 auto; 
 
                    .result-table {
                        tr {
                            td:first-child {
                                color: white;
                                background-color: rgb(50, 70, 80);
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

        .loading {
            margin-top: 20px;
        }
    }
</style>