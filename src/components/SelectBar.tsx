import { Select } from "antd";
import { ISelectValue } from "../utils/types";

export const SelectBar = ({
  defaultValue,
  options,
}: {
  defaultValue: string;
  options: ISelectValue[];
}) => {
  return (
    <Select
      defaultValue={defaultValue}
      style={{ width: 120 }}
      onChange={() => {}}
      options={options}
    />
  );
};
