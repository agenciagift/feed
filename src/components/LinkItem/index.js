import React from 'react'
import { LinkItemLink, LinkItemWrapper } from './styled';

export default function LinkItem({ link }) {
    return (
        <LinkItemWrapper key={link.id}>
            <p>
                <strong>
                    <LinkItemLink
                        href={link.url}
                        target="_blank"
                        rel="noreferrer">
                        {link.title || link.url}
                    </LinkItemLink>
                </strong>
            </p>
            <p>{link.description}</p>
        </LinkItemWrapper>
    );
}
