const orderArray = [];
let totalCost = 0;

$(document).ready(init);

function init() {
    enable(true);
}

function enable(value) {
    if(value){
        $('#customerForm').on('submit', submitCustomerForm);
        $('.js-btn-clear').on('click', resetInputs);
        $('.js-orders').on('click', '.js-btn-delete', deleteOrder);
    } else {
        $('#customerForm').off('submit', submitCustomerForm);
        $('.js-btn-clear').off('click', resetInputs);
        $('.js-orders').off('click', '.js-btn-delete', deleteOrder);
    }
}

function submitCustomerForm(event) {
    event.preventDefault();

    const orderObject = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        pizza: $('#pizza').val(),
        cost: parseInt($('#cost').val())
    }

    // const dataObject = {};
    // const valueArray = $('#customerForm').serializeArray();
    // for(let item of valueArray) {
    //     dataObject[item.name] = item.value;
    // }
    // addToOrders(dataObject);

    addToOrders(orderObject);
    resetInputs();
}

function addToOrders(orderObject) {
    orderArray.push(orderObject);
    render();
}

function deleteOrder() {
    const id = $(this).parent().data('id');
    orderArray.splice(id, 1);
    render();
}

function resetInputs() {
    $('#firstName').val('');
    $('#lastName').val('');
    $('#pizza').val('');
    $('#cost').val('');
}

function findTotal() {
    totalCost = 0;
    for(let order of orderArray) {
        totalCost += order.cost;
    }
}

function render() {
    $('.js-orders').empty();
    findTotal();

    for (let i = 0; i < orderArray.length; i++) {
        const order = orderArray[i];

        $('.js-orders').append(`
            <tr data-id="${i}">
                <td>${order.firstName}</td>
                <td>${order.lastName}</td>
                <td>${order.pizza}</td>
                <td>$${order.cost}</td>
                <td><button class="js-btn-delete btn">X</button></td>
            </tr>
        `);
    }

    $('.total-cost').text(`TOTAL : $${totalCost}`);
}



/*
function submitCustomerForm(event) {
    event.preventDefault();

    // EXAMPLE 1

    // let firstName = $('#firstName').val();
    // let lastName = $('#lastName').val();
    // let pizza = $('#pizza').val();
    // let cost =  parseInt($('#cost').val());

    // $('.js-orders').append(`
    //     <div>
    //         <p>${firstName} ${lastName} - ${pizza} - $${cost}</p>
    //     </div>
    // `);

    totalCost += orderObject.cost;

    resetInputs();
}
*/