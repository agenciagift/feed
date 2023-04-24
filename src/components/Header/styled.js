import styled from "styled-components";
import { grey } from "../../constants/colors";
import { MEDIUM, SMALL } from "../../constants/sizes";
import { Wrapper } from "../layout";

export const HeaderContainer = styled.header`
    padding-top: ${SMALL};
    padding-bottom: ${SMALL};
    background-color: ${grey.light};
`;

export const HeaderWrapper = styled(Wrapper)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${MEDIUM};
`;
