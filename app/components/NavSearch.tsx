"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavSearch() {
  const [price, steId] = useState("");
  const [type, setType] = useState("");

  const route = useRouter();

  useEffect(() => {
    route.push(`products?price=${price}&type=${type}`);
    console.log(price);
  }, [price, route]);

  useEffect(() => {
    route.push(`products?type=${type}`);
    console.log(type);
  }, [type, route]);

  return (
    <section className="d-flex gap-2 align-items-center">
      <label htmlFor="" className="fw-medium">
        TYPE:
      </label>
      <select
        className="form-select text-center"
        aria-label="Default select example"
        style={{ width: "100px", height: "35px", borderRadius: "10px" }}
        id="select"
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">SELECT</option>
        <option value="RAM">RAM</option>
        <option value="Desktop/Laptop">DESKTOP/LAPTOP</option>
        <option value="Storage">STORAGE</option>
        <option value="Motherboard">MOTHERBOARD</option>
      </select>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item d-flex align-items-center">
            <label className="fw-medium " htmlFor="type">
              PRICE:
            </label>
            <input
              type="text"
              id="type"
              name="type"
              className="border-0 px-2"
              style={{
                marginLeft: "5px",
                width: "100px",
                height: "35px",
                borderRadius: "10px",
              }}
              onChange={(e) => steId(e.target.value)}
            />
          </li>
        </ul>
      </nav>
    </section>
  );
}
