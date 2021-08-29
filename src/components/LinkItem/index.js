import React from 'react';
import { HorizontalLayout, VerticalLayout } from '../layout';
import InteractionToolBar from './InteractionToolBar';
import { LinkItemLink, LinkItemWrapper, LinkPreviewImage } from './styled';

export default function LinkItem({ link }) {
    return (
        <LinkItemWrapper key={link.id}>
            <HorizontalLayout>
                {link.image && <LinkPreviewImage src={link.image} alt={link.title} />}

                <VerticalLayout expand>
                    <p>
                        <LinkItemLink
                            href={link.url}
                            target="_blank"
                            rel="noreferrer">
                            {link.title || link.url}
                        </LinkItemLink>
                    </p>
                    <p>{link.description}</p>

                    <InteractionToolBar {...link} />
                </VerticalLayout>
            </HorizontalLayout>
        </LinkItemWrapper>
    );
}
