//Is number even or not
function isEven(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

// is number even or not via recursion

function isEvenRecursive(n) {
  if (n == 0) {
    return true;
  } else if (n == 1) {
    return false;
  } else {
    return isEvenRecursive(n - 2);
  }
}

//factorial with for loop
function factorial(n) {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
}

//factorial via recursion
function factorialRecursive(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

//countDown
const countDown = function (n) {
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
  console.log("hooray");
};

//countDown via recursion
const countDownRecursive = function (n) {
  if (n < 1) {
    return;
  }
  console.log(n);
  countDownRecursive(n - 1);
};

//sum range via recursion
function sumRange(n) {
  if (n == 1) {
    return 1;
  }
  return n + sumRange(n - 1);
}

//
const tree = {
  name: "John",
  children: [
    {
      name: "Jim",
      children: [],
    },
    {
      name: "Zoe",
      children: [
        { name: "Kyle", children: [] },
        { name: "Sophia", children: [] },
      ],
    },
  ],
};
console.log(tree);

function readChildren(obj) {
  if (obj.children.length == 0) {
    return;
  }
  obj.children.forEach((child) => {
    console.log(child.name);
    readChildren(child);
  });
}
