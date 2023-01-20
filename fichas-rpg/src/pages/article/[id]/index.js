import { useRouter } from "next/router";
import { server } from "../../../../config";
import Link from "next/link";
const article = ({ article }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <article>
      <h1> {article.title}</h1>
      <p>{article.body}</p>
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
