import { useMemo } from "react";
import { Colors } from "../../../utils/colors";
import { EStatus } from "../../../utils/enum";

export const StatusTag = ({ status }: { status: EStatus }) => {
  const statusStyles: { [key in EStatus]: React.CSSProperties } = {
    [EStatus.ACTIVE]: {
      color: Colors.kaitokeGreen,
      backgroundColor: Colors.pickFord,
      padding: "5px 10px",
      borderRadius: "5px",
      display: "inline-block", // Allow content to dictate width
      whiteSpace: "nowrap",
    },
    [EStatus.INACTIVE]: {
      color: Colors.loverKiss,
      backgroundColor: Colors.wePeep,
      padding: "5px 10px",
      borderRadius: "5px",
      fontWeight: "500",
      display: "inline-block", // Allow content to dictate width
      whiteSpace: "nowrap",
    },
  };
  const statusText = useMemo(
    () => (status === EStatus.ACTIVE ? "Active" : "Inactive"),
    [status]
  );
  return (
    <div style={{ ...statusStyles[status], textAlign: "center" }}>
      {statusText}
    </div>
  );
};
