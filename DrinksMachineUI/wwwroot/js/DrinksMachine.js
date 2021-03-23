drinkMachModule.load();

// Scroll on top
$('html, body').animate({ scrollTop: 0 }, 0);

$("#txtPenny").keyup(function (event) {
    drinkMachModule.coinsInsertedChange();
    return true;
});

$("#txtNickel").keyup(function (event) {
    drinkMachModule.coinsInsertedChange();
    return true;
});

$("#txtDime").keyup(function (event) {
    drinkMachModule.coinsInsertedChange();
    return true;
});

$("#txtQuarter").keyup(function (event) {
    drinkMachModule.coinsInsertedChange();
    return true;
});

$("#txtCokeQty").keyup(function (event) {
    drinkMachModule.drinksPurchaseChange();
    return true;
});

$("#txtPepsiQty").keyup(function (event) {
    drinkMachModule.drinksPurchaseChange();
    return true;
});

$("#txtSodaQty").keyup(function (event) {
    drinkMachModule.drinksPurchaseChange();
    return true;
});

//Event click to get drinks (send order)
$("#btnGetDrinks").click(function () {
    drinkMachModule.sendOrder_evt();
});

//---
$("body").on('click', '.sa-confirm-button-container', function () {
    drinkMachModule.confirm_evt();
});