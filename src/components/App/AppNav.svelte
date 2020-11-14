<script lang="ts">
  export let segment: string;

  const links: { text: string; slug: string; segment: string }[] = [
    {
      text: "Home",
      slug: ".",
      segment: undefined,
    },
    {
      text: "About",
      slug: "about",
      segment: "about",
    },
    {
      text: "Blog",
      slug: "blog",
      segment: "blog",
    },
  ];
</script>

<style lang="postcss">
  [aria-current] {
    @apply text-secondary;
  }
</style>

<header class="body-font">
  <div
    class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a
      rel="prefetch"
      href="/"
      class="flex title-font font-medium items-center text-gray-700 mb-4 md:mb-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        class="w-10 h-10 text-white p-2 bg-secondary rounded-full"
        viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span class="ml-3 text-xl">geoffdick</span>
    </a>
    <nav
      class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      {#each links as link}
        <a
          aria-current={segment === link.segment ? 'page' : undefined}
          rel="prefetch"
          href={link.slug}
          class="text-dark-700 opacity-100 font-normal mr-5 hover:opacity-75 .transition-opacity duration-300 ease-in-out">{link.text}</a>
      {/each}
    </nav>
  </div>
</header>
