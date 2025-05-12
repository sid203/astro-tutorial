export async function getUniqueTags() {
    const allPosts = Object.values(import.meta.glob('../pages/posts/*.md', { eager: true }));
    const listTags = allPosts.flatMap((post) => post.frontmatter.tags)
    const uniqueTags = [...new Set(listTags)];
  
    return uniqueTags
  }