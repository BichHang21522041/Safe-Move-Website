import { ConfigProvider, Input } from "antd";
import { CiSearch } from "react-icons/ci";
import { Colors } from "../utils/colors";

export const SearchBar = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            activeBorderColor: Colors.primary[500],
            hoverBorderColor: Colors.primary[500],
          },
        },
      }}
    >
      <Input
        placeholder="Search"
        style={{ width: 300 }}
        prefix={<CiSearch />}
      />
    </ConfigProvider>
  );
};
