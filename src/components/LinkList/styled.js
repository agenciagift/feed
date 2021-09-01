import styled from "styled-components";
import { grey, uiColors } from "../../constants/colors";
import { EXTRA_LARGE, EXTRA_SMALL, LARGE, MEDIUM, SMALL } from "../../constants/sizes";
import { NakedButton } from "../form";
import { HorizontalLayout } from "../layout";
import { Message } from "../messages";

export const LinkListWrapper = styled.div`
    margin-top: ${EXTRA_LARGE};
    margin-bottom: ${EXTRA_LARGE};
`;

export const LinkListHeader = styled(HorizontalLayout)`
    margin-bottom: ${LARGE};
    padding-bottom: ${EXTRA_SMALL};
    border-bottom: 1px solid ${grey.mid};
`;

export const LinkFilterButton = styled(NakedButton)`
    padding-top: ${EXTRA_SMALL};
    padding-bottom: ${EXTRA_SMALL};
    margin-left: ${MEDIUM};
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
