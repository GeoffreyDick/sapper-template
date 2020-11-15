<script lang="ts">
  import type { Post } from "../../../types/index";

  export let post: Post;
</script>

<style lang="postcss">
  .blog-snippet {
    @apply border-t-2;
  }

  .blog-snippet:first-of-type {
    @apply border-t-0;
  }
</style>

<div class="blog-snippet py-8">
  <h2 class="text-primary font-bold text-xl">
    <a
      rel="prefetch"
      href="/blog/{post.slug}"
      class="hover:underline">{post.title}</a>
  </h2>
  <p class="leading-relaxed">
    Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up
    snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies,
    poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland
    craft beer.
  </p>
</div>
