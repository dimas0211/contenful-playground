import React from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import client from "../../contentful/index";

import { IArticleFields } from "../../contentful";

import { Container } from "reactstrap";
import BlogCard from "../../components/BlogCard";

const _blog = ({ article }: { article: any }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container className="col-10 col-md-6 col-lg-4 p-2">
      <BlogCard article={article} blogPage={true} />
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articleEntries = await client.getEntries<IArticleFields>({
    content_type: "article",
    select: "fields.slug",
  });

  return {
    paths: articleEntries.items.map((item) => ({
      params: {
        id: item.fields.slug,
      },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params!.id;

  const articleEntries = await client.getEntries<IArticleFields>({
    content_type: "article",
    limit: 1,
    "fields.slug": id,
  });

  const [article] = articleEntries.items;

  return {
    props: {
      article: article,
    },
  };
};

export default _blog;
