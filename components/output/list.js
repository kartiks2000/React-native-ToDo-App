import React from 'react';
import { View} from 'react-native';

import Items from './items';

const List = (props) => {

    return(
            <View>
                <Items data={props.it} delfn={props.del}></Items>
            </View>   
    );
}

export default List;
