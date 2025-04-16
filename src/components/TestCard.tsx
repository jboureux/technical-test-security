import { Button, Card, Text } from "@shopify/polaris";

interface TestCardProps {
  card: CardType;
}

const TestCard = (props: TestCardProps) => {
  return (
    <Card>
      <Text as="h2" variant="headingLg">
        {props.card.title}
      </Text>
      <Text as="p" variant="bodyMd">
        {props.card.content}
      </Text>
      <Button
        primary={props.card.primaryAction.type === "success"}
        destructive={props.card.primaryAction.type === "destructive"}
        onClick={() => alert("Button clicked!")}
      >
        {props.card.primaryAction.text}
      </Button>
    </Card>
  );
};

export default TestCard;
