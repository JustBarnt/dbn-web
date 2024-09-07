<script>
  import { footer as Footer_Items } from "$lib/content/footer";
  import { site_content as content } from "$lib/content/content";
  import { extractAnchors } from "./utils";

  const anchors = extractAnchors(content);
</script>

<footer class="flex flex-col">
  <slot />
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
          <ul class="footer-list">
            {#each item.items as i}
              {#if i.link !== ""}
                {#each anchors as anchor}
                  {#if i.item === anchor.Title}
                    <li>
                      <a
                        href="/classes#{anchor.Anchor}"
                        class="font-ostrich_black tracking-[0.1em] leading-snug text-white text-base whitespace-pre-line underline">{i.item}</a>
                    </li>
                  {/if}
                {/each}
              {:else}
                <p class="font-ostrich_black tracking-[0.1em] leading-snug text-white text-base whitespace-pre-line">{i.item}</p>
              {/if}
            {/each}
          </ul>
        </div>
      </div>
    {/each}
  </div>
</footer>
