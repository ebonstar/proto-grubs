import { writable } from "svelte/store";
import { recipes } from "./data.js";

export const today = writable([...recipes]);

export const currentPlan = writable("Paleo week 4");
export const nextPlan = writable("");
