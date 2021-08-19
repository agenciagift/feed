import styled from "styled-components";
import { getSpacing } from "../../constants/sizes";

export const LinkItemWrapper = styled.li`
    margin-bottom: ${getSpacing('l')};
`;

export const LinkItemLink = styled.a`
    word-break: break-word;
`;
