import bcrypt from "bcryptjs"

const users = [
  {
    name: "Admin user",
    email: "admin@example.com",
    password: bcrypt.hashSync("tobias6470", 10),
    isAdmin: true,
  },
  {
    name: "John",
    email: "john@example.com",
    password: bcrypt.hashSync("tobias6470", 10),
  },
  {
    name: "David",
    email: "david@example.com",
    password: bcrypt.hashSync("tobias6470", 10),
  },
]

export default users
