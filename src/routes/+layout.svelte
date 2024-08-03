<script>
  import Footer from "$lib/Components/Footer.svelte";
  import Header from "$lib/Components/Header.svelte";
  import "../app.css";
</script>

<div class="grid h-screen w-screen grid-rows-[auto_1fr_auto]">
  <Header />
  <main class="bg-green-500 p-4 space-y-4">
    <slot />
  </main>
  <Footer />
</div>
