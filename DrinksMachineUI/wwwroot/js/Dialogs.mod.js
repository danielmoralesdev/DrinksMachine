
// Url ref: https://lipis.github.io/bootstrap-sweetalert/

var Dialogs = (function () {
    var success = function (title_, msg_) {
        swal({
            title: title_,
            text: msg_,
            type: 'success',
            confirmButtonText: 'Ok',
            confirmButtonClass: 'btn-success',
            closeOnConfirm: false
        });

        //Allow to move window dialog
        $(".sweet-alert").draggable();
        //Center window dialog
        $(".sweet-alert").css({ "position": "absolute", "top": "50%", "left": "50%", "margin-top": "-154px", "margin-left": "-256px" });
    }
    var danger = function (title_, msg_) {
        swal({
            title: title_,
            text: msg_,
            type: 'error',
            confirmButtonText: 'Ok',
            confirmButtonClass: 'btn-danger',
            closeOnConfirm: false
        });

        //Allow to move window dialog
        $(".sweet-alert").draggable();
        //Center window dialog
        $(".sweet-alert").css({ "position": "absolute", "top": "50%", "left": "50%", "margin-top": "-154px", "margin-left": "-256px" });
    }
    var warning = function (title_, msg_) {
        swal({
            title: title_,
            text: msg_,
            type: 'warning',
            confirmButtonText: 'Ok',
            confirmButtonClass: 'btn-warning',
            closeOnConfirm: false
        });

        //Allow to move window dialog
        $(".sweet-alert").draggable();
        //Center window dialog
        $(".sweet-alert").css({ "position": "absolute", "top": "50%", "left": "50%", "margin-top": "-154px", "margin-left": "-256px" });
    }
    var confirm = function (title_, msg_, onConfirm_, lblConfirm_, lblCancel_) {
        swal({
            title: title_,
            text: msg_,
            type: "info",
            confirmButtonText: (lblConfirm_ == "undefined" || lblConfirm_ == null) ? 'Yes' : lblConfirm_,
            confirmButtonClass: 'btn-success',
            cancelButtonText: (lblCancel_ == "undefined" || lblCancel_ == null) ? 'No' : lblCancel_,
            cancelButtonClass: 'btn-danger',
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: false
        }, onConfirm_);

        //Allow to move window dialog
        $(".sweet-alert").draggable();
        //Center window dialog
        $(".sweet-alert").css({ "position": "absolute", "top": "50%", "left": "50%", "margin-top": "-154px", "margin-left": "-256px" });
    }
    var confirmClose = function (title_, msg_, onConfirm_) {
        swal({
            title: title_,
            text: msg_,
            type: "info",
            confirmButtonText: 'Yes',
            confirmButtonClass: 'btn-success',
            cancelButtonText: 'No',
            cancelButtonClass: 'btn-danger',
            showCancelButton: true,
            closeOnConfirm: true,
            showLoaderOnConfirm: false
        }, onConfirm_);

        //Allow to move window dialog
        $(".sweet-alert").draggable();
        //Center window dialog
        $(".sweet-alert").css({ "position": "absolute", "top": "50%", "left": "50%", "margin-top": "-154px", "margin-left": "-256px" });
    }
    var wait = function (title_, msg_, doAfter_) {
        swal({
            title: title_,
            text: msg_,
            type: "info",
            confirmButtonText: 'Ok',
            closeOnConfirm: false,
            showLoaderOnConfirm: true
        }, doAfter_);

        //Allow to move window dialog
        $(".sweet-alert").draggable();
        //Center window dialog
        $(".sweet-alert").css({ "position": "absolute", "top": "50%", "left": "50%", "margin-top": "-154px", "margin-left": "-256px" });
    }
    var info = function (title_, msg_) {
        swal({
            title: title_,
            text: msg_,
            type: 'info',
            confirmButtonText: 'Ok',
            confirmButtonClass: 'btn-info',
            closeOnConfirm: false
        });

        //Allow to move window dialog
        $(".sweet-alert").draggable();
        //Center window dialog
        $(".sweet-alert").css({ "position": "absolute", "top": "50%", "left": "50%", "margin-top": "-154px", "margin-left": "-256px" });
    }

    return {
        Success: function (title, msg) {
            return success(title, msg);
        },
        Danger: function (title, msg) {
            return danger(title, msg);
        },
        Warning: function (title, msg) {
            return warning(title, msg);
        },
        Confirm: function (title, msg, onConfirm, lblConfirm, lblCancel) {
            return confirm(title, msg, onConfirm, lblConfirm, lblCancel);
        },

        ConfirmClose: function (title, msg, onConfirm) {
            return confirmClose(title, msg, onConfirm);
        },
        Info: function (title, msg) {
            return info(title, msg);
        },
        Wait: function (title, msg, doAfter) {
            return wait(title, msg, doAfter);
        }
    }

}());