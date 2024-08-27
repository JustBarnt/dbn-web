<script>
  import Footer from "$lib/Components/Footer.svelte";
  import Header from "$lib/Components/Header.svelte";
  import ContactUs from "$lib/Components/ContactUs.svelte";
  import "../app.css";
</script>

<div class="grid h-screen w-screen grid-rows-[auto_1fr_auto]">
  <Header />
  <div class="bg-surface-50 space-y-4">
    <slot />
  </div>
  <Footer>
    <ContactUs />
  </Footer>
</div>
