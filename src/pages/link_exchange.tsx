import React from "react";
import { useQuery } from "react-query";
import { BiAddToQueue } from "react-icons/bi";

import axios from "axios";

import { Button, ErrorDialog, Link } from "../components";
import { useFrameContext } from "../frame";

import "./styles/link_exchange.sass";
import { LinkExchangeDialog } from "./dialogs/link_exchange.dialog";

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
  const frameContext = useFrameContext();

  // Add tabs to toolkits.

  const [isSlideOut, setSlideOut] = React.useState<boolean>(true);

  const toolKey = "Apply-Blogroll";
  React.useEffect(() => {
    frameContext.AddToolKits(
      <Button
        key={toolKey}
        title="申请友情链接"
        aria-label="申请友情链接"
        size="sm"
        icon={
          <BiAddToQueue
            key={toolKey}
            onClick={() => setSlideOut(!isSlideOut)}
          />
        }
        circle
        noResponsive
      />
    );

    return () => {
      frameContext.RemoveToolKits?.(toolKey);
    };
  }, [frameContext, toolKey]);

  // Query from api.

  const {
    data: queryData,
    isLoading,
    isError,
    error,
  } = useQuery<IBlogrollQueryResult, Error>(
    ["blogroll"], // 查询键
    async ({ signal }) => {
      // @ts-ignore 为什么类型不匹配，而且它还有 `signal?: GenericAbortSignal` ？
      const response = await axios.get(`${API_URL}/blogroll/query`, {
        signal,
      });

      return response.data;
    },
    {
      retry: 2,
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
    }
  );

  const isEmpty = !queryData?.data?.results?.length;


  console.log(isSlideOut)
  return (
    <div id="blogrollContent">
      <LinkExchangeDialog slideOut={isSlideOut} onClose={() => setSlideOut(true)}>
      Debug dialog
      </LinkExchangeDialog>
      {isLoading ? (
        <>正在加载，请等候。</>
      ) : isError ? (
        <ErrorDialog>请求列表失败，原因: {error?.message}</ErrorDialog>
      ) : isEmpty ? (
        <>目前本网站尚未有友链加入，就差你了~</>
      ) : (
        <div id="blogrollList">
          {queryData.data?.results?.map((item) => (
            <Link
              key={item.idx}
              title={item.name}
              description={item.mail}
              url={item.link}
              favicon={item.favicon}
            />
          ))}
        </div>
      )}
    </div>
  );
};
