type Props = {
  type: string;
  name?: string;
  className: string;
  id: string;
  placeholder?: string;
  OnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputForm(props: Props) {
  return (
    <article style={{ maxWidth: "400px", margin: "10px auto" }}>
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.name}
        name="name"
        className={props.className}
        style={{ height: "35px" }}
        onChange={props.OnChange}
        required
      />
    </article>
  );
}
