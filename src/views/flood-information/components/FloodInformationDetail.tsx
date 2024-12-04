import React, { useMemo, useState } from "react";
import { Button, ConfigProvider, Modal } from "antd";
import { IFloodInformation } from "../../../utils/types";
import { formatDate } from "../../../utils/formatDate";
import { Colors } from "../../../utils/colors";
import { EInformationStatus } from "../../../utils/enum";
import { updateFloodInformationService } from "../../../services/flood-information.service";

interface IProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  data?: IFloodInformation;
}
const FloodInformationDetail = ({ isOpen, setIsOpen, data }: IProps) => {
  const handleOk = async () => {
    if (!data || !data._id) return;
    await updateFloodInformationService({ id: data._id, data: {...data, status: EInformationStatus.APPROVED} })
      .then((updatedFlood) => {
        console.log("Updated Flood Information:", updatedFlood);
      })
      .catch((error) => {
        console.error("Error updating flood information:", error);
      })
      setIsOpen(false)
  };

  const handleCancel = async () => {
    if (!data || !data._id) return;
    await updateFloodInformationService({ id: data._id, data: {...data, status: EInformationStatus.DECLINED} })
      .then((updatedFlood) => {
        console.log("Updated Flood Information:", updatedFlood);
      })
      .catch((error) => {
        console.error("Error updating flood information:", error);
      })
      setIsOpen(false)
  };
  
  const floodStatus = useMemo(() => {
    return data?.modelDetectFloodLevel === 0 ? 'Normal' : 'Flood'
  }, [data])

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: Colors.kingTide,
          colorPrimaryHover: Colors.kingTide,
        },
      }}
    >
      <Modal
        title="Flood Information Detail"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          style: {
            display:
              data?.status === EInformationStatus.PENDING
                ? "inline-block"
                : "none",
          },
        }}
        cancelButtonProps={{
          style: {
            display:
              data?.status === EInformationStatus.PENDING
                ? "inline-block"
                : "none",
          },
        }}
        okText={"Confirm"}
        cancelText={"Decline"}
      >
        <div style={{ display: "flex", gap: 15, flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "7vw" }}>Username:</div>
            <div>{data?.userName}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "7vw" }}>Location:</div>
            <div>{data?.locationName}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "7vw" }}>Message:</div>
            <div>{data?.message}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "7vw" }}>Date:</div>
            <div>{data?.date ? formatDate(data?.date) : "N/A"}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "7vw" }}>Detected flood level:</div>
            <div>{floodStatus}</div>
          </div>
          <img src={data?.url} alt="" style={{ width: 436, height: "auto" }} />
        </div>
      </Modal>
    </ConfigProvider>
  );
};

export default FloodInformationDetail;
