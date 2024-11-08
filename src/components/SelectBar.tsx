import { ConfigProvider, Select } from "antd";
import { ISelectValue } from "../utils/types";
import { Colors } from "../utils/colors";
import { EStatus } from "../utils/enum";

export const SelectBar = ({
  defaultValue,
  options,
  setSelectedValue,
}: {
  defaultValue: EStatus;
  options: ISelectValue[];
  setSelectedValue: (val: EStatus) => void;
}) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            activeBorderColor: Colors.primary[500],
            hoverBorderColor: Colors.primary[500],
            optionSelectedBg: Colors.primary[100],
          },
        },
      }}
    >
      <Select
        defaultValue={defaultValue}
        style={{ width: 120 }}
        onChange={(e: EStatus) => setSelectedValue(e)}
        options={options}
      />
    </ConfigProvider>
  );
};
