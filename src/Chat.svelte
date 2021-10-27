<script>
    import { username, user } from "./user";
    import { onMount } from "svelte";
    import ChatMessage from "./ChatMessage.svelte"

    import GUN from "gun";
    const DB = GUN();

    let newMessage;
    let messages = [];

    onMount(() => {

        DB.get("chat")
            .map()
            .once(async(data, id) => {
                if(data){
                    const key = "#potions";

                    let message = {
                        who: await DB.user(data).get("alias"),
                        what: await (SEA.decrypt(data.what, key)) + "",
                        when:  GUN.state.is(data, "what"),
                    }

                    if (message.what){
                        messages = [...messages.slice(-100), message]
                    }
                }
            })
    })

    async function sendMessage() {
        const secret = await SEA.encrypt(newMessage, "#potions");
        const message = user.get("all").set({what: secret});
        const index = new Date().toISOString();
        newMessage = '';
        DB.get("chat").get(index).put(message);
    }

</script>
<div class="chat-container">
    {#each messages as message (message.when)}
        <ChatMessage message={message} />
    {/each}
    
</div>
    <form class="send-message" on:submit|preventDefault={sendMessage}>
        <input type="text" placeholder="Type your message ..." name="message" bind:value = {newMessage}/>
        <button type="submit">Send</button>
    </form>

<style>

    .chat-container {
        display: flex;
        flex-direction: column;
        height: 80%;
        width: 90%;
        padding: 0 5%;
        overflow: auto;
    }

    .send-message {
        display: flex;
        justify-content: flex-end;
        width: 95%;
        height: 5%;
        margin-top: auto;
    }
</style>