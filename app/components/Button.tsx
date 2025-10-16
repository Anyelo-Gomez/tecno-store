"use Client";

type Props = {
  name: string;
  href: string;
  color?: string;
  colorText?: string;
  ClassName?: string;
};

export default function Button(props: Props) {
  return (
    <a
      role="button"
      href={props.href}
      // style={{ margin: "0px" }}
      className={`btn btn-${props.color ? props.color : "primary"} text-${
        props.colorText ? props.color : "white"
      } mt-auto w-auto my-2 ${props.ClassName}`}
    >
      {props.name}
    </a>
  );
}
