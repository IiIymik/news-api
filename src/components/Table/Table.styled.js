import css from '@emotion/styled';

export const Container = css.div`
overflow-x:auto;

& > table {
    border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}
`;

export const Head = css.thead``;

export const Tr = css.tr`
&:nth-of-type(even){
  background-color: #f2f2f2
}
`;

export const Th = css.th`
  padding: 8px;
  text-align: center;
  `;

export const Td = css.td`
text-align: center;
padding: 8px;
`;

export const Link = css.a``;

export const Btn = css.button`
   font-size: 1.5rem;
  background: transparent;
  border-color: transparent;
  cursor: pointer;
  color: var(--clr-gold);
  transition: var(--transition);
    `;

export const DownArr = css.span`
`;

export const UpArr = css.span``;
