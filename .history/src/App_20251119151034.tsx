import { Route, Switch } from "wouter";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Research from "./pages/Research";
import Team from "./pages/Team";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/obj" component={About} />
          <Route path="/research" component={Research} />
          <Route path="/team" component={Team} />
          <Route path="/publications" component={Publications} />
          <Route path="/contact" component={Contact} />

          {/* 404 Route */}
          <Route>
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                <p className="text-gray-600">Page not found</p>
              </div>
            </div>
          </Route>
        </Switch>
      </div>

      <Footer />
    </div>
  );
}
