import React from 'react';
import { HorizontalLayout, VerticalLayout } from '../layout';
import InteractionToolBar from './InteractionToolBar';
import { LinkItemLink, LinkItemWrapper, LinkMetadata, LinkPreviewImage } from './styled';

const ROW_BREAKPOINT = 600;

const getDate = (link) => {
    if (!(link?.createdAt?.toDate && link.createdAt.toDate instanceof Function)) {
        return new Date(0);
    }
    return link.createdAt.toDate();
};

export default function LinkItem({ link }) {
    const date = getDate(link);

    return (
        <LinkItemWrapper key={link.id}>
            <HorizontalLayout breakUnder={ROW_BREAKPOINT}>
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
                    <LinkMetadata>
                        <strong>{link.author?.displayName}</strong>
                        <span>{` em ${date.toLocaleString()}`}</span>
                    </LinkMetadata>

                    {link.description?.split('\n').filter((s) => s).map((text) => (
                        <p>{text}</p>
                    ))}

                    <InteractionToolBar {...link} />
                </VerticalLayout>
            </HorizontalLayout>
        </LinkItemWrapper>
    );
}
