import { server } from "../../config";
import ArticleList from "@/components/ArticleList";
import articleStyles from "../styles/Article.module.css";

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div className={articleStyles.cardBox}>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/fichas`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
