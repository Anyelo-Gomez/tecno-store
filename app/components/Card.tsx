import { ReactNode } from "react";

type Props = {
  title: string;
  text?: string;
  children?: ReactNode;
  image?: string;
  classImg?: string;
};

export default function Card(props: Props) {
  return (
    <article className="card BoxShadow" style={{ width: "300px" }}>
      <div className="card-img w-100" style={{ height: "200px" }}>
        <img
          className={`card-img-top h-100 pt-2 ${props.classImg}`}
          src={props.image}
          alt={props.title}
        />
      </div>
      <div className="card-body d-flex flex-column mb-2 text-start">
        <h5 className="card-title">{props.title}</h5>
        <h3 className="card-text mt-auto"> {`$${props.text}`}</h3>
      </div>
      <div className="card-button d-flex justify-content-start ms-2">
        {props.children}
      </div>
    </article>
  );
}

type PropsColumn = {
  children: ReactNode;
  className?: string;
};

export function ColumnCard(props: PropsColumn) {
  return (
    <article
      className={`col-12 col-sm-6  col-lg-3 g-3 d-flex justify-content-center ${props.className}`}
    >
      {props.children}
    </article>
  );
}
