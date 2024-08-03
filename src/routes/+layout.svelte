<script>
	import "../app.css";
</script>

<div class="grid h-screen grid-rows-[auto_1fr_auto]">
	<header class="sticky top-0 z-10 bg-red-500/80 backdrop-blur-sm p-4 font-neonoir">
		(header)
	</header>
	<main class="bg-green-500 p-4 space-y-4">
		<slot />
	</main>
	<footer class="bg-blue-500 p-4 font-ostrich_black">FOOTER</footer>
</div>
