import React from "react";
import { Footer } from "./common/Footer";
import { Header } from "./common/Header";
import { Main } from "./common/Main";

const TheLayout = () => {
  return (
    <>
      {/* header start */}
      <header>
        <Header />
      </header>
      {/* header end */}

      {/* body start */}
      <main>
        <Main />
      </main>
      {/* body end */}

      {/* footer start */}
      <footer>
        <Footer />
      </footer>
      {/* footer end */}
    </>
  );
};

export default TheLayout;
