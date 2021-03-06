import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

import { HelperProvider } from './../services';
import FavoriteMedia from './FavoriteMedia';


const CardPosterImage = (props) => {
    const { mediaType, data: { id, poster_path, overview }  } = props;
    const linkMedia = `/details/${mediaType}/${id}`;
    return (
        <>
            <FavoriteMedia media={ props.data } mediaType={ mediaType } />
            <Figure>
                <Link to={ linkMedia }>
                    <img src={ HelperProvider.backdropImage(poster_path) } alt={ HelperProvider.title(props.data) } />
                </Link>
            </Figure>
            <Overview>
                <h3><Link to={ linkMedia }>{ HelperProvider.title(props.data).substring(0, 20) }</Link></h3>
                <p><Link to={ linkMedia }>{ overview.substring(0, 140) }</Link></p>
            </Overview>
        </>
    );
};

const Figure = styled.figure`
    float: left;
    margin-right: 10px;
    display: block;
    width: 100px;
`;

const Overview = styled.div`
    color: #777;
    a {
        color: #777;
    }
    p {
        overflow: hidden;
    }
    & h3::after, & p::after {
        content: "...";
    }
`;

export default CardPosterImage;
