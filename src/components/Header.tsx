import { Avatar, GetProps, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Size } from "../utils/size";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

export const Header = ({
  style,
  title,
}: {
  style?: React.CSSProperties;
  title: string;
}) => {
  return (
    <div style={style}>
      <div style={{ fontSize: Size.XL, fontWeight: "bold" }}>{title}</div>
      <Avatar size="large" icon={<UserOutlined />} />
    </div>
  );
};
