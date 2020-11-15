<script lang="ts">
  import AppNav from "../components/App/AppNav.svelte";
  import AppFooter from "../components/App/AppFooter.svelte";

  export let segment: string;
</script>

<AppNav {segment} />

<main class="flex-grow">
  <slot />
</main>

<AppFooter />
