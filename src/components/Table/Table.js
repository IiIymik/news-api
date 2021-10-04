import React, {useEffect, useState} from "react";
import {Container, Head,Tr,Th,Td,Link, Btn, DownArr } from './Table.styled';

export default function Table({news}) {
  const [data, setData] = useState(null);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    if (!news) return;
    const arr = sortedByData(news)
    setIsSorted(true);
    setData(arr)
  }, [news])

  const handleSortBtnData = (e) => {
    const currentBtn = e.currentTarget;
    currentBtn.classList.toggle('btn-transition');
    sortedByData(data);
    setIsSorted(state => !state)
  }

  const handleSortBtnTitle = (e) => {
    const currentBtn = e.currentTarget;
    currentBtn.classList.toggle('btn-transition');
    sortedByTitle(data);
    setIsSorted(state => !state);
  }

  const sortedByData = (data) => {
    if (isSorted) {
      return data.sort((a, b) => a.time - b.time);
    } else {
      return data.sort((a, b) => b.time - a.time);
    }
  }

  const sortedByTitle = (data) => {
    if (isSorted) {
      return data.sort((a, b) =>{
    return ('' + a.title).localeCompare(b.title);
})
    } else {
      return data.sort((a, b) =>{
    return ('' + b.title).localeCompare(a.title);
})
    }
  }

  return (
    <Container>
    <table>
  {/* <Head> */}
    <Tr>
      <Th className="column">Time added  <Btn type="button" onClick={handleSortBtnData} >
                <DownArr>
                  <i className="fas fa-angle-down"></i>
                </DownArr>
            </Btn>
            </Th>
      <Th>Title<Btn type="button" onClick={handleSortBtnTitle} >
                <DownArr>
                  <i className="fas fa-angle-down"></i>
                </DownArr>
            </Btn></Th>
      <Th className="column">Domain</Th>
    </Tr>
  {/* </Head> */}

    {/* <tbody> */}
          {data && data.map(el => (
    <Tr key={el.id}>
      <Td className="column">{el.time_ago}</Td>
      <Td><Link href={el.url}>{el.title}</Link></Td>
      <Td className="column"><Link href={el.url}>{el.domain}</Link></Td>
    </Tr>
          ))}
  {/* </tbody> */}
</table>
</Container>
  )
}
