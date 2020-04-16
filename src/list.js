import React from 'react'

const ListItem = (props) => {
    const {name,type,srcImg,para} = props.itemList;
        return (
            <div className="card">
                <img src={srcImg} alt="Avatar" />
                <div className="container">
                    <h4>{name}</h4> 
                    <p>{type}</p>
                    <p>{para}</p> 
                <div className='btnBox'>
                <button type="button" className="btn btn-default" style={{padding:0}}><i class="fa fa-heart" aria-hidden="true"></i>
</button>   
                <button type="button" className="btn btn-default">Buy now</button>
                </div> 
            </div>
            </div>
        )
    
}

export default ListItem;