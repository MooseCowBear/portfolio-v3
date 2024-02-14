import "./App.css";
import Router from "./Router";
import { BlogProvider } from "./contexts/BlogContext";

function App() {
  console.log("App component is being rendered");
  return (
    <BlogProvider>
      <Router />
    </BlogProvider>
  );
}

export default App;
