import styled from "styled-components";

interface IProps {
  primary: boolean;
}

export const Container = styled.div<IProps>`
  width: 200px;
  height: 200px;
  background: ${(props) => (props.primary ? "black" : "blue")};
  color: ${({ primary }) => (primary ? "white" : "red")};
`;
