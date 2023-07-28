import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialAnimals = [
  { id: 1, name: "Cats", count: 0 },
  { id: 2, name: "Dogs", count: 10 },
  { id: 3, name: "Sheep", count: 20 },
  { id: 4, name: "Dragons", count: 30 },
];

export default function App({ Component, pageProps }) {
  const [animals, setAnimals] = useState(initialAnimals);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} animals={animals} />
      </Layout>
    </>
  );
}
