
import React from 'react';
import { Container, CreatorName, Description, LiveItem } from './styles';

import Link from 'next/link'

export const GalleryItem = ({ estados }) => {
    return <Container>

        <Link href={'/gallery/' + estados.slug}>
            <div>
                <img src={estados.featured_img} />
                <h1>{estados.title_page}</h1>

                <Description>
                    <p>{estados.desc}</p>
                </Description>

                <CreatorName>
                    <p>By {estados.creator_name}</p>
                </CreatorName>

                <LiveItem>
                    <p>Live</p>
                </LiveItem>
            </div>
        </Link>
    </Container>
}