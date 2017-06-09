export default class Client{
    constructor(name, cpf, email){
        this.name = name;
        this.cpf = cpf;
        this.email = email;
    }

    setFields(object){
        for(var k in object){
            if(k in Client.fields || k == 'id') this[k] = object[k];
        }
    }

    getListLabel(){
        return this.name;
    }

    getHref(){
        return [Client.collection, this.id].join('/');
    }
}

Client.title = 'cliente';

Client.collection = 'clients';

Client.resource = 'client';

Client.fields = {
    cpf: {type: 'string', label: 'cpf'},
    email: {type: 'string', label: 'email'},
    name: {type: 'string', label: 'nome'}
};

Client.relationships = {
    purchase: {
        title: 'compras',
        label: [
            {key: 'date', text: 'Data'},
            {key: 'product_id', text: 'Id do Produto'}
        ]
    }
};
