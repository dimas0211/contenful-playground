import type { GetStaticProps } from "next";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Head from "next/head";
import client from "../contentful/index";
import { IMainFields, IArticleFields, IMain, IArticle } from "../contentful";

import { Container, Row, Col, Card, CardHeader, CardText } from "reactstrap";
import BlogCard from "../components/BlogCard";

const Home = ({
  home,
  articles,
}: {
  titleProp: String;
  home: IMain;
  articles: IArticle[];
}) => {
  const {
    fields: { title, description, background },
  } = home;

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <main className="center">
        <div
          className="text-center p-3"
          style={{
            background: `url(http:${background?.fields.file.url}) no-repeat center / cover`,
            minHeight: 300,
          }}
        >
          <h1 className="text-white mt-4">{title}</h1>
          <div className="text-white">
            {description && documentToReactComponents(description)}
          </div>
        </div>
        <Container className="p-3">
          <Row>
            {articles.map((article: IArticle) => {
              const { slug } = article.fields;

              return (
                <Col key={slug} className="p-2 col-12 col-md-6 col-lg-4">
                  <BlogCard article={article} blogPage={false} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </main>

      <footer></footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const home = await client.getEntries<IMainFields>({
    content_type: "main",
    limit: 1,
  });

  const articleEntries = await client.getEntries<IArticleFields>({
    content_type: "article",
  });

  const [homePage] = home.items;
  const articles = articleEntries.items;

  return {
    props: {
      home: homePage,
      articles: articles,
    },
  };
};

export default Home;
