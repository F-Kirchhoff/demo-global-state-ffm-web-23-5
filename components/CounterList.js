import styled from "styled-components";
import Counter from "./Counter";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0 0 1rem 0;
  gap: 1rem;
`;

export default function CounterList({ animals, handleAdd, handleSubtract }) {
  return (
    <>
      <h2>Counters</h2>
      <List>
        {animals.map((animal) => {
          return (
            <Counter
              key={animal.id}
              animalName={animal.name}
              count={animal.count}
              onAdd={() => handleAdd(animal.id)}
              onSub={() => handleSubtract(animal.id)}
            />
          );
        })}
        {/* <Counter animalName={"Cats"} />
        <Counter animalName={"Dogs"} />
        <Counter animalName={"Sheep"} />
        <Counter animalName={"Dragons"} /> */}
      </List>
    </>
  );
}
