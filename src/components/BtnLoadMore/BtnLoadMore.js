import React from 'react';
import { Btn } from './BtnLoadMore.styled';

function ButtonLoadMore({onClick}) {
  const handelLoadMore = e => {
window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth',
});
    onClick();
  };

  return (
    <Btn type='button' onClick={handelLoadMore}>Load More</Btn>
  )
}

export default ButtonLoadMore
