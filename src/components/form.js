import styled from "styled-components";
import { getSpacing } from "../constants/sizes";

export const BaseInput = styled.input`
    padding: ${getSpacing('s')};
`;

export const BaseButton = styled.button`
    padding: ${getSpacing('s')};
`;