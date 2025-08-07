import Layout from "@/core/components/layout/Layout";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/core/components/ui/button";

import { format } from "date-fns";
import { useEffect } from "react";
import { Separator } from "@/core/components/ui/separator";
import { useFetchArticle } from "../hooks/useFetchArticle";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/core/components/ui/avatar";
import { initials } from "@/core/lib/utils";
import { Badge } from "@/core/components/ui/badge";

const ArticleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: article } = useFetchArticle({ id });

  console.log({ article });

  // Get related articles from the same category
  // const relatedArticles = articles
  //   .filter(
  //     (a) => a.category.id === article?.category.id && a.id !== article?.id
  //   )
  //   .slice(0, 3);

  useEffect(() => {
    // Scroll to top when article changes
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/articles">Back to Blog</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="bg-gradient-to-b from-psyche-50 to-background pt-12">
        <div className="container max-w-4xl">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/articles"
              className="text-sm text-muted-foreground hover:text-foreground flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1">
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Blog
            </Link>

            {/* <div className="flex gap-2 items-center text-sm text-muted-foreground mb-3">
              <Link
                to={`/categories/${article.category.slug}`}
                className="hover:text-foreground transition-colors">
                {article.category.name}
              </Link>
              <span>•</span>
              <span>{article.readTime} min read</span>
            </div> */}

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {article.title}
            </h1>

            <div className="flex items-center gap-3 mb-8">
              <a
                href={`mailto:${article.author.email}`}
                className="flex items-center gap-2 group">
                <Avatar className="h-12 w-12 rounded-full overflow-hidden">
                  <AvatarImage
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="h-full w-full object-cover"
                  />
                  <AvatarFallback>
                    <p className="text-lg font-medium group-hover:text-psyche-300 transition-colors">
                      {initials(article.author.name)}
                    </p>
                  </AvatarFallback>
                </Avatar>

                <div>
                  <p className="font-medium group-hover:text-psyche-300 transition-colors">
                    {article.author.email}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {format(new Date(article.created_at), "MMMM d, yyyy")}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {article.article_tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8 ">
              {article.article_tags.map((tag) => (
                <Badge className="text-sm" key={tag.tag.id}>
                  {tag.tag.label}
                </Badge>
              ))}
            </div>
          )}

          <Separator className="my-8" />
        </div>
      </article>

      <div className="container max-w-4xl">
        <div className="mb-10 rounded-lg overflow-hidden">
            <img
              src={article.cover_img}
              alt={article.title}
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </div>

        <div
          className="article-content prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}></div>

        <Separator className="my-8" />

        <div className="flex items-center gap-4 mb-8">
          <a
            href={`mailto:${article.author.email}`}
            className="flex items-center gap-2 group">
            <Avatar className="h-12 w-12 rounded-full overflow-hidden">
              <AvatarImage
                src={article.author.avatar}
                alt={article.author.name}
                className="h-full w-full object-cover"
              />
              <AvatarFallback>
                <p className="text-lg font-medium group-hover:text-psyche-300 transition-colors">
                  {initials(article.author.name)}
                </p>
              </AvatarFallback>
            </Avatar>
            <span className="group-hover:underline">
              {article.author.email}
            </span>
          </a>
        </div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <CategoryList categories={article.article_categories} />

              {relatedArticles.length > 0 && (
                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Related Articles
                    </h3>
                    <div className="space-y-6">
                      {relatedArticles.map((related) => (
                        <div key={related.id} className="group">
                          <Link
                            to={`/articles/${related.slug}`}
                            className="flex gap-3">
                            <div className="h-16 w-16 rounded overflow-hidden flex-shrink-0">
                              <img
                                src={related.coverImage}
                                alt={related.title}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium text-sm group-hover:text-psyche-300 transition-colors line-clamp-2">
                                {related.title}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                {related.readTime} min read
                              </p>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default ArticleDetailPage;
