<script>
  import Footer from "$lib/Components/Footer.svelte";
  import Header from "$lib/Components/Header.svelte";
  import ContactUs from "$lib/Components/ContactUs.svelte";
  import "../app.css";
  import { afterNavigate } from "$app/navigation";
  import { onMount } from "svelte";
  import { filterAnchors, handleAnchorClick, scrollToAnchor } from "$lib/Components/utils";

  afterNavigate((event) => {
    const hash = window.location.hash.replace("#", "");
    if (hash) scrollToAnchor(hash);
  });

  onMount(() => {
    const anchors = document.querySelectorAll("a");
    const filteredAnchors = filterAnchors(Array.from(anchors));

    filteredAnchors.forEach((anchor) => {
      anchor.addEventListener("click", (event) => handleAnchorClick(event));
    });
  });
</script>

<div class="grid w-screen grid-rows-[auto_1fr_auto]">
  <Header />
  <div class="bg-surface-50 space-y-4">
    <slot />
  </div>
  <Footer>
    <ContactUs />
  </Footer>
</div>
