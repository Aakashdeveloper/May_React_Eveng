
import React from 'react';
import { Link } from 'react-router-dom';


const DisplayProerty = ({propertyData}) => {
    if (propertyData && propertyData.length) {
        return (

            <div className="row">
                {propertyData.map(data =>
                    
                    <div className="column" key={data.mlsId}>
                        <div className="card">
                            <img className="card-img-top" src={data.photos[0]} alt="Card image"/>
                            <div className="card-body">
                                <p className="heading" >{data.address.crossStreet}</p>
                                <p className="card-text">{data.address.state}</p>
                                <Link to={`/openhouse/${data.mlsId}`} className="btn btn-primary">More Details</Link>
                            </div>
                        </div>
                    </div>
                
                   )
                }
            </div>
        );
    }

    return (
        <div className="nodata text-center">
            <img src={'/loading.gif'}/>
        </div>
    );
};

export default DisplayProerty;