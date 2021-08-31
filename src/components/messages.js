import styled from "styled-components";
import { uiColors } from "../constants/colors";

export const Message = styled.p`
    color: ${uiColors.hover};
`;

export const ErrorMessage = styled(Message)`
    color: ${uiColors.error};
`;
