export interface ICard {
  label: string,
  quantity: number
}

export const CardItem = ({label, quantity}: ICard) => {
  return <div style={{width: '15%', height: '100%', backgroundColor: '#9797EF', justifyContent:'space-between', padding: '10px', display: 'flex', borderWidth: 1, borderRadius: 12}}>
    <div style={{fontSize: '25px', color: '#464255'}}>{label}</div>
    <h1>{quantity}</h1>
  </div>;
};
