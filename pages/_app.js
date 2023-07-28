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

  function handleAdd(animalId) {
    const updatedAnimals = animals.map((animal) => {
      if (animal.id === animalId) {
        // every time we want to change a value of a state, we need to create a new object
        // we must not mutate / change the existing object
        const updatedAnimal = {
          ...animal,
          count: animal.count + 1,
        };
        return updatedAnimal;
      } else {
        return animal;
      }
    });

    setAnimals(updatedAnimals);
  }

  function handleSubtract(animalId) {
    const updatedAnimals = animals.map((animal) => {
      if (animal.id === animalId) {
        const updatedAnimal = {
          ...animal,
          count: animal.count > 0 ? animal.count - 1 : 0,
        };
        return updatedAnimal;
      } else {
        return animal;
      }
    });

    setAnimals(updatedAnimals);
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          animals={animals}
          handleAdd={handleAdd}
          handleSubtract={handleSubtract}
        />
      </Layout>
    </>
  );
}
