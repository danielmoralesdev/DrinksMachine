// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.



//Format numeric fields
//class: class name in the input ".format"
//vMin: minimum value allowed
//vMax: maximum value allowed
function setFormatNumbers(className, valMin, valMax) {
    $(className).focus();

    $('body').delegate(className, 'click change keyup focus', function () {
        try {
            $(this).autoNumeric('destroy');
        } catch (e) { }
        if (valMax != undefined) {
            try {
                $(this).autoNumeric('init', { aSep: '', aDec: ',', mDec: 0, vMin: valMin, vMax: valMax });
            } catch (e) { }
        } else {
            try {
                $(this).autoNumeric('init', { aSep: '', aDec: ',', mDec: 0, vMin: valMin });
            } catch (e) { }
        }
    });

    $(className).trigger('click');

    //Hack to format amounts
    setTimeout(function () {
        $(className).blur();
    }, 100);
}
