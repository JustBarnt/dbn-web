<script>
  import off_leash_training from "$lib/assets/home/Home_Icon_OffLeash.png";
  import relationship_building from "$lib/assets/home/Home_Icon_RelationshipBuilding.png";
  import behavioral_issues from "$lib/assets/home/Home_Icon_BehaviorIssues.png";
  import obedience from "$lib/assets/home/Home_Icon_Obedience.png";
  import positive_outlets from "$lib/assets/home/Home_Icon_PostiveOutlets.png";
  import working_dogs from "$lib/assets/home/Home_Icon_WorkingDogs.png";

  /** @type {IconKeys} */
  export let icon = "off_leash_training";
  export let width = "106px";

  /** @type {Icons} */
  const icons = {
    off_leash_training: {
      source: off_leash_training,
      name: "icon-off-leash",
      alt: "Icon of a dog of its leash"
    },
    obedience: {
      source: obedience,
      name: "icon-off-leash",
      alt: "Icon of a dog of its leash"
    },
    behavioral_issues: {
      source: behavioral_issues,
      name: "icon-off-leash",
      alt: "Icon of a dog of its leash"
    },
    relationship_building: {
      source: relationship_building,
      name: "icon-off-leash",
      alt: "Icon of a dog of its leash"
    },
    positive_outlets: {
      source: positive_outlets,
      name: "icon-off-leash",
      alt: "Icon of a dog of its leash"
    },
    working_dogs: {
      source: working_dogs,
      name: "icon-off-leash",
      alt: "Icon of a dog of its leash"
    }
  };

  /** @type {DbnImageData} */
  $: selected_icon = icons[icon];
</script>

<img
  {width}
  src={selected_icon.source}
  alt={selected_icon.alt}
  data-name={selected_icon.name} />
