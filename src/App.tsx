import { AppProvider, Button, Card, Page, Text } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import "./App.css";

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Page title="Verdikt Technical test" fullWidth>
        <Card>
          <Text as="h2" variant="headingLg">
            Card title
          </Text>
          <Text as="p" variant="bodyMd">
            This is a really important content, you should read everything if
            you want to really understand what this content means, and if you
            don't read it, it's not very important because I'm writing this just
            to have a very big block of text :)
          </Text>
          <Button primary onClick={() => alert("Button clicked!")}>
            Example button
          </Button>
        </Card>
      </Page>
    </AppProvider>
  );
}

export default App;
