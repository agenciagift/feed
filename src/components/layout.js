import styled from "styled-components";
import { getContentWidth, getSpacing } from "../constants/sizes";

export const Wrapper = styled.div`
    margin: auto;
    padding-left: ${getSpacing()};
    padding-right: ${getSpacing()};
    max-width: ${getContentWidth()};
`;

export const VerticalLayout = styled.div`
    display: flex;
    flex-direction: column;

    > * {
        margin-top: ${getSpacing('xs')};
        margin-bottom: ${getSpacing('xs')};
    }
`;

export const HorizontalLayout = styled.div`
    display: flex;
    justify-content: space-between;
`;
