import { css } from '@emotion/css';

export const menu = css`
  list-style-type: none;
  display: flex;
  padding: 20px 10px;
  a {
    text-decoration: none;
  }
  button {
    padding: 10px;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  }
`;

export const active = css`
  button {
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
  }
`;
