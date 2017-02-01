"use strict";
var enums_1 = require("../../utilities/enums");
var PayRollService = (function () {
    function PayRollService() {
    }
    PayRollService.prototype.CalculatePay = function (earnings, hoursWorked) {
        if (earnings.PayType == enums_1.PayTypeEnum.Salary) {
            return Math.round(earnings.Rate / 52);
        }
        else if (earnings.PayType == enums_1.PayTypeEnum.Hourly) {
            if (hoursWorked > 0) {
                return Math.round(earnings.Rate * hoursWorked);
            }
        }
        return 0;
    };
    return PayRollService;
}());
exports.PayRollService = PayRollService;
