import { writable } from "svelte/store";
import { recipes } from "./data.js";

export const today = writable([...recipes]);

export const currentPlan = writable("Paleo week 4");
export const nextPlan = writable("");

export const activeTags = writable([]);
export const inactiveTags = writable([
  "30min",
  "breakfast",
  "cocktails",
  "dessert",
  "dinner",
  "easy",
  "from:Anna",
  "from:Hugo",
  "from:Justin",
  "gluten-free",
  "healthy",
  "high-protein",
  "lunch",
  "one-pot",
  "paleo",
  "protein",
  "snack",
  "vegan",
  "vegetarian",
]);
