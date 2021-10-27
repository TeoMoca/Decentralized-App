<script>
    import { user } from "./user";

    let username;
    let password;

    function login() {
        user.auth(username, password, ({ err }) => err && alert(err))
    }

    function signUp(){
        user.create(username, password, ({ err }) => {
            if(err){
                alert(err);
            }else{
                login();
            }
        })
    }

</script>

<div>
    <label for="username">Username</label>
    <input name="username" bind:value={username} minlength="3" maxlength="16" />
    
    <label for="password">Password</label>
    <input name="password" bind:value={password} type="password" />
    
    <div>
        <button class="login" on:click={login}>
            Login
        </button>
        <button class="sign-in" on:click={signUp}>
            Sign Up
        </button>
    </div>
</div>