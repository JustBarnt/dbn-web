<script>
  import Star from "$lib/icons/star.svelte";
  export let rating;
  export let name = "Samantha McClanahan";
  export let href = "";
  export let review =
    "Vivamus aliquet elit vel pulvinar cursus. Vivamus tristique vehicula bibendum. Curabitur ultricies venenatis sem, eget iaculis eros aliquet posuere. Sed quis ante dapibus, elementum velit a, euismod ante. Donec dictum nisi nec metus vehicula laoreet. Etiam condimentum vehicula neque sed cursus. Pellentesque accumsan sagittis urna, a imperdiet metus sollicitudin sagittis. Pellentesque pretium turpis odio, at ullamcorper tellus venenatis sed. Fusce libero magna, ultricies eu magna a, convallis iaculis mi. Etiam sed tempus metus, nec scelerisque quam. Integer sit amet orci sed dui venenatis porta quis a urna. Curabitur non iaculis diam. Morbi faucibus leo ac odio semper, in pharetra diam tempus.";
</script>

<article id="Testimonial-Card">
  <a
    {href}
    class="card card-hover bg-white shadow-lg flex flex-col items-center p-4 border-t-primary-500 border-t-8 gap-4 h-full min-h-[50%]">
    <div class="w-full">
      <span class="flex items-center justify-center">
        <Star {rating} />
      </span>
    </div>
    <h2 class="font-sans font-bold text-left w-full">{name}</h2>
    <p class="text-sm">{review}</p>
  </a>
</article>
