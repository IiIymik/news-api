import React from "react";
import {Container, Head,Tr,Th,Td,Link} from './Table.styled';

export default function Table({news}) {
  return (
    <Container>
    <table>
  <Head>
    <Tr>
      <Th>Time added</Th>
      <Th>Title</Th>
      <Th>Domain</Th>
    </Tr>
  </Head>

    <tbody>
          {news && news.map(el => (
    <Tr key={el.id}>
      <Td>{el.time_ago}</Td>
      <Td>{el.title}</Td>
      <Td><Link href={el.url}>{el.domain}</Link></Td>
    </Tr>
          ))}
  </tbody>
</table>
</Container>
  )
}
