import Link from "next/link";
import articleStyles from "../styles/Article.module.css";

const ArticleItem = ({ article }) => {
  return (
    <Link href={`/article/${article.id}`} className={articleStyles.card}>
      <article>
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>
      </article>
    </Link>
  );
};

export default ArticleItem;
