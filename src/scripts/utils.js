import { getCollection } from "astro:content";

export async function getUniqueTags() {
    const allPosts = await getCollection("blog");
    const listTags = allPosts.flatMap((post) => post.data.tags)
    const uniqueTags = [...new Set(listTags)];
  
    return uniqueTags
  }