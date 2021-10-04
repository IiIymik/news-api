import React, {useEffect, useState} from "react";
import Table from '../components/Table/Table';
import ButtonLoadMore from '../components/BtnLoadMore/BtnLoadMore';
import { fetchNews } from '../services/fetchApi';
import { MAX_PAGE } from "../constants/constants";


export default function HomePage() {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    if (pageNum > MAX_PAGE.M) return;
    fetchNews(pageNum).then(data => setData(data));
  }, [pageNum])

  const handleLoadMore = () => setPageNum(state => state + 1);

  return (
    <>
      <Table news={data} />
      {pageNum > MAX_PAGE.M ? <p>The End</p> : <ButtonLoadMore onClick={handleLoadMore}/>}
    </>
  )
}
