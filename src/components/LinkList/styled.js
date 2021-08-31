import styled from "styled-components";
import { uiColors } from "../../constants/colors";
import { EXTRA_LARGE, SMALL } from "../../constants/sizes";
import { NakedButton } from "../form";
import { Message } from "../messages";

export const LinkListWrapper = styled.div`
    margin-top: ${EXTRA_LARGE};
    margin-bottom: ${EXTRA_LARGE};
`;

export const LinkListElement = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const NextButton = styled(NakedButton)`
    display: block;
    width: 100%;
    margin: 0;
    padding: ${SMALL};
    text-align: center;
    color: ${uiColors.idle};
`;

export const NextLoadingMessage = styled(Message)`
    margin: 0;
    padding: ${SMALL};
    text-align: center;
`;
