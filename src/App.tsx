import Providers from "./config/providers";
import Router from "./config/router";

function App() {
  return (
    <>
      <Providers>
        <Router />
      </Providers>
    </>
  );
}

export default App;
