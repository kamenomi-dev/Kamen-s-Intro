import { FootNote } from "../components";

export const Home: React.FunctionComponent = () => (
  <div
    id="front-page"
    className="
      h-screen
      bg-[url('./image/frontpage-bg-image.png')] 
      bg-no-repeat 
      bg-[length:auto_100%]
      max-md:bg-center
    "
  >
    <div
      id="information"
      className="
        font-segoe
        p-4 rounded-md 
        shadow-2xl shadow-black
        w-[30em] h-40
        max-md:w-[25em]
        absolute 
        top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2
        bg-gray-80/20
        backdrop-blur-md
      "
    >
      <h1 className="text-4xl font-bold">
        Hello, there.
        <br />
        I'm <mark className="bg-gray-40/100">Kamen</mark>
        <FootNote>/ˈkeɪmɛn/</FootNote>
      </h1>
      <hr className="my-2 border-gray-300" />
      <span className="font-segoe-small float-right text-gray-100 text-sm">
        Blogger & Amateur Windows developer
      </span>
    </div>
  </div>
);

Home.displayName = "Page.Home"