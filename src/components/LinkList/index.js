import React from 'react';
import { useSelector } from 'react-redux';
import LinkItem from '../LinkItem';
import { selectLinks } from './linksSlice';
import { LinkListWrapper } from './styled';

export default function LinkList() {
    const links = useSelector(selectLinks);

    return (
        <LinkListWrapper>
            {links.map((link) => (
                <LinkItem key={link.id} link={link} />
            ))}
        </LinkListWrapper>
    )
}
