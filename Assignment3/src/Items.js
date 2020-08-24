import React from 'react'

import DeleteIcon from '@material-ui/icons/Delete';
import './Items.css';

const ListItems = props=>{

    const items = props.items;
    const ListItems = items.map(item=>{
        return <div className='list'  key={item.key}>
            <p>
                {item.text}
                <span onClick={()=>props.onClick(item.key)}>
                    <DeleteIcon/>
                </span>
            </p>
        </div>
    })
    return(
        <div>{ListItems}</div>
    )
}

export default ListItems