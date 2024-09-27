import { StyledContainer } from "./styled";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
