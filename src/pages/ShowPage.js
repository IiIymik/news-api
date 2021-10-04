import React, {useEffect, useState} from "react";
import Table from '../components/Table/Table';
import ButtonLoadMore from '../components/BtnLoadMore/BtnLoadMore';
import { fetchNews } from '../services/fetchApi';
import { MAX_PAGE, REQ_NAME } from "../constants/constants";

export default function NewestPage() {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    if (pageNum > MAX_PAGE.S) return;
    fetchNews(pageNum,REQ_NAME.SHOW).then(data => setData(data));
  }, [pageNum])

  const handleLoadMore = () => setPageNum(state => state + 1);

    return (
    <>
      <Table news={data} />
      {pageNum > MAX_PAGE.S ? <p>The End</p> : <ButtonLoadMore onClick={handleLoadMore}/>}
    </>
  )
}
