import { browser } from '$app/environment';
import { goto } from '$app/navigation';

export function load() {
	if (browser) goto('/home');
}
