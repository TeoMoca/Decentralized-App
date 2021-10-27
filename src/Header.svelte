<script>
    import { user, username } from "./user";
    import Login from "./Login.svelte";
    import Chat from "./Chat.svelte";


    function signOut() {
        user.leave();
        username.set('')
    }
</script>

<header>
    <h1>GUN APP</h1>
    {#if $username}
        <div class="user-description">
            <span>Hello <strong>{$username}</strong></span>
            <img src="{`https://avatars.dicebear.com/api/pixel-art/${$username}.svg`}" alt="">
        </div>
        <button class="signout-button" on:click={signOut}>Sign Out</button>
    {:else}
        <h3> FROM GUN.JS</h3>
    {/if}
</header>

{#if !$username}
<div class="login"><Login /></div>
{:else}
    <Chat />
{/if}

<style>
    header {
        display: flex;
        align-items: center;
        width: 100%;
        height: 10%;
        margin: 0 auto;
        justify-content: space-between;
        background: #000;
        color: #FFF;
    }

    header h1, header h3 {
        margin: 0 15px;
    }

    .user-description {
		display: flex;
        align-items: center;
	}

    .user-description img {
        width: 50px;
        height: 50px;
    }

    .login {
        display: flex; 
        justify-content: center;
        height: 90%;
        align-items:center;
    }

    .signout-button {
        margin: 0 15px;
    }

</style>