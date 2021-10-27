<script>
    import {user, username} from "./user"
    export let message;
</script>


<div class='{message.who === $username ? "my-message" : "other-user-message"}'>
    <div class="message-container">
        <span class="who"> {message.who === $username ? "Me" : message.who}</span>
        <span class="what"> {message.what}</span>
        <span class="when"> {new Date(message.when).toUTCString()}</span>
    </div>
    <img class="message-user" src="{`https://avatars.dicebear.com/api/pixel-art/${message.who}.svg`}" alt="">
</div>

<style>
    .my-message, .other-user-message {
        display: flex;
        width: 100%;
        align-items: center;
    }

    .my-message {
        justify-content: flex-end;
    }

    .other-user-message {
        justify-content: flex-start;
    }

    .my-message .message-container {
        background: #129785;
    }

    .other-user-message .message-container {
        background: rgb(77, 191, 236);
    }

    .message-container {
        display: flex;
        flex-direction:column;
        max-width: 500px;
        border-radius: 20px;
        border: 1px solid #000;
        padding: 10px;
        margin: 5px 0;
        white-space: break-spaces;
    }

    .who {
        color: #666;
        font-size: 10px;
    }

    .what{
        color: #000;
        font-size: 15px;
        display: inline-block;
        max-width: 100%;
    }

    .when {
        color: #666;
        font-size: 10px;
    }

    .message-user {
        width: 50px;
        height: 50px;
    }
</style>