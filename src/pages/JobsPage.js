import React, {useEffect, useState} from "react";
import Table from '../components/Table/Table';
import { fetchNews } from '../services/fetchApi';

const MAX_PAGE = 12;
const req = 'jobs';

export default function NewestPage() {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    if (pageNum > MAX_PAGE) return;
    fetchNews(pageNum,req).then(data => setData(data));
  }, [pageNum])

  const handleLoadMore = () => setPageNum(state => state + 1);

    return (
    <>
      <Table news={data} />
    </>
  )
}
