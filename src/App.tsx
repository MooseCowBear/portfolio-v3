import Router from "./Router";
import { BlogProvider } from "./contexts/BlogContext";
import { ModeProvider } from "./contexts/ModeContext";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <ModeProvider>
        <BlogProvider>
          <Router />
        </BlogProvider>
      </ModeProvider>
    </HelmetProvider>
  );
}

export default App;
