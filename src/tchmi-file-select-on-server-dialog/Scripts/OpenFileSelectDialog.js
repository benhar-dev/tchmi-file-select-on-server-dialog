// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../Packages/Beckhoff.TwinCAT.HMI.Framework.12.758.8/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var tchmi_file_select_on_server_dialog;
        (function (tchmi_file_select_on_server_dialog) {
            function OpenFileSelectDialog(ctx, root, extension) {

                function generateUniqueId(length) {
                    length = typeof length !== "undefined" ? length : 20;
                    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    const charactersLength = characters.length;
                    let id;

                    do {
                        let result = '';
                        for (let i = 0; i < length; i++) {
                            result += characters.charAt(Math.floor(Math.random() * charactersLength));
                        }
                        id = result;
                    } while (document.getElementById(id));

                    return id;
                }

                var desktop = TcHmi.Controls.get('Desktop');

                var dialogBackdrop = TcHmi.ControlFactory.createEx('TcHmiRectangle', generateUniqueId(), {
                    'data-tchmi-left':"0",
                    'data-tchmi-right': "0",
                    'data-tchmi-top':"0",
                    'data-tchmi-bottom':"0",       
                    'data-tchmi-width-mode': "Value",
                    'data-tchmi-height-mode': "Value",
                    'data-tchmi-zindex' : '1040' // same as bootstrap
                }, desktop);

                dialogBackdrop.setBackgroundColor({
                    color: 'rgba(0, 0, 0, 0.4980392)'
                })

                var dialog = TcHmi.ControlFactory.createEx('TcHmiUserControlHost', generateUniqueId(), {
                    'data-tchmi-left': "50",
                    'data-tchmi-left-unit': "%",
                    'data-tchmi-target-user-control': 'UserControls/FileSelectDialog.usercontrol',
                    'data-tchmi-top': "50",
                    'data-tchmi-top-unit': "%",
                    'data-tchmi-width-mode': "Content",
                    'data-tchmi-height-mode': "Content",
                    'data-tchmi-zindex': '1050' // same as bootstrap
                }, desktop);

                var dialogRoot = root ? root : '/';
                var dialogExtension = extension ? extension : '';

                dialog.setRoot(dialogRoot);
                dialog.setExtension(dialogExtension);

                dialog.setTransform([
                    {
                        "transformType": "Translate",
                        "x": -50,
                        "y": -50,
                        "xUnit": "%",
                        "yUnit": "%",
                        "z": 0,
                        "zUnit": "px"
                    }
                ]);

                dialog.setBoxShadow([
                    {
                        "color": {
                            "color": "rgba(61, 61, 61, 0.5882352)"
                        },
                        "offsetX": 0,
                        "offsetXUnit": "px",
                        "offsetY": 5,
                        "offsetYUnit": "px",
                        "inset": false,
                        "blur": 10,
                        "blurUnit": "px",
                        "spread": 2,
                        "spreadUnit": "px"
                    }
                ]);

                dialog.ok = function (data) {
                    ctx.success(data);
                    desktop.removeChild(dialogBackdrop);
                    desktop.removeChild(dialog);
                    dialogBackdrop.destroy();
                    dialog.destroy();
                };

                dialog.cancel = function () {
                    ctx.success('');
                    desktop.removeChild(dialogBackdrop);
                    desktop.removeChild(dialog);
                    dialogBackdrop.destroy();
                    dialog.destroy();
                };

                desktop.addChild(dialogBackdrop);
                desktop.addChild(dialog);

            }
            tchmi_file_select_on_server_dialog.OpenFileSelectDialog = OpenFileSelectDialog;
        })(tchmi_file_select_on_server_dialog = Functions.tchmi_file_select_on_server_dialog || (Functions.tchmi_file_select_on_server_dialog = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('OpenFileSelectDialog', 'TcHmi.Functions.tchmi_file_select_on_server_dialog', TcHmi.Functions.tchmi_file_select_on_server_dialog.OpenFileSelectDialog);
