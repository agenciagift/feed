import styled from "styled-components";
import { getSpacing } from "../../constants/sizes";

export const ImagePreview = styled.img`
    align-self: stretch;
    width: 200px;
    object-fit: contain;
    object-position: top;
    margin-top: ${getSpacing('xs')};
    margin-bottom: ${getSpacing('xs')};
    margin-right: ${getSpacing('s')};
`;
