import css from '@emotion/styled';

export const Nav = css.nav`
display:flex;
justify-content: left;
gap: 10px;

& > a {
    display: inline-block;
  text-decoration: none;
  padding: 8px;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;
  border: 1px solid #2a363b;
  border-radius: 10px;
  &:hover{
    color: #2196f3;
    border-color: #2196f3;
  }
}
`;

export const Container = css.div`
padding: 20px;
border-bottom: 3px solid #2a363b;
`;
