import { Input } from "antd";
import { CiSearch } from "react-icons/ci";

export const SearchBar = () => {
  return (
    <Input placeholder="Search" style={{ width: 300 }} prefix={<CiSearch />} />
  );
};
