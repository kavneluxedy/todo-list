import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import WildCard from "./WildCard";
import Header from "../../templates/Header";
import Error404 from "../../templates/Error";
import CardsTemplate from "../card-manager/CardsTemplate";
import ToDoList from "../todo-list/ToDoList";
import NeedAuth from "../user/NeedAuth";
import Login from "../user/Login";
import LogOut from "../user/LogOut";
import Protected from "../user/Protected";
// import Context from "../Context";
import UseRef from "../Ref";
import Effect from "../Effect";
import { Counter } from "../Counter";

const RouterBasic = () => {
  const [logged, setLogged] = useState(false);
  useEffect(() => [logged]);
  const [user, setUser] = useState();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path=":wildcard" element={<WildCard />} />

            <Route
              path="login"
              element={<Login setLogged={setLogged} setUser={setUser} />}
            />

            <Route
              path="protected"
              element={
                <NeedAuth logged={logged}>
                  {" "}
                  <Protected />
                </NeedAuth>
              }
            ></Route>

            {/* <Route path="context" element={<Context />} /> */}

            <Route path="cards" element={<CardsTemplate />}>
              <Route path=":id" element={<CardsTemplate />} />
            </Route>

            <Route path="todo" element={<ToDoList />}>
              <Route path=":id" element={<ToDoList />} />
            </Route>

            {/* <Route path="convertor" element={<Converter />} /> */}

            {/* <Route path="context" element={<Context />} /> */}

            <Route path="effect" element={<Effect />} />

            <Route path="reducer" element={<Counter />} />

            <Route path="ref" element={<UseRef />} />

            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>

        <div className="container">
          <LogOut
            user={user}
            setUser={setUser}
            logged={logged}
            setLogged={setLogged}
          />
          <ul>
            <li>
              <Link to="/">None</Link>
            </li>
            <li>
              <Link to="protected">Protected</Link>
            </li>
            <li>
              <Link to="login">Sign Up</Link>
            </li>
          </ul>
        </div>
      </BrowserRouter>
    </>
  );
};

export default RouterBasic;
