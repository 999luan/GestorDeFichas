import articleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";
const ArticleList = ({ articles }) => {
  return (
    <div className="grid">
      <div>
        {articles.map((article) => (
          <ArticleItem article={article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
