import React from "react";

import axios from "axios";

interface IBlogrollQueryResult {
  counts: {
    all: number;
    current: {
      page: number;
      size: number;
    };
  };
  results: {
    idx: number;
    mail: string;
    name: string;
    link: string;
    is_apply?: number;
    is_unsuited?: number;
  }[];
}

export const LinkExchange: React.FunctionComponent = () => {
  const [isQueryFailed, invalidateQuery] = React.useState<boolean>(false);
  const [dataList, setDataList] = React.useState<
    IBlogrollQueryResult | undefined
  >();

  React.useEffect(() => {
    axios
      .get("https://api.kamen-dev.cv/blogroll/query")
      .then((data) => {
        setDataList(data.data.data); // check here.
        invalidateQuery(false);
      })
      .catch((error) => {
        setDataList(error as any);
        invalidateQuery(true);
      });
  }, []);

  const isShowEmpty = isQueryFailed || dataList?.results?.length === 0;
  const blogrollItems = dataList?.results;

  return (
    <>
      {isShowEmpty && "暂无数据！"}
      <ul>
        {blogrollItems?.map((item) => (
          <li>{item.idx}</li>
        ))}
      </ul>
    </>
  );
};
