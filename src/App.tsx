import { AppProvider, Page } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import "./App.css";
import Container from "./components/Container";

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Page title="Verdikt Technical test" fullWidth>
        <Container
          card1={{
            title: "Valider l'opération",
            content: "Souhaitez vous créer cet utilisateur ?",
            primaryAction: { type: "success", text: "Valider" },
          }}
          card2={{
            title: "Supprimer un post",
            content:
              "Souhaitez vous réellement supprimer ce post ? Cette action est définitive.",
            primaryAction: { type: "destructive", text: "Supprimer" },
          }}
          card3={{
            title: "Connexion",
            content: "Entrez votre nom d'utilisateur et mot de passe",
            primaryAction: { type: "success", text: "Se connecter" },
          }}
        />
      </Page>
    </AppProvider>
  );
}

export default App;
