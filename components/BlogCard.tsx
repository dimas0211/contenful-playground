import type { GetStaticProps } from "next";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import { IArticle } from "../contentful";

import { Container, Card, CardHeader, CardText } from "reactstrap";

const BlogCard = ({
  article,
  blogPage,
}: {
  article: IArticle;
  blogPage: boolean;
}) => {
  const { slug, title, description, url, author, image } = article.fields;

  return (
    <Card className="card">
      <CardHeader className="card-header" tag="h4">
        {title}
      </CardHeader>
      <Container className="card-content d-flex flex-column justify-content-between  p-3">
        <div className="d-flex justify-content-center">
          <img
            className="article-image mx-auto"
            src={`http:${image?.fields.file.url}`}
            alt="article-image"
          />
        </div>
        <CardText>{description}</CardText>
        <CardText className="font-italic">Author: {author}</CardText>
        {blogPage ? (
          <Link href={url}>Open Source Article</Link>
        ) : (
          <Link href={`/blog/${slug}`}>Read More </Link>
        )}
      </Container>
    </Card>
  );
};

export default BlogCard;
