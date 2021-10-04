import React, {useEffect, useState} from "react";
import Table from '../components/Table/Table';
import { fetchNews } from '../services/fetchApi';
import { REQ_NAME } from '../constants/constants';

export default function NewestPage() {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    fetchNews(pageNum,REQ_NAME.JOBS).then(data => setData(data));
  }, [pageNum])

    return (
    <>
      <Table news={data} />
    </>
  )
}
