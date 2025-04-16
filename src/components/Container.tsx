import TestCard from "./TestCard";

interface ContainerProps {
  card1?: CardType;
  card2?: CardType;
  card3?: CardType;
}

const Container = (props: ContainerProps) => {
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      {props.card1 && <TestCard card={props.card1} />}
      {props.card2 && <TestCard card={props.card2} />}
      {props.card3 && <TestCard card={props.card3} />}
    </div>
  );
};

export default Container;
