import React from "react";

import _ from "lodash";
import axios from "axios";

import { Link } from "../components";

import "./styles/link_exchange.sass";

interface IBlogrollQueryResult {
  status: number;
  data: {
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
      favicon: string;
      is_apply?: number;
      is_unsuited?: number;
    }[];
  };
}

export const LinkExchange: React.FunctionComponent = () => {
  const [isQueryFailed, invalidateQuery] = React.useState<boolean | undefined>(
    undefined
  );
  const [dataList, setDataList] = React.useState<
    IBlogrollQueryResult | undefined
  >();

  React.useEffect(() => {
    axios
      .get(`${API_URL}/blogroll/query`)
      .then((data) => {
        setDataList(data.data); // check here.
        invalidateQuery(false);
      })
      .catch((error) => {
        setDataList(error as any);
        invalidateQuery(true);
      });
  }, []);

  const isEmpty = isQueryFailed || dataList?.data?.results?.length === 0;
  const blogrollItems = dataList?.data?.results;

  return (
    <div id="blogrollContent">
      {!isQueryFailed ? (
        !isEmpty ? (
          <div id="blogrollList">
            {blogrollItems?.map((item) => (
              <Link
                title={item.name}
                description={item.mail}
                url={item.link}
                favicon={item.favicon}
              />
            ))}
          </div>
        ) : (
          <>目前本网站尚未有友链加入，就差你了~</>
        )
      ) : _.isUndefined(isQueryFailed) ? (
        <>正在加载请等候。</>
      ) : (
        <>Failed to query info. </>
      )}
    </div>
  );
};

export const Component = LinkExchange;
