import React from 'react';
import Bookmark from '../../assets/icons/Bookmark';
import Copy from '../../assets/icons/Copy';
import Heart from '../../assets/icons/Heart';
import { HorizontalLayout, VerticalLayout } from '../layout';
import { LinkInteractionButton, LinkItemLink, LinkItemWrapper, LinkPreviewImage } from './styled';

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
                    <HorizontalLayout style={{ justifyContent: 'flex-end' }}>
                        <LinkInteractionButton
                            title="Marcar como gostei"
                            aria-label="Marcar como gostei"
                        >
                            <Heart />
                        </LinkInteractionButton>
                        <LinkInteractionButton
                            title="Salvar para a minha lista"
                            aria-label="Salvar para a minha lista"
                        >
                            <Bookmark />
                        </LinkInteractionButton>
                        <LinkInteractionButton
                            title="Copiar o endereço do link"
                            aria-label="Copiar o endereço do link"
                        >
                            <Copy />
                        </LinkInteractionButton>
                    </HorizontalLayout>
                </VerticalLayout>
            </HorizontalLayout>
        </LinkItemWrapper>
    );
}
