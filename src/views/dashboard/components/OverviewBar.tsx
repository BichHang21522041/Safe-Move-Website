import { CardItem } from "./CardItem"

export const Overview = () => {
  return <div style={{backgroundColor: '#3A3A5A', borderWidth: 1, borderRadius: '20px', color: 'white', padding: '20px', display: 'flex', flexDirection:'column', flex: 1, paddingRight: '50px', paddingLeft: '50px'}}>
    <h2>Overview</h2>
    <div style={{display: 'flex', flexDirection: 'row', flex: 1, justifyContent:'space-between'}}>
      <CardItem label={"Total flood area"} quantity={5}/>
      <CardItem label={"Total flood area"} quantity={5}/>
      <CardItem label={"Total flood area"} quantity={5}/>
      <CardItem label={"Total flood area"} quantity={5}/>
    </div>
  </div>
}