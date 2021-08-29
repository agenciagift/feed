import styled, { css } from "styled-components";
import { EXTRA_SMALL, getContentWidth, getSpacing, SMALL } from "../constants/sizes";

export const Wrapper = styled.div`
    margin: auto;
    padding-left: ${getSpacing()};
    padding-right: ${getSpacing()};
    max-width: ${getContentWidth()};
`;

export const VerticalLayout = styled.div`
    display: flex;
    flex-direction: column;

    ${({ expand }) => expand && css`
        flex: 1;
    `}

    > * {
        margin-top: ${EXTRA_SMALL};
        margin-bottom: ${EXTRA_SMALL};
    }
`;

export const HorizontalLayout = styled.div`
    display: flex;
    justify-content: space-between;

    ${({ wrap }) => wrap && css`
        flex-wrap: wrap;
    `}

    ${({ breakUnder }) => breakUnder && css`
        @media (max-width: ${breakUnder}px) {
            flex-direction: column;
        }
    `}
`;

export const BasePreviewImage = styled.img`
    align-self: stretch;
    width: 200px;
    object-fit: contain;
    object-position: top;
    margin-top: ${EXTRA_SMALL};
    margin-bottom: ${EXTRA_SMALL};
    margin-right: ${SMALL};
`;
