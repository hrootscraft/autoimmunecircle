import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import AiStoriesScreen from "./screens/AiStoriesScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import AiDiseasesScreen from "./screens/AiDiseasesScreen";
import CommunityScreen from "./screens/CommunityScreen";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          {/* <AiStoriesScreen />
          <AboutUsScreen />
          <AiDiseasesScreen /> 
          <CommunityScreen /> */}
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
