type Props = {
  name: string;
  OnClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

export default function ButtonSubmit(props: Props) {
  return (
    <input
      onClick={props.OnClick}
      className="btn btn-dark"
      type="submit"
      value={props.name}
    ></input>
  );
}
