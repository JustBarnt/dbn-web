import { skeleton } from "@skeletonlabs/tw-plugin";
import { join } from "path";
import DBN_THEME from "./theme.js";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}")
	],
	theme: {
		extend: {
			fontFamily: {
				ostrich_black: ["ostrich_sansblack", "sans-serif"],
				ostrich_med: ["ostrich_sansblack", "sans-serif"],
				neonoir: ["Neonoir\\ W01\\ Bold", "sans-serif"]
			}
		}
	},
	plugins: [
		skeleton({
			themes: [DBN_THEME]
		})
	]
};
