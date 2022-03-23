const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const name = order.name;
  const phone = order.phoneNumber;
  const street = order.address.street;
  const number = order.address.number;
  const apto = order.address.apartment;
  console.log(`Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phone}, R. ${street}, Nº ${number}, AP: ${apto}.`)
}

customerInfo(order);

const orderModifier = (order) => {
 order.name = 'Luiz Silva';
 order.payment.total = 50;
 const name = order.name;
 const pay = order.payment.total;
 const pizzas = Object.keys(order.order.pizza);
 const pizza1 = pizzas[0];
 const pizza2 = pizzas[1];
 const beverage = order.order.drinks.coke.type;
 console.log(`Olá ${name}, o total do seu pedido de ${pizza1}, ${pizza2} e ${beverage} é R$ ${pay.toFixed(2)}`)
}

orderModifier(order);

// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

//Modifique o nome da pessoa compradora.

//Modifique o valor total da compra para R$ 50,00.