import type { GetStaticProps } from "next";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import styles from "../styles/Home.module.scss";
import client from "../contentful/index";
import { IMainFields, IArticleFields, IMain, IArticle } from "../contentful";

import { Container, Row, Col, Card, CardHeader, CardText } from "reactstrap";

const Home = ({
  titleProp,
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
  console.log(articles);

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
              const { slug, title, description, url, author, image } =
                article.fields;
              {
                console.log(`url(http:${image?.fields.file.url}`);
              }
              return (
                <Col key={slug}>
                  <Card className="card">
                    <CardHeader className="card-header" tag="h4">
                      {title}
                    </CardHeader>
                    <Container className="card-content d-flex flex-column justify-content-between  p-3">
                      <div className="d-flex justify-content-center">
                        <img
                          className="article-image mx-auto"
                          src={`http:${image?.fields.file.url}` || ""}
                          alt="article-image"
                        />
                      </div>
                      <CardText>{description}</CardText>
                      <CardText className="font-italic">
                        Author: {author}
                      </CardText>
                      <Link href={`/blog/${slug}`}>Read More</Link>
                    </Container>
                  </Card>
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
    limit: 2,
  });

  const [homePage] = home.items;
  const articles = articleEntries.items;

  return {
    props: {
      titleProp: "Visar",
      home: homePage,
      articles: articles,
    },
  };
};

export default Home;
