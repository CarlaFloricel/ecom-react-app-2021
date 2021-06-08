import React from 'react'
import './checkout-item.styles.scss'
import { connect } from 'react-redux'
import { addItem, clearItemFromCart, remveItem } from '../../redux/cart/cart.actions'
import { removeItemFromCart } from '../../redux/cart/cart.utils'

const CheckoutItem = ({ cartItem, clearItem, addItem, remveItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className="arrow" onClick={() => removeItemFromCart(item)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(item)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    remveItem: item => dispatch(remveItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)