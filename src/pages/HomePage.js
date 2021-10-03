import React, {useEffect, useState} from "react";
import Table from '../components/Table/Table';
import ButtonLoadMore from '../components/BtnLoadMore/BtnLoadMore';
import { fetchNews } from '../services/fetchApi';

const MAX_PAGE = 10;

export default function HomePage() {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    if (pageNum > MAX_PAGE) return;
    fetchNews(pageNum).then(data => setData(data));
  }, [pageNum])

  const handleLoadMore = () => setPageNum(state => state + 1);

  return (
    <>
      <Table news={data} />
      {pageNum > MAX_PAGE ? <p>The End</p> : <ButtonLoadMore onClick={handleLoadMore}/>}
    </>
  )
}
