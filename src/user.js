import GUN from "gun";
import "gun/sea";
import "gun/axe";
import { writable } from "svelte/store";

export const DB = GUN([
  "https://decentralizedapp.herokuapp.com/",
  "https://decentralizedapp2.herokuapp.com/",
]);

export const user = DB.user().recall({ sessionStorage: true });

export const username = writable("");

user.get("alias").on((name) => username.set(name));

DB.on("auth", async (event) => {
  const alias = await user.get("alias");
  username.set(alias);
});
