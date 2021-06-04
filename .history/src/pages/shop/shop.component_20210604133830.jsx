import React from 'react'

import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection_preview/collection-preview.component'

class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
           collections: SHOP_DATA
              
             
        }
    }

    render(){
        return(<div className="shop-page"></div>)
    }
}

export default ShopPage;