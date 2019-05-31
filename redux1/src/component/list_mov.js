import React from 'react';

const Listmov = (props) => {
    console.log(">>>>prp>>>", props)
    const list = ({datalist}) => {
        if(datalist){
            return datalist.map((data) => {

                return(
                    <h1>{data.name}</h1>
                )
            })
        }
        
    }
    return(
        <div>
            {list(props)}
        </div>
    )
}

export default Listmov;



