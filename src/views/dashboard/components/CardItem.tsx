export interface ICard {
  label: string;
  quantity: number;
  color: string;
}

export const CardItem = ({ label, quantity, color }: ICard) => {
  return (
    <div
      style={{
        width: "15%",
        backgroundColor: color,
        justifyContent: "space-between",
        padding: "10px",
        display: "flex",
        borderWidth: 1,
        borderRadius: 12,
      }}
    >
      <div style={{ fontSize: "20px", color: "#464255" }}>{label}</div>
      <h1>{quantity}</h1>
    </div>
  );
};
