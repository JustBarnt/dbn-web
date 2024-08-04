<script>
  import Facebook from "$lib/icons/facebook.svelte";
  import Instagram from "$lib/icons/instagram.svelte";
  import Messenger from "$lib/icons/messenger.svelte";
</script>

<main class="flex flex-col items-center py-4">
  <div
    class="space-y-4"
    data-name="hero-el">
    <h2 class="font-ostrich_med text-6xl text-center">
      READY TO GET STARTED OR HAVE QUESTIONS?
      <br />
      CONTACT US TO SCHEDULE A CONSULTATION!
    </h2>
    <div class="flex justify-center items-center gap-8">
      <Facebook width="32" />
      <Messenger width="32" />
      <Instagram width="28" />
    </div>
  </div>
  <div
    class="w-full h-full p-4"
    data-name="form-el">
    <!-- TODO: CHANGE EMAIL TO SAMIS EMAIL -->
    <form
      class="flex flex-col justify-evenly h-full [&>label>input]:p-2 [&>label>textarea]:p-2 gap-2"
      action="mailto:functnal@gmail.com"
      method="POST">
      <label for="name">
        <input
          class=""
          type="text"
          name="name"
          placeholder="Full Name"
          required />
      </label>
      <label for="email">
        <input
          class=""
          type="email"
          name="email"
          placeholder="address@mail.com"
          required />
      </label>
      <label for="phone">
        <input
          class=""
          type="tel"
          name="phone"
          placeholder="Ex: 123-456-7890 or 1234567890"
          required />
      </label>
      <label for="message">
        <textarea
          class="resize-none w-full min-h-64"
          placeholder="Message"
          name="message" />
      </label>
      <button
        type="submit"
        class="self-center text-on-primary-token font-ostrich_black">Send</button>
    </form>
  </div>
</main>
