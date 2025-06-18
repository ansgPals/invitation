import styled from "@emotion/styled";
import { fadeInUpAnimation } from "./animations";
import { centerColumnBoxStyles } from "./modules";

export const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 0.8rem;
`;

export const StyledErrorMsg = styled.div`
  color: ${(props) => props.theme.colors.error};
  font-size: ${(props) => props.theme.fontSizes.size13};
  margin-top: 0.3rem;
`;

export const StyledOutlineButton = styled.button`
  padding: 0.5rem 1rem;

  border: 0.1rem solid ${(props) => props.theme.colors.grey700};
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.colors.white};
  cursor: pointer;

  :disabled {
    background-color: ${(props) => props.theme.colors.grey400};
    cursor: not-allowed;
  }
`;

export const StyledNormalButton = styled.button`
  padding: 1rem 1.5rem;

  border: unset;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.colors.primary400};
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;

  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.primary300};
  }
  &:disabled {
    background-color: ${(props) => props.theme.colors.grey400};
    cursor: not-allowed;
  }
`;

export const StyledLabel = styled.label`
  font-size: ${(props) => props.theme.fontSizes.size15};
  margin: 0 0.8rem 0 0;
`;

export const StyledMainSection = styled.section<{
  isVisible: boolean;
  isFirstSection?: boolean;
}>`
  width: 100%;
  max-width: calc(100vw - 5rem);
  padding: 3rem 0;
  opacity: ${(props) => (!props.isFirstSection ? 0 : 1)};
  ${(props) => props.isVisible && !props.isFirstSection && fadeInUpAnimation}
`;

export const StyledSectionTitle = styled.div`
  width: 100%;
  margin: 15rem 0 0 0;
  ${centerColumnBoxStyles};
  > p {
    font-size: ${(props) => props.theme.fontSizes.size20};
    color: ${(props) => props.theme.colors.primary400};
  }
  > h2 {
    text-align: center;
    margin: 1rem 0 0;
    font-size: ${(props) => props.theme.fontSizes.size24};
    line-height: 6rem;
    line-height: 3rem;
    font-weight: 600;
  }
`;

export const TooltipWrapper = styled.div`
  position: relative;
  width: 5rem;
  display: inline-block;

  img {
    display: block;
  }

  .tooltip {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s ease;
    position: absolute;
    bottom: -2.2rem;
    left: 50%;
    transform: translateX(calc(-50% - 1rem));
    background-color: ${({ theme }) => theme.colors.grey700};
    color: white;
    font-size: ${(props) => props.theme.fontSizes.size15};
    padding: 0.4rem 0.6rem;
    border-radius: 0.4rem;
    white-space: nowrap;
    z-index: 10;
    pointer-events: none;
  }

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }
`;
