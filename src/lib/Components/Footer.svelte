<script>
  import { Footer_Items } from "./Data/footer";
</script>

<main class="flex flex-col">
  <div class="flex justify-center items-center font-neonoir text-2xl bg-primary-500 align-middle mx-auto w-full p-2">Dogs By Nature ©️{new Date().getFullYear()}</div>
  <div class="grid lg:grid-cols-[auto_auto_auto] md:grid-rows bg-tertiary-500 justify-around">
    {#each Footer_Items as item}
      <div class="flex flex-col gap-2">
        <h3 class="h3 font-neonoir tracking-wide text-white underline underline-offset-[10px] decoration-4 decoration-secondary-500">{item.title}</h3>
        {#each item.items as i}
          <p class="font-ostrich_black tracking-[0.1em] leading-snug text-white text-base">{i}</p>
        {/each}
      </div>
    {/each}
  </div>
</main>
