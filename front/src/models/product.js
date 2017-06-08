export default class Product{
    constructor(name, price, bar_code){
        this.name = name;
        this.price = price;
        this.bar_code = bar_code;
    }

    setFields(object){
        for(var k in object){
            if(k in Product.fields || k == 'id') this[k] = object[k];
        }
    }

    getListLabel(){
        return this.name;
    }

    getHref(){
        return [Product.collection, this.id].join('/');
    }
}

Product.title = 'produto';

Product.collection = 'products';

Product.resource = 'product';

Product.fields = {
    name: {type: 'string'},
    price: {type: 'string'},
    bar_code: {type: 'string'}
};

Product.relationships = {
    purchase: {
        title: 'compras',
        label: [
            {key: 'date', text: 'Data'},
            {key: 'client_id', text: 'Id do Cliente'}
        ]
    }
};
