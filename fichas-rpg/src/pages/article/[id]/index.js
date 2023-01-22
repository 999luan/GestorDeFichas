import { useRouter } from "next/router";
import { server } from "../../../../config";
import articleStyles from "../../../styles/Article.module.css";

import Link from "next/link";
const article = ({ article }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <article data-theme="light" contentEditable="true">
      <div className={articleStyles.ficha}>
        <h1 className={articleStyles.fichaTitle}> {article.title}</h1>
        <p className={articleStyles.fichaLabel}>
          Nome:{" "}
          <span className={articleStyles.fichaValue}>{article.body.name}</span>
        </p>
        <p className={articleStyles.fichaLabel}>
          Classe:{" "}
          <span className={articleStyles.fichaValue}>{article.body.class}</span>
        </p>
        <p className={articleStyles.fichaLabel}>
          Raça:{" "}
          <span className={articleStyles.fichaValue}>{article.body.race}</span>
        </p>
        <p className={articleStyles.fichaLabel}>
          Alinhamento:{" "}
          <span className={articleStyles.fichaValue}>
            {article.body.alignment}
          </span>
        </p>
        <p className={articleStyles.fichaSection}>Atributos:</p>
        <p className={articleStyles.fichaLabel}>
          Força:{" "}
          <span className={articleStyles.fichaValue}>
            {article.body.attributes.strength}
          </span>
        </p>
        <p className={articleStyles.fichaLabel}>
          Destreza:{" "}
          <span className={articleStyles.fichaValue}>
            {article.body.attributes.dexterity}
          </span>
        </p>
        <p className={articleStyles.fichaLabel}>
          Constituição:{" "}
          <span className={articleStyles.fichaValue}>
            {article.body.attributes.constitution}
          </span>
        </p>
        <p className={articleStyles.fichaLabel}>
          Inteligência:{" "}
          <span className={articleStyles.fichaValue}>
            {article.body.attributes.intelligence}
          </span>
        </p>
        <p className={articleStyles.fichaLabel}>
          Sabedoria:{" "}
          <span className={articleStyles.fichaValue}>
            {article.body.attributes.wisdom}
          </span>
        </p>
        <p className={articleStyles.fichaLabel}>
          Carisma:{" "}
          <span className={articleStyles.fichaValue}>
            {article.body.attributes.charisma}
          </span>
        </p>
        <p className={articleStyles.fichaLabel}>
          Habilidades:{" "}
          <span className={articleStyles.fichaValue}>
            {article.body.skills.join(", ")}
          </span>
        </p>
        <p className={articleStyles.fichaLabel}>
          Itens:{" "}
          <span className={articleStyles.fichaValue}>
            {article.body.items.join(", ")}
          </span>
        </p>
        <p className={articleStyles.fichaLabel}>
          Descrição:{" "}
          <span className={articleStyles.fichaValue}>
            {article.body.description}
          </span>
        </p>
      </div>
      <Link href="/" role="button">
        {" "}
        Voltar
      </Link>
    </article>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/fichas/${context.params.id}`);

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/fichas/`);
  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
export default article;
