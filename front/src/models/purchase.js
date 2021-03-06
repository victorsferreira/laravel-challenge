import moment from 'moment';

export default class Purchase{
    constructor(number, amount, date){
        this.number = number;
        this.amount = amount;
        this.date = date;
    }

    setFields(object){
        for(var k in object){
            if(k in Purchase.fields || k == 'id') this[k] = object[k];
        }
    }

    getDate(format = 'DD/MM/YYY HH:mm:ss'){
        return moment(this.date,'YYYY-MM-DD HH:mm:ss').format(format);
    }

    getListLabel(){
        return this.id;
    }

    getHref(){
        return [Purchase.collection, this.id].join('/');
    }
}

Purchase.title = 'compra';

Purchase.collection = 'purchases';

Purchase.resource = 'purchase';

Purchase.fields = {
    number: {type: 'string', label: 'número'},
    amount: {type: 'string', label: 'quantidade'},
    date: {type: 'string', label: 'data'},
    client_id: {type: 'reference', collection: 'clients', key: 'id', label: 'cliente'},
    product_id: {type: 'reference', collection: 'products', key: 'id', label: 'produto'}
};

Purchase.relationships = {
    client: {
        title: 'clientes',
        label: [
            {key: 'cpf', text: 'CPF'}
        ]
    },
    product: {
        title: 'products',
        label: [
            {key: 'name', text: 'Name'}
        ]
    }
};
