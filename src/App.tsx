import "./App.css";
import Router from "./Router";
import { BlogProvider } from "./contexts/BlogContext";

function App() {
  return (
    <BlogProvider>
      <Router />
    </BlogProvider>
  );
}

export default App;
