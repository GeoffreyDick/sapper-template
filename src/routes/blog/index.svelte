<script context="module" lang="ts">
  export function preload() {
    return this.fetch(`blog.json`)
      .then((r: { json: () => any }) => r.json())
      .then((posts: { slug: string; title: string; html: any }[]) => {
        return { posts };
      });
  }
</script>

<script lang="ts">
  import type { Post } from "../../../types/index";

  import BlogSnippet from "../../components/Blog/BlogSnippet.svelte";

  export let posts: Post[];
</script>

<style>
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="container px-5 py-20">
  <h1>Recent posts</h1>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
						tell Sapper to load the data for the page as soon as
						the user hovers over the link or taps it, instead of
						waiting for the 'click' event -->
    <!-- <li><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></li> -->
    <BlogSnippet {post} />
  {/each}
</div>
