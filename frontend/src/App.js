import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AiStoriesScreen from "./screens/AiStoriesScreen";
import AiStoryScreen from "./screens/AiStoryScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import AiDiseasesScreen from "./screens/AiDiseasesScreen";
import CommunityScreen from "./screens/CommunityScreen";
import HomeScreen from "./screens/HomeScreen";
import PostStoryScreen from "./screens/PostStoryScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import UserListScreen from "./screens/UserListScreen";
import UserStoryEditScreen from "./screens/UserStoryEditScreen";
import ScrollToTop from "./scrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/community" element={<CommunityScreen />} />
              <Route path="/about-ai" element={<AiDiseasesScreen />} />
              <Route path="/about-us" element={<AboutUsScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/users/:id" element={<PostStoryScreen />} />
              <Route path="/ai-stories">
                <Route path=":id" element={<AiStoryScreen />} />
                <Route index element={<AiStoriesScreen />} />
                <Route path="page/:pageNumber" element={<AiStoriesScreen />} />
              </Route>

              <Route path="/admin">
                <Route index element={<UserListScreen />} />
                <Route path="page/:pageNumber" element={<UserListScreen />} />
                <Route path="user/:id/edit" element={<UserStoryEditScreen />} />
              </Route>

              <Route path="*" element={<p>Not found.</p>} />
            </Routes>
          </Container>
        </main>
        <Footer />
    </Router>
  );
};

export default App;
