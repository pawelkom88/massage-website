import contentfulClient from "./contentfulClient";

export function parseContentfulPolicy(policy) {
  if (!policy) {
    return null;
  }

  return {
    heading: policy.fields.heading || "",
    content: policy.fields.content || "",
  };
}

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
    // image: parseContentfulContentImage(article.fields.image),
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

export function parseContentfulPrices(prices) {
  if (!prices) {
    return null;
  }

  return {
    intro: prices.fields.intro || "",
    price: prices.fields.price,
    duration: prices.fields.duration || null,
    treatmentName: prices.fields.treatmentName || "",
    content: prices.fields.content || "",
  };
}

export async function fetchArticles({ preview }, content_type, parseFunction) {
  const contentful = contentfulClient({ preview });

  const result = await contentful.getEntries({ content_type });

  return result?.items?.map(parseFunction) || [];
}

export async function fetchArticle({ slug, preview, content_type }) {
  const contentful = contentfulClient({ preview });

  const ArticleResult = await contentful.getEntries({
    content_type,
    "fields.slug": slug,
    include: 2,
  });

  return parseContentfulArticle(ArticleResult.items[0]);
}
