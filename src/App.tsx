import "./App.css";
import Router from "./Router";
import { BlogProvider } from "./contexts/BlogContext";
import { ModeProvider } from "./contexts/ModeContext";

function App() {

  return (
    <ModeProvider>
      <BlogProvider>
        <Router />
      </BlogProvider>
    </ModeProvider>
  );
}

export default App;
