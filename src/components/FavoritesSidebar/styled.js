import styled from "styled-components";
import { MEDIUM, SMALL } from "../../constants/sizes";
import { grey, uiColors } from "../../constants/colors";

export const Sidebar = styled.aside`
    position: fixed;
    top: 0;
    right: 0;
    width: 20em;
    height: 100%;
    background-color: ${grey.dark};
    cursor: default;
    box-shadow: 0px 0px 14px black;
    overflow-y: auto;

    li {
        padding: 10px;
        
        &:hover {
            color: ${grey.light};
            background: rgba(255, 255, 255, 0.2);

            > a {
                color: #fff;
            }
        }
    }

    ::-webkit-scrollbar {
        width: 10px;
    }
      
    ::-webkit-scrollbar-track {
        background-color: #f1f1f1;
    }
      
    ::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 5px;
    }
      
    ::-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }

    /* Firefox */
    * {
        scrollbar-width: thin;
        scrollbar-color: #888 #f1f1f1;
    }

    /* Edge e IE */
    *::-ms-scrollbar {
        width: 10px;
    }

    *::-ms-scrollbar-track {
        background-color: #f1f1f1;
    }

    *::-ms-scrollbar-thumb {
        background-color: #888;
        border-radius: 5px;
    }

    *::-ms-scrollbar-thumb:hover {
        background-color: #555;
    }
`;

export const SidebarContent = styled.ul`
    overflow-y: auto;
    padding: 0;
    padding: 0;
    margin: 0;
    list-style: none;    
    display: flex;
    flex-direction: column;
`

export const SidebarTitle = styled.header`
    text-align: center;
    color: ${grey.light};
    padding-top: ${SMALL};
    padding-bottom: ${SMALL};
    font-size: 1.2em;
    font-weight: 700;
`

export const SidebarLink = styled.a`
    display: block;
    text-decoration: none;
    color: ${grey.light};
    cursor: pointer;
    font-size: ${MEDIUM};
`

export const CloseSidebarButton = styled.div`
    position: absolute;
    background-color: ${grey.dark};
    color: ${grey.light};
    top: 0;
    right: 0;
    z-index: 99;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.4em;
    cursor: pointer;

    &:before, &:after {
        content: "";
        position: absolute;
        width: 2px;
        height: 20px;
        background-color: ${grey.light};
    }

    &:before {
        transform: rotate(45deg);
    }

    &:after {
        transform: rotate(-45deg);
    }

    &:hover:after, &:hover:before {
        background-color: ${uiColors.hover};
    }
`