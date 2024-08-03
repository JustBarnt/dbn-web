/**
 * @typedef {Object} Items
 * @property {string} title - The title for the articles section.
 * @property {Array<string>} items - The list of articles.
 */

/**
 * @typedef {Array<Items>} Footer
 * @property {Areas} areas - The areas object.
 * @property {Packages} packages - The packages object.
 * @property {Articles} articles - The articles object.
 */

export const Footer_Items = [
  {
    title: "Serving These Areas:",
    // prettier-ignore
    items: [
      "Dayton",
      "Kettering",
      "Centerville",
      "Bellebrook",
      "Springboro",
      "Fairborn",
      "Miamisburg",
      "Beavercreak",
      "Green County",
      "Montgomery County",
      "Buttler County",
      "Warren County"
    ]
  },
  {
    title: "Our Training Packages:",
    // prettier-ignore
    items: [
      "Private Lessons",
      "Dog Walking",
      "Group Classes",
      "Off Leash Training",
      "Canine Good Citizen",
      "Star Puppy Group Classes",
      "Dog Sports",
      "Confidence Building"
    ]
  },
  {
    title: "Popular Articles",
    // prettier-ignore
    items: [
      'Puppy Training Guide',
      'Firework Desensitation',
      'Teaching your dog to walk on a leash'
    ]
  }
];
