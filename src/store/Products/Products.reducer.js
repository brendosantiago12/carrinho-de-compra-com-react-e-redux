import Data1 from '../../data/data1.json'
import Data2 from '../../data/data2.json'

const data = [...Data1.items, ...Data2.items]

export default function( state = data , action ){
    switch(action.type){
        default: return state
    }
}