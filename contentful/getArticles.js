import contentfulClient from "./contentfulClient";
import { parseContentfulContentImage } from "./contentImage";

export function parseContentfulArticle(article) {
  if (!article) {
    return null;
  }

  return {
    title: article.fields.title || "",
    slug: article.fields.slug,
    description: article.fields.description || null,
    duration: article.fields.duration || null,
    price: article.fields.price || null,
    image: parseContentfulContentImage(article.fields.image),
  };
}
export function parseContentfulOpeningHours(hours) {
  if (!hours) {
    return null;
  }

  return {
    day: hours.fields.day || "",
    start: hours.fields.start,
    finish: hours.fields.finish || null,
  };
}

// A function to fetch all blog posts.
// Optionally uses the Contentful content preview.

export async function fetchArticles({ preview }, content_type) {
  const contentful = contentfulClient({ preview });

  const ArticlesResult = await contentful.getEntries({
    content_type,
    // include: 2,
    // order: [order],
  });

  return ArticlesResult.items.map(hours => parseContentfulOpeningHours(hours));

  // return ArticlesResult.items.map(article => parseContentfulArticle(article));
}

// A function to fetch a single blog post by its slug.
// Optionally uses the Contentful content preview.

export async function fetchArticle({ slug, preview, content_type }) {
  const contentful = contentfulClient({ preview });

  const ArticleResult = await contentful.getEntries({
    content_type,
    "fields.slug": slug,
    include: 2,
  });

  return parseContentfulArticle(ArticleResult.items[0]);
}
