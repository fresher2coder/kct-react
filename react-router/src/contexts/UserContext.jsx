//context, provider, consumer

import { useContext, useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

const usersList = [
  {
    id: 1,
    name: "Aarav Sharma",
    occupation: "Software Engineer",
    location: "Bengaluru",
  },
  {
    id: 2,
    name: "Diya Patel",
    occupation: "Graphic Designer",
    location: "Ahmedabad",
  },
  {
    id: 3,
    name: "Rohan Mehta",
    occupation: "Data Analyst",
    location: "Mumbai",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    occupation: "Doctor",
    location: "Hyderabad",
  },
  {
    id: 5,
    name: "Karan Singh",
    occupation: "Civil Engineer",
    location: "Delhi",
  },
  {
    id: 6,
    name: "Ananya Iyer",
    occupation: "Content Writer",
    location: "Chennai",
  },
  {
    id: 7,
    name: "Vikram Das",
    occupation: "Entrepreneur",
    location: "Kolkata",
  },
  {
    id: 8,
    name: "Meera Nair",
    occupation: "Teacher",
    location: "Kochi",
  },
  {
    id: 9,
    name: "Rahul Verma",
    occupation: "Marketing Manager",
    location: "Pune",
  },
  {
    id: 10,
    name: "Ishita Roy",
    occupation: "Architect",
    location: "Jaipur",
  },
];

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(usersList);

  return (
    <>
      <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>
    </>
  );
};

export const useUser = () => useContext(UserContext);
