import React from 'react';
import CustomButton from '../custom-button/custom-button.component'
import './collection-item.styles.scss';
import {connect} from 'react-redux'
import {addItem } from '../../redux/cart/cart.actions'

const CollectionItem = ({id, name,  price, imageUrl}) => (
    <div className='collection-item'>
        <div className="image"
        style={{
            backgroundImage:`url(${imageUrl})`
        }}></div>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        
        <CustomButton inverted>Add to cart</CustomButton>
    </div>
)

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)