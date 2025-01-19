import { FootNote } from "../components";

import "./styles/home.sass";

export const Home: React.FunctionComponent = () => (
  <>
    <div id="front-page">
      <div id="information">
        <h1>
          Hello,
          <br />
          I'm <mark>Kamen</mark>
          <FootNote>/ˈkeɪmɛn/</FootNote>
        </h1>
        <hr className="my-2" />
        <span className="float-right">Blogger & Amateur Windows developer</span>
      </div>
    </div>
  </>
);
