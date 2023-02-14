import styled from 'styled-components';

export const BtnStyle = styled.button`
  border: 6px solid ${({ colorBtn }) => colorBtn};
  filter: drop-shadow(0 0 15px ${({ colorBtn }) => colorBtn});

  &:hover {
    filter: drop-shadow(0 0 15px ${({ colorBtn }) => colorBtn}) drop-shadow(0 0 50px ${({ colorBtn }) => colorBtn})
      contrast(2) brightness(2);
  }

  * {
    color: ${({ colorBtn }) => colorBtn};
  }
`;
