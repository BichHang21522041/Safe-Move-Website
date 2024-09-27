import { Avatar, GetProps, Input } from "antd";
import { UserOutlined } from '@ant-design/icons';

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

export const Header = ({style}: {style?: React.CSSProperties;}) => {
  return <div style={style}>
    <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: '30%', backgroundColor: 'transparent'}} />
    <Avatar size="large" icon={<UserOutlined />} />
  </div>
}