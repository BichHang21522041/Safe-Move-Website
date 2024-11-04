import type { TableColumnsType, TableProps } from "antd";
import { ConfigProvider, Table } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { Colors } from "../utils/colors";
import { EStatus } from "../utils/enum";
import { Size } from "../utils/size";
import { StatusTag } from "../views/camera/components/StatusTag";
import "./index.css";

type TableRowSelection<T extends object = object> =
  TableProps<T>["rowSelection"];

interface DataType {
  key: React.Key;
  username: string;
  location: string;
  date: string;
  status: EStatus;
}

const columns: TableColumnsType<DataType> = [
  { title: "Username", dataIndex: "username", align: "center" },
  { title: "Location", dataIndex: "location", align: "center" },
  { title: "Date", dataIndex: "date", align: "center" },
  {
    title: "Status",
    dataIndex: "status",
    render: (status: EStatus) => (
      <span>
        <StatusTag status={status} />
      </span>
    ),
    align: "center",
  },
  {
    title: "Action",
    dataIndex: "action",
    render: () => <CiCircleRemove size={Size.L} />,
    align: "center",
  },
];

const dataSource = Array.from<DataType>({ length: 46 }).map<DataType>(
  (_, i) => ({
    key: i,
    username: `User ${i}`,
    location: `Location ${i}`,
    date: `03/11/2024`,
    status: EStatus.ACTIVE,
  })
);

const CustomTable: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const divRef = useRef<HTMLDivElement>(null);
  const [divHeight, setDivHeight] = useState<number>(0);
  // const headerRef = useRef<HTMLDivElement | null>(null);
  // const [headerHeight, setHeaderHeight] = useState<number>(0);

  // useEffect(() => {
  //   if (headerRef.current) {
  //     console.log("header height", headerRef.current.clientHeight);
  //     setHeaderHeight(headerRef.current.clientHeight);
  //   }
  // }, []);

  useEffect(() => {
    if (divRef.current) {
      const height = divRef.current.clientHeight;
      setDivHeight(height);
      console.log("Div Height:", height);
    }
    const handleResize = () => {
      if (divRef.current) {
        setDivHeight(divRef.current.clientHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div
      style={{
        width: "100%",
        flexDirection: "column",
        height: "100%",
        overflowX: "auto",
      }}
      ref={divRef}
    >
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBorderRadius: 0,
              rowSelectedBg: Colors.primary[50],
              rowSelectedHoverBg: Colors.primary[100],
            },
          },
          token: {
            colorPrimary: Colors.kingTide,
          },
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <Table<DataType>
            rowSelection={rowSelection}
            columns={columns}
            dataSource={dataSource}
            pagination={{ position: ["bottomCenter"] }}
            scroll={{ y: divHeight - 55 * 2 - 10, x: 600 }}
          />
        </div>
      </ConfigProvider>
    </div>
  );
};

export default CustomTable;
