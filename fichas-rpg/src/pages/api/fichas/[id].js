import { fichas } from "../../../../data";

export default function handler({ query: { id } }, res) {
  const filtered = fichas.filter((ficha) => ficha.id === id);
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res
      .status(404)
      .json({ message: `Ficha com o id ${id} não foi encontrada` });
  }
}
