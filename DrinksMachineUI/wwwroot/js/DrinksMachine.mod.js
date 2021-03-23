var drinkMachModule = (function () {

    var purchaseDone = false;

    var load = function () {

        setFormatNumbers('.formatNumber', '0');

        getDrinks();

        getCoins();
    }

    function loadDataDrinks (array) {
        var totalAvailDrinks = 0;
                    
        // Load data
        for (var i = 0; i < array.length; i++) {
            switch(array[i].name)
            {
                case "Coke":
                    $("#lblCokeAvailable").text(array[i].quantity + " drinks available, Cost = " + array[i].cost);
                    
                    $("#hdnCokeCost").val(array[i].cost);
                    $("#hdnCokesAvailable").val(array[i].quantity);

                    break;
                case "Pepsi":
                    $("#lblPepsiAvailable").text(array[i].quantity + " drinks available, Cost = " + array[i].cost);
                    
                    $("#hdnPepsiCost").val(array[i].cost);
                    $("#hdnPepsisAvailable").val(array[i].quantity);

                    break;
                case "Soda":
                    $("#lblSodaAvailable").text(array[i].quantity + " drinks available, Cost = " + array[i].cost);
                    
                    $("#hdnSodaCost").val(array[i].cost);
                    $("#hdnSodasAvailable").val(array[i].quantity);

                    break;
            }

            totalAvailDrinks += array[i].quantity;
        }

        if(totalAvailDrinks == 0)
        {
            $("#btnGetDrinks").prop("disabled", "disabled");
        }
    }

    function getDrinks() {

        $.ajax({
            type: "GET",                                       // request
            url: '/Home/GetDrinks',                            // URL al que vamos a hacer el pedido
            data: {},                                          // data JSON parameters
            contentType: "application/json; charset=utf-8",    // content type
            dataType: "json",                                  // data type returned
            async: true,                                       // asynchronous
            success: function (result) {                       // function success

                if (result != null) {

                    var array = result;

                    loadDataDrinks(array);

                } else {
                    $("#btnGetDrinks").prop("disabled", "disabled");

                    Dialogs.Warning("Load Drinks", "No drinks registered.");
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) { // function error
                Dialogs.Danger("Load Drinks", XMLHttpRequest.responseText);
            }
        });
    }

    function getCoins() {

        $.ajax({
            type: "GET",                                       // request
            url: '/Home/GetCoins',                            // URL / Method
            data: {},                                          // data JSON parameters
            contentType: "application/json; charset=utf-8",    // content type
            dataType: "json",                                  // data type returned
            async: true,                                       // asynchronous
            success: function (result) {                       // function success

                if (result != null) {

                    var array = result;

                    // Load data
                    for (var i = 0; i < array.length; i++) {
                        switch(array[i].name)
                        {
                            case "Penny":
                                $("#hdnPennyValue").val(array[i].value);

                                break;
                            case "Nickel":
                                $("#hdnNickelValue").val(array[i].value);

                                break;
                            case "Dime":
                                $("#hdnDimeValue").val(array[i].value);

                                break;
                            case "Quarter":
                                $("#hdnQuarterValue").val(array[i].value);

                                break;
                        }
                    }

                } else {
                    Dialogs.Warning("Load Coins", "No coins registered.");
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) { // function error
                Dialogs.Danger("Load Coins", XMLHttpRequest.responseText);
            }
        });
    }

    function updateTotal(){
        var qCokes = $("#txtCokeQty").val();
        var qPepsis = $("#txtPepsiQty").val();
        var qSodas = $("#txtSodaQty").val();

        qCokes = qCokes == "" ? "0" : qCokes;
        qPepsis = qPepsis == "" ? "0" : qPepsis;
        qSodas = qSodas == "" ? "0" : qSodas;
        
        var total = ((qCokes * 1) * ($("#hdnCokeCost").val() * 1)) + 
            ((qPepsis * 1) * ($("#hdnPepsiCost").val() * 1)) + ((qSodas * 1) * ($("#hdnSodaCost").val() * 1));
        
        $("#lblTotal").text("$ " + total);
    }

    function updatePayment(){
        var pennys = $("#txtPenny").val();
        var nickels = $("#txtNickel").val();
        var dimes = $("#txtDime").val();
        var quarters = $("#txtQuarter").val();

        pennys = pennys == "" ? "0" : pennys;
        nickels = nickels == "" ? "0" : nickels;
        dimes = dimes == "" ? "0" : dimes;
        quarters = quarters == "" ? "0" : quarters;

        var totalPayment = ((pennys * 1) * ($("#hdnPennyValue").val() * 1)) + ((nickels * 1) * ($("#hdnNickelValue").val() * 1)) +
            ((dimes * 1) * ($("#hdnDimeValue").val() * 1)) + ((quarters * 1) * ($("#hdnQuarterValue").val() * 1));

        $("#lblTotalPayment").text("$ " + totalPayment);
    }

    //Clean the UI
    function cleanView() {
        if(purchaseDone) {
            $("#txtPenny").val("");
            $("#txtNickel").val("");
            $("#txtDime").val("");
            $("#txtQuarter").val("");
            $("#txtCokeQty").val("");
            $("#txtPepsiQty").val("");
            $("#txtSodaQty").val("");

            $("#lblTotal").text("$ 0");

            purchaseDone = false;
        }
    }

    function SendOrder() {
        if (Validate()) {

            var qCokes = $("#txtCokeQty").val();
            var qPepsis = $("#txtPepsiQty").val();
            var qSodas = $("#txtSodaQty").val();
    
            qCokes = qCokes == "" ? "0" : qCokes;
            qPepsis = qPepsis == "" ? "0" : qPepsis;
            qSodas = qSodas == "" ? "0" : qSodas;

            var pennys = $("#txtPenny").val();
            var nickels = $("#txtNickel").val();
            var dimes = $("#txtDime").val();
            var quarters = $("#txtQuarter").val();
    
            pennys = pennys == "" ? "0" : pennys;
            nickels = nickels == "" ? "0" : nickels;
            dimes = dimes == "" ? "0" : dimes;
            quarters = quarters == "" ? "0" : quarters;
            
            var objOrder = {
                OrderedDrinks: 
                    [{
                        name: "Coke",
                        quantity: qCokes
                    },{
                        name: "Pepsi",
                        quantity: qPepsis
                    },{
                        name: "Soda",
                        quantity: qSodas
                    }],
                InsertedCoins: 
                    [{
                        name: "Penny",
                        quantity: pennys
                    },{
                        name: "Nickel",
                        quantity: nickels
                    },{
                        name: "Dime",
                        quantity: dimes
                    },{
                        name: "Quarter",
                        quantity: quarters
                    }]
            };

            $.ajax({
                type: "POST",                                       // request
                url: '/Home/InsertOrder',                            // URL / Method
                data: 
                    {
                        order: objOrder,
                        num: 1
                    },                                             // data JSON parameters
                //contentType: "application/json; charset=utf-8",     // content type
                dataType: "json",                                   // data type returned
                async: true,                                        // asynchronous
                success: function (result) {                        // function success

                    if (result != null) {

                        var message = (qCokes * 1) > 0 ? ("Cokes: " + qCokes + "\n") : "";
                        message += (qPepsis * 1) > 0 ? ("Pepsis: " + qPepsis + "\n") : "";
                        message += (qSodas * 1) > 0 ? ("Sodas: " + qSodas + "\n") : "";

                        var totalPayment = ((pennys * 1) * ($("#hdnPennyValue").val() * 1)) + ((nickels * 1) * ($("#hdnNickelValue").val() * 1)) +
                            ((dimes * 1) * ($("#hdnDimeValue").val() * 1)) + ((quarters * 1) * ($("#hdnQuarterValue").val() * 1));
                
                        var totalOrder = ((qCokes * 1) * ($("#hdnCokeCost").val() * 1)) + 
                            ((qPepsis * 1) * ($("#hdnPepsiCost").val() * 1)) + ((qSodas * 1) * ($("#hdnSodaCost").val() * 1));

                        message += "Total Cost: " + totalOrder + "\n";
                        message += "Your Change: " + (totalPayment - totalOrder) + "\n";

                        Dialogs.Success("Get Drinks", message);

                        loadDataDrinks(result.drinks);

                        purchaseDone = true;

                    } else {
                        Dialogs.Warning("Get Drinks", "Result invalid.");
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    Dialogs.Danger("Get Drinks", XMLHttpRequest.responseText);
                }
            });
        }
    };

    //Validate data
    function Validate() {

        var qCokes = $("#txtCokeQty").val();
        var qPepsis = $("#txtPepsiQty").val();
        var qSodas = $("#txtSodaQty").val();

        qCokes = qCokes == "" ? "0" : qCokes;
        qPepsis = qPepsis == "" ? "0" : qPepsis;
        qSodas = qSodas == "" ? "0" : qSodas;
        
        var totalPurchaseDrinks = (qCokes * 1) + (qPepsis * 1) + (qSodas * 1);
        
        var messageTitle = "Get Drinks";

        if (totalPurchaseDrinks == 0) {
            Dialogs.Warning(messageTitle, "Must select at the minimum one drink.");
            
            return false;
        }
        
        if ((qCokes * 1) > ($("#hdnCokesAvailable").val() * 1)) {
            Dialogs.Warning(messageTitle, "Coke is sold out, your purchase cannot be processed.");
            
            return false;
        }
        
        if ((qPepsis * 1) > ($("#hdnPepsisAvailable").val() * 1)) {
            Dialogs.Warning(messageTitle, "Pepsi is sold out, your purchase cannot be processed.");
            
            return false;
        }
        
        if ((qSodas * 1) > ($("#hdnSodasAvailable").val() * 1)) {
            Dialogs.Warning(messageTitle, "Soda is sold out, your purchase cannot be processed.");
            
            return false;
        }
        
        var pennys = $("#txtPenny").val();
        var nickels = $("#txtNickel").val();
        var dimes = $("#txtDime").val();
        var quarters = $("#txtQuarter").val();

        pennys = pennys == "" ? "0" : pennys;
        nickels = nickels == "" ? "0" : nickels;
        dimes = dimes == "" ? "0" : dimes;
        quarters = quarters == "" ? "0" : quarters;

        var totalPayment = ((pennys * 1) * ($("#hdnPennyValue").val() * 1)) + ((nickels * 1) * ($("#hdnNickelValue").val() * 1)) +
            ((dimes * 1) * ($("#hdnDimeValue").val() * 1)) + ((quarters * 1) * ($("#hdnQuarterValue").val() * 1));

        var totalOrder = ((qCokes * 1) * ($("#hdnCokeCost").val() * 1)) + 
            ((qPepsis * 1) * ($("#hdnPepsiCost").val() * 1)) + ((qSodas * 1) * ($("#hdnSodaCost").val() * 1));
        
        if (totalPayment < totalOrder) {
            Dialogs.Warning(messageTitle, "Total payment less than Order total, your purchase cannot be processed. Insert more coins.");
            
            return false;
        }

        return true;
    };

    return {
        load: function () {
            return load();
        },
        coinsInsertedChange: function () {
            return updatePayment();
        },
        drinksPurchaseChange: function () {
            return updateTotal();
        },
        sendOrder_evt: function () {
            return SendOrder();
        },
        confirm_evt: function () {
            return cleanView();
        }
    }
}());