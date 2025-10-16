import Card, { ColumnCard } from "./components/Card";
import Button from "./components/Button";
import Link from "next/link";
import CardNews from "./components/CardNews";

async function getNews() {
  const response = await fetch(`${process.env.DB_HOST}/noticias`);
  return response.json();
}
async function getProd() {
  const response = await fetch(`${process.env.DB_HOST}/products`);
  return response.json();
}

type PropsNews = {
  id: number;
  title: string;
  image: string;
  price: string;
};

export default async function Home() {
  const genNews = async () => {
    const datos = await getNews();
    return datos.map((item: PropsNews, index: number) => (
      <ColumnCard key={index}>
        {
          <CardNews
            key={index}
            title={item.title}
            image={item.image}
            classImg="w-100 object-fit-cover py-0 "
          />
        }
      </ColumnCard>
    ));
  };

  const genProducts = async () => {
    const datos = await getProd();
    let lista = [];
    for (let index = 0; index < 4; index++) {
      lista.push(
        <ColumnCard key={datos[index].id}>
          {
            <Card
              title={datos[index].title}
              image={datos[index].image}
              text={datos[index].price}
              key={datos[index].id}
              classImg="object-fit-contain"
            >
              {<Button name="Buy Now" href={`products/${datos[index].id}`} />}
            </Card>
          }
        </ColumnCard>
      );
    }
    return lista;
  };

  return (
    <main className="-fluid my-5">
      {/* portada */}
      <section
        className=" container-fluid boderBig d-flex  justify-content-center mb-5 portadaAnimation"
        style={{ marginTop: "150px" }}
      >
        <article
          className="row container "
          style={{ borderBottom: "2px solid black" }}
        >
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h2 className="textPortads TextShadow">
              THE BEST <br /> THERE IS
            </h2>
            <p className="fs-5 text-light">RTX 5090 FOUNDERS EDITION</p>
          </div>
          <div className="col-12 col-md-6 pb-5 d-flex align-items-center">
            <img
              className="w-100 object-fit-cover"
              src="rtx 5090  founders edition.png"
              alt=""
              style={{ maxWidth: "600px" }}
            />
          </div>
        </article>
      </section>

      <section className="container text-center">
        <article className="mb-5">
          <h3 className="text-light text-decoration-underline TextShadow">
            PRODUCTOS
          </h3>
        </article>
        <article className="container text-end mb-3">
          <Link
            href={"products"}
            className="text-decoration-none text-light fs-5 me-3 a TextShadow"
          >
            ver mas <i className="bi bi-arrow-right-short"></i>
          </Link>
        </article>
        <article className="row g-3 d-flex justify-content-center">
          {genProducts()}
        </article>
      </section>

      {/* noticias */}
      <section className="container mt-5">
        <div className="text-center text-light">
          <h3 className="TextShadow">NOTICIAS</h3>
        </div>
        <div className="row d-flex justify-content-center">{genNews()}</div>
      </section>
    </main>
  );
}
