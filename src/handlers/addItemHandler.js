import data from '../data.js';
import dom from '../dom.js';

const addItemHandler = () => {
    const newItem = {
        id: data.items.length + 1,
        text: dom.input.value,
    };
    data.items.push(newItem);
    
    console.log('Item added:', newItem);
}

export default addItemHandler;