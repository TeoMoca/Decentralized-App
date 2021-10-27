import GUN from "gun";
import "gun/sea";
import "gun/axe";
import { writable } from "svelte/store";

export const DB = GUN("localhost:5000");

export const user = DB.user().recall({ sessionStorage: true });

export const username = writable("");

user.get("alias").on((name) => username.set(name));

DB.on("auth", async (event) => {
  const alias = await user.get("alias");
  username.set(alias);
});
