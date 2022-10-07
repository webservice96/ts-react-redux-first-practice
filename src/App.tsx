import { useState } from "react";
import TheLayout from "./views/pages/TheLayout";

function App() {
  const [state, setState] = useState();
  return (
    <>
      <TheLayout />
    </>
  );
}

export default App;
