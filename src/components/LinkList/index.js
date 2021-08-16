import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import LinkItem from '../LinkItem';
import { LinkListWrapper } from './styled';

export default function LinkList() {
    const { docs } = useFirestore('links');

    return (
        <LinkListWrapper>
            {docs.map((link) => (
                <LinkItem key={link.id} link={link} />
            ))}
        </LinkListWrapper>
    )
}
