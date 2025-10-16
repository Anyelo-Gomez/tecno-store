import Button from "@/app/components/Button";
import Link from "next/link";

const getdatos = async (id: number) => {
  const res = await fetch(`${process.env.DB_HOST}/products/${id}`);
  return res.json();
};

export default async function ProductsDetail({
  params,
}: {
  params: { id: number };
}) {
  const datos = await getdatos(params.id);

  return (
    <main className="container my-5">
      <section>
        <Link href={"/products"} className="text-decoration-none text-dark a">
          <i className="bi bi-arrow-left-short"></i>
          ATRAS
        </Link>
      </section>
      <div className="row BoxShadow mt-3">
        <section
          className="col-12 col-sm-7 px-2 py-3 bg-white "
          style={{ maxHeight: "500px" }}
        >
          <img
            src={datos.image}
            alt=""
            className="w-100 h-100 object-fit-contain"
            // style={{ maxHeight: "500px" }}
          />
        </section>
        <section className="col-12 col-sm-5 d-flex flex-column px-o py-2">
          <h3>{datos.title}</h3>
          <h2 className="text-white mt-auto">${datos.price}</h2>
          <Button name="Checout" href="#" />
        </section>
      </div>
    </main>
  );
}
