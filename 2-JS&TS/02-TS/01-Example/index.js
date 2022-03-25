"use strict";
exports.__esModule = true;
exports.payroll = void 0;
function payroll(salary, bonus, user) {
    return salary + bonus;
}
exports.payroll = payroll;
console.log(payroll(4000, 200, { name: 'Nix', age: 23 }));
