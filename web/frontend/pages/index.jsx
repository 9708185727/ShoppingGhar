import {

  Page,
  Layout,
 
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";



export default function HomePage() {
  const { t } = useTranslation();
  return (
    <Page narrowWidth>
      <TitleBar title="Home Page" />
      <Layout>
       <Layout.Section className="bg-blue w-4 h-4">
<h1>this is shopping ghar</h1>
       </Layout.Section>
      
      </Layout>
    </Page>
  );
}
