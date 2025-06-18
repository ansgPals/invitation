import { centerColumnBoxStyles } from "@/styles/modules";
import styled from "@emotion/styled";
export default function Main() {
  return <StyledMainWrapper>hello</StyledMainWrapper>;
}

const StyledMainWrapper = styled.div`
  ${centerColumnBoxStyles};
  position: relative;
  padding: 5rem 0 0;
  max-width: 100vw;
`;
