<script>
  import Facebook from "$lib/icons/facebook.svelte";
  import Instagram from "$lib/icons/instagram.svelte";
  import Messenger from "$lib/icons/messenger.svelte";
  import { Footer_Items } from "./Data/footer";
</script>

<footer class="flex flex-col">
  <slot name="map" />
  <div
    class="flex justify-center items-center font-neonoir text-2xl bg-primary-500 align-middle mx-auto w-full p-2 gap-x-4"
    data-name="copyright-el">
    Dogs By Nature ©️{new Date().getFullYear()}
  </div>
  <div
    class="footer-lg-styles flex flex-col justify-around bg-tertiary-500"
    data-name="footer-el">
    {#each Footer_Items as item}
      <div class="flex flex-col gap-2 lg:bg-tertiary-500 lg:even:bg-tertiary-500 even:bg-tertiary-700 p-4">
        <h3 class="text-2xl font-neonoir tracking-wide text-white border-b-4 border-secondary-500 pb-2">{item.title}</h3>
        <div class="grid grid-cols-3 lg:flex lg:flex-col">
          {#each item.items as i}
            <p class="font-ostrich_black tracking-[0.1em] leading-snug text-white text-base whitespace-pre-line">{i}</p>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</footer>
