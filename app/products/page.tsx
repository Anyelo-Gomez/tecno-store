import Button from "../components/Button";
import Card, { ColumnCard } from "../components/Card";
import NavSearch from "../components/NavSearch";

const getData = async (
  price: string | string[] | undefined,
  type: string | string[] | undefined
) => {
  let res;

  if (price && !type) {
    res = await fetch(`${process.env.DB_HOST}/products?price_lte=${price}`);
  } else if (type && !price) {
    res = await fetch(`${process.env.DB_HOST}/products?type=${type}`);
  } else if (price && type) {
    res = await fetch(
      `${process.env.DB_HOST}/products?price_lte=${price}&type=${type}`
    );
  } else {
    res = await fetch(`${process.env.DB_HOST}/products`);
  }

  return res.json();
};

export default async function Products({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const params = await searchParams;
  const datos = await getData(params.price, params.type);

  const gendatos = () => {
    return datos.map((item: any) => (
      <ColumnCard key={item.id}>
        {
          <Card
            title={item.title}
            image={item.image}
            text={`${item.price}.99`}
            key={item.id}
            classImg="w-100 object-fit-contain"
          >
            {<Button href={`products/${item.id}`} name="Buy Now" />}
          </Card>
        }
      </ColumnCard>
    ));
  };

  return (
    <main className="container mt-5 py-5">
      <section className="SpaceBetween flex-column">
        <h3 className="text-white TextShadow">{`PRODUCTS (${datos.length})`}</h3>
        <div>{<NavSearch />}</div>
      </section>

      <section className="container">
        <article className="row d-flex justify-content-center">
          {gendatos()}
        </article>
      </section>
    </main>
  );
}
