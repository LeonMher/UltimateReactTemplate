import styled from "styled-components";
// #0070f3,
export const StyledButton = styled.button`
  /* TODO: fix the any type to a proper type */
  background-color: ${(props: any) =>
    props.variant === "outlined" ? "white" : "black"};
  color: ${(props: any) => (props.variant === "outlined" ? "black" : "white")};
  border: ${(props: any) =>
    props.variant === "outlined" ? "black 1.5px solid" : "white"};
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

export const FancyButton = styled(StyledButton)`
  border-radius: 50%;
  background-color: red;
`;
