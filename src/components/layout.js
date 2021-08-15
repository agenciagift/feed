import styled from "styled-components";
import { getContentWidth } from "../constants/sizes";

export const Wrapper = styled.div`
    max-width: ${getContentWidth()};
    margin: auto;
`;