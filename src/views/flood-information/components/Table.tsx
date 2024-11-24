import type { TableColumnsType, TableProps } from "antd";
import { ConfigProvider, Table, Tag } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Colors } from "../../../utils/colors";
import { EInformationStatus } from "../../../utils/enum";
import { IFloodInformation } from "../../../utils/types";

type TableRowSelection<T extends object = object> =
  TableProps<T>["rowSelection"];

const columns: TableColumnsType<IFloodInformation> = [
  { title: "ID", dataIndex: "_id", align: "center" },
  { title: "Username", dataIndex: "userName", align: "center" },
  { title: "Location", dataIndex: "locationName", align: "center" },
  { title: "Created At", dataIndex: "date", align: "center" },
  {
    title: "Status",
    dataIndex: "status",
    render: (status: EInformationStatus) => (
      <div>
        {status === EInformationStatus.PENDING ? (
          <Tag color="lightGrey">Pending</Tag>
        ) : status === EInformationStatus.APPROVED ? (
          <Tag color="green">Approved</Tag>
        ) : (
          <Tag color="red">Declined</Tag>
        )}
      </div>
    ),
    align: "center",
  },
];

const FloodInformationTable = ({
  status,
  setSelectedList,
  list,
  handleActionClick,
}: {
  status: EInformationStatus;
  setSelectedList: (val: string[]) => void;
  list: IFloodInformation[];
  handleActionClick: (id: string) => void;
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const divRef = useRef<HTMLDivElement>(null);
  const [divHeight, setDivHeight] = useState<number>(0);
  const [data, setData] = useState<IFloodInformation[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedCameraId, setSelectedCameraId] = useState<string | null>(null);

  useEffect(() => {
    setData(list);
    setSelectedRowKeys([]);
  }, [list]);

  useEffect(() => {
    if (divRef.current) {
      const height = divRef.current.clientHeight;
      setDivHeight(height);
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
    setSelectedRowKeys(newSelectedRowKeys);
    const stringSelectedRowKeys = newSelectedRowKeys.map((key) =>
      key.toString()
    );
    setSelectedList(stringSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<IFloodInformation> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleOpenModal = (id: string) => {
    setSelectedCameraId(id);
    setIsOpenModal(true);
  };

  const handleConfirmAction = () => {
    if (selectedCameraId) {
      handleActionClick(selectedCameraId);
    }
    setIsOpenModal(false);
    setSelectedCameraId(null);
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
            colorPrimaryHover: Colors.kingTide,
          },
        }}
      >
        <Table<IFloodInformation>
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          pagination={{ position: ["bottomCenter"] }}
          scroll={{ y: divHeight - 55 * 2 - 10, x: 600 }}
          rowKey="_id"
        />
        {/* <Modal
          open={isOpenModal}
          onOk={handleConfirmAction}
          onCancel={() => setIsOpenModal(false)}
          centered
          width={400}
          closable={false}
          okText="Confirm"
          okButtonProps={{ style: { backgroundColor: Colors.kingTide } }}
        >
          <div style={{ fontSize: Size.M }}>
            Are you sure you want to{" "}
            {status === EStatus.ACTIVE ? "deactivate" : "activate"} this camera?
          </div>
        </Modal> */}
      </ConfigProvider>
    </div>
  );
};

export default FloodInformationTable;
