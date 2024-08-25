<script>
  export let activeFill = "#fab130";
  export let inactiveFill = "#2B374E";
  export let width = "250";
  export let height = "65";
  export let rating;

  /**
   * Converts the rating into a percentage for the specific star.
   * @param {number} rating Total rating
   * @param {number} maxWidth maxWidth of the svg
   * @returns {number} a formatted string resulting in the percentage of the rating
   */
  function get_rating(rating, maxWidth) {
    // Total number of stars is 5
    const fullStars = Math.floor(rating);
    const fractionalPart = rating - fullStars;

    const result = rating / 5;

    console.log(result * maxWidth);
    return maxWidth * result;
  }
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 2880 512"
  {width}
  {height}
  class="star"
  shape-rendering="geometricPrecision">
  <defs>
    <clipPath id="clipStar">
      <rect
        x="0"
        y="0"
        width={get_rating(rating, 2880)}
        height="100%" />
    </clipPath>
  </defs>

  {#each Array(5) as _, index}
    <g transform="translate({576 * index}, 0)">
      <path
        stroke={inactiveFill}
        stroke-width="5px"
        fill={inactiveFill}
        opacity="85%"
        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
    </g>
  {/each}

  <g clip-path="url(#clipStar)">
    {#each Array(5) as _, index}
      <g transform="translate({576 * index}, 0)">
        <path
          fill={inactiveFill}
          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
        <path
          fill={activeFill}
          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
      </g>
    {/each}
  </g>
</svg>
