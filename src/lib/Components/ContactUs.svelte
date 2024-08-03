<script>
  import Facebook from "$lib/icons/facebook.svelte";
  import Instagram from "$lib/icons/instagram.svelte";
  import Messenger from "$lib/icons/messenger.svelte";
</script>

<main class="flex flex-col justify-center items-center py-4">
  <div data-name="hero-el">
    <h2 class="font-ostrich_med text-6xl text-center">
      READY TO GET STARTED OR HAVE QUESTIONS?
      <br />
      CONTACT US TO SCHEDULE A CONSULTATION!
    </h2>
  </div>
  <div class="flex flex-row gap-8" data-name="contact-el">
    <div data-name="map-el">
      <!-- TODO: UPDATE API KEY WITH SAMI'S WEB URL -->
      <iframe
        title="Google Maps"
        class="border-8 border-primary-500"
        width="500"
        height="350"
        loading="lazy"
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJo_v6OwOFQIgRv_xf6YiPGYU&key=AIzaSyCDkJWHO93kwccBLkH0nmkiJDDrCIdCzA4"></iframe>
      <h2 class="h1 font-ostrich_med text-center">2763 Culver Ave, Dayton, OH 45429</h2>
      <div class="flex justify-center items-center gap-8">
        <Facebook width="32" />
        <Messenger width="32" />
        <Instagram width="32" />
      </div>
    </div>
    <div data-name="form-el"></div>
  </div>
</main>
