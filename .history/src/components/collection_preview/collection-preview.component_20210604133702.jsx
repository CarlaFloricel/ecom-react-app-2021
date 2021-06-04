import React from 'react'

import './collection-preview.styles.scss'

const CollectionPreview = ({title}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.map(item => (
                    <div>{item.name}</div>
                ))
            }
        </div>
    </div>
)