import { useRouteError } from "react-router-dom";
import { Navigation } from "../layouts/Navigation";
import { Footer } from "../layouts/Footer";
import "../styles/error.css";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div className="wrapper">
        <Navigation page="error" />
        <div className="error">
          <h1>Hmm, something is not quite right...</h1>
          <p>
            Either we couldn't find what you were looking for, or we are
            experiencing an unexpected difficulty.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
