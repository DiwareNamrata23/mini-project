import React from "react";
import {
  ClerkProvider,
  SignUp,
  SignIn,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { HelmetProvider } from "react-helmet-async";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import MyFeed from "./components/MyFeedSecion/MyFeed";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/Footer/About";
import Contact from "./components/Footer/Contact";
import BlogSection from "./components/Blogs/BlogSection";
import BlogPageTemplate from "./components/Blogs/BlogPageTemplate";
import BackToTop from "./components/Back-to-top/BackToTop";
import CreateBlog from "./components/Blogs/CreateBlog";
import useOnline from "./components/Offline/useOnline";
import Offline from "./components/Offline/Offline";
import News from "./components/News/News";
import Prediction from "./components/Prediction/Prediction";
import Whatsapp from "./components/Whatsapp/Whatsapp"; // Import the WhatsAppSticky component

// Your Clerk frontend API key
const PUBLISHABLE_KEY = "pk_test_YWRlcXVhdGUta29kaWFrLTUxLmNsZXJrLmFjY291bnRzLmRldiQ";

function App() {
  const isOnline = useOnline();

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <HelmetProvider>
        <Router>
          {isOnline ? (
            <>
              <Header />
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/blogs" element={<BlogSection />} />
                <Route path="/blog/:key" element={<BlogPageTemplate />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/news" element={<News />} />
                <Route path="/signup" element={<SignUp mode={"redirect"} />} />
                <Route path="/login" element={<SignIn mode={"modal"} />} />

                {/* Protected Routes */}
                <Route
                  path="/myfeed"
                  element={
                    <SignedIn>
                      <MyFeed />
                    </SignedIn>
                  }
                />
                <Route
                  path="/create-blog"
                  element={
                    <SignedIn>
                      <CreateBlog />
                    </SignedIn>
                  }
                />
                <Route
                  path="/prediction"
                  element={
                    <SignedIn>
                      <Prediction />
                    </SignedIn>
                  }
                />

                {/* Redirect if signed out */}
                <Route
                  path="*"
                  element={
                    <SignedOut>
                      <RedirectToSignIn />
                    </SignedOut>
                  }
                />
              </Routes>
              <Footer />
              <Whatsapp /> {/* WhatsApp Sticky button */}
            </>
          ) : (
            <Offline />
          )}
          <BackToTop />
        </Router>
      </HelmetProvider>
    </ClerkProvider>
  );
}

export default App;
