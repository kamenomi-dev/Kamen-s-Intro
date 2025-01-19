import { Helmet } from "react-helmet";
import { useRouteError } from "react-router";

import beautify from "json-beautify";

export const Error: React.FunctionComponent = () => {
  const error = useRouteError() as any;
  return (
    <>
      <Helmet>
        <title>
     {   `Kamen's 小窝 — ${error.status}错误！`}
        </title>
      </Helmet>
      <span>
        Oops, You're seemed like using a non-existent path to surf the invaild
        website.
      </span>
      <hr />
      <div>
        <span>Data Info:</span>
        <br />
        <textarea
          title="error info"
          disabled
          // @ts-ignore
          value={beautify(error, null, 4)}
          className="absolute top-12 w-full bottom-0"
        ></textarea>
      </div>
    </>
  );
};
