import astro from "eslint-plugin-astro";
import astroStandards from "eslint-plugin-astro-standards";

export default [
  ...astro.configs.recommended,
  {
    ...astroStandards.configs.recommended,
  },
];