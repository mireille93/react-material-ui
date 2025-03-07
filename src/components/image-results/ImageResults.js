import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import { Link } from 'react-router-dom';


class ImageResults extends Component {

    render() {
        let imageListContent;
        const { data } = this.props
        if(data){
            imageListContent = (
                <GridList cols={3}>
                {data.map(img => (
                    <GridTile
                    title={img.name}
                    key={img.summary}
                    subtitle={
                        <span>
                            <strong>{ img.genres }</strong>
                        </span>
                    }
                    actionIcon={
                        <a>
                            <Link to={{
                                pathname: `/view/${img.id}`,
                                state: {img: img.summary}
                                }}>
                            Voir les details
                            </Link>
                        </a>
                    }
                    >
                    <img src={img.image.medium} alt="" />

                    </GridTile>
                ))}
                </GridList>
            )
        } else {
            imageListContent = null;
        }

         return <div>
                 {imageListContent}
             </div>   
    }
}

ImageResults.propTypes = {
    data: PropTypes.array.isRequired
}


export default ImageResults;