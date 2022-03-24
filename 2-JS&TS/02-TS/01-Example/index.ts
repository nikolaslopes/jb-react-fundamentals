type User = {
  name: string;
  age: number;
}

function payroll(salary: number, bonus: number, user: User) {
  return salary + bonus;
}

console.log(payroll(4000, 200, { name: 'Nix', age: 22 }));
