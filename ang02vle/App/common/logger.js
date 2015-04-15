(function () {
    'use strict';

    // define the service as a factory
    angular.module('common').factory('logger',
      ['$log', 'config', logger]);

    // create factory
    function logger($log, config) {
        var service = {
            log: log,
            logError: logError,
            logSuccess: logSuccess,
            logWarning: logWarning
        };

        return service;

        // #region public members
        function log(message, data, source, showNotification) {
            writeLog(message, data, source, showNotification, "info");
        }

        function logError(message, data, source, showNotification) {
            writeLog(message, data, source, showNotification, "error");
        }

        function logSuccess(message, data, source, showNotification) {
            writeLog(message, data, source, showNotification, "success");
        }

        function logWarning(message, data, source, showNotification) {
            writeLog(message, data, source, showNotification, "warning");
        }
        // #endregion

        // #region private members
        // universal method for writing notifications - private implementation
        function writeLog(message, data, source, showNotification, notificationType) {
            var iconUrl, notiTitle;
            // default showNotification to true, if not specified
            showNotification = showNotification || true;

            // write to angular log, & specify error if it is an error
            var write = (notificationType === 'error') ? $log.error : $log.log;
            source = source ? '[' + source + '] ' : '';
            write(source, message, data);

            // own notification system for the app
            if (showNotification) {
                if (notificationType === 'info') {
                    // if informational messages not specified to be shown, stop
                    if (!config.showDebugNotiSetting) {
                        return;
                    } else {
                        iconUrl = "Images/info.png";
                        notiTitle = "Ang01VLE: DEBUG LOG";
                    }
                } else if (notificationType === 'error') {
                    iconUrl = "Images/error.png";
                    notiTitle = "Ang01VLE: ERROR";
                } else if (notificationType === 'warning') {
                    iconUrl = "Images/warning.png";
                    notiTitle = "Ang01VLE: WARNING";
                } else if (notificationType === 'success') {
                    iconUrl = "Images/success.png";
                    notiTitle = "Ang01VLE:";
                }

                // create sharepoint notification
                var notificationData = new SPStatusNotificationData("", STSHtmlEncode(message), iconUrl, null);
                var notification = new SPNotification(SPNotifications.ContainerID.Status, STSHtmlEncode(notiTitle), false, null, null, notificationData);

                // show sharepoint notification tile
                notification.Show(false);
            }
        }
        // #endregion
    }
})();