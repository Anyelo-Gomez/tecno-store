type Props = {
  image?: string;
  title: string;
  classImg: string;
};

export default function CardNews(props: Props) {
  return (
    <div className="card p-0" style={{ width: "300px" }}>
      <img src={props.image} className={props.classImg} alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
      </div>
    </div>
  );
}
