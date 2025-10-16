"use client";

import Button from "../components/Button";
import ButtonSubmit from "../components/ButtonSubmit";
import InputForm from "../components/InputForm";
import { useState } from "react";

export default function Login() {
  const [name, setName] = useState("");

  const hanledSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    name.length <= 4 ? alert("tamano del texto no valido") : alert("correcto");
  };

  return (
    <main className="container my-5">
      <div className="row container BoxShadow px-0 rounded">
        <section
          className="col bg-white px-0 d-flex justify-content-center align-items-center"
          style={{ borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px" }}
        >
          <div className="d-flex flex-column align-items-center">
            <h3 className=" TextShadow">INICIAR SESSION</h3>
            <Button color="dark" href="#" name="Sign In" />
          </div>
        </section>

        <section className="col d-flex flex-column justify-content-center py-3">
          <div>
            <h3 className="text-center text-white TextShadow">CREAR CUENTA</h3>
          </div>
          <article>
            <div className="d-flex justify-content-center my-3">
              <Button href="#" name="Google" color="danger" />
            </div>
          </article>

          <form action="#" className=" w-100">
            <InputForm
              type="text"
              id="name"
              name="name"
              placeholder="Firs Name"
              className="w-100 rounded border-0 px-2"
              OnChange={(e) => {
                setName(e.target.value);
              }}
            />
            <InputForm
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Last Name"
              className="w-100 rounded border-0 px-2"
            />
            <InputForm
              type="email"
              id="email"
              name="name"
              placeholder="Email"
              className="w-100 rounded border-0 px-2"
            />
            <InputForm
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-100 rounded border-0 px-2"
            />

            <section className="d-flex justify-content-center">
              <ButtonSubmit OnClick={(e) => hanledSubmit(e)} name="Sign Up" />
            </section>
          </form>
        </section>
      </div>
    </main>
  );
}
