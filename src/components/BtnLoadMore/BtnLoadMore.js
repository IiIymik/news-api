import React from 'react';
import { Btn, Container } from './BtnLoadMore.styled';

function ButtonLoadMore({onClick}) {
  const handelLoadMore = e => {
window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth',
});
    onClick();
  };

  return (
    <Container>
      <Btn type='button' onClick={handelLoadMore}>Load More</Btn>
    </Container>
  )
}

export default ButtonLoadMore
