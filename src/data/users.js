const users = [
  {
    id: 3000,
    name:'Morteza Saghi',
    email: "morteza66saghi@gmail.com",
    password: "12345678",
    customerNummer: 8000,
    phoneNummber: "1798254652",
    address: { street: "erzStrasse", zip: "28359", city: "Bremen" },
  },
  {
    id: 3001,
    name:'Sofia',
    email: "sofia@gmail.com",
    password: "87654321",
    customerNummer: 8002,
    phoneNummber: "1562584565",
    address: { street: "pualStrasse", zip: "28359", city: "Bremen" },
  },
  {
    id: 3002,
    name:'Sara',
    email: "sara66@gmail.com",
    password: "12345678",
    customerNummer: 8003,
    phoneNummber: "1755287845",
    address: { street: "adolphStrasse", zip: "28359", city: "Bremen" },
  },
  
];

const getDataUser = (email,password) => {
  return users.find((item) => item.email === email && item.password === password);
};

const validatedUser = (email, password) => {
  const user = users.find(
    (item) => item.email === email && item.password === password
  );
  if (user) {
    return user;
  }
  return undefined;
};

export { users, getDataUser, validatedUser };
