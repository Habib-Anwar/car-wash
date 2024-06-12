export type Name = {
  firstName: string;
  lastName: string;
};

export type TUser = {
  name: Name;
  email: string;
  password: string;
  phone: string;
  role: "admin" | "user";
  address: string;
};
