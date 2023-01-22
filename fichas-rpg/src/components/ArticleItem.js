import Link from "next/link";
import articleStyles from "../styles/Article.module.css";

const ArticleItem = ({ article }) => {
  return (
    <Link href={`/article/${article.id}`} className={articleStyles.card}>
      <div className="grid">
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>
      </div>
    </Link>
  );
};

export default ArticleItem;
