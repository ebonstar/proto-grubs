import { writable } from "svelte/store";
import { recipes } from "./data.js";

export const today = writable([...recipes]);
