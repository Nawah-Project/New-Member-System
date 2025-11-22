import './pro_space.css'
import { pro_space_data } from './pro_space_data'
export default function ProSpace() {
    return (
        <div id="pro-space">
            <h1>مساحة مشروع نواة</h1>

            <div id='pro-space-cards'>

                <ProSpaceCard data={pro_space_data}/>

            </div>
        </div>
    )
}

function ProSpaceCard({data}) {
    return data.map((card) => (
        <div key={card.id} id='pro-space-card'>
            <img src={card.image} alt="" />
            <p>{card.desc}</p>
        </div>
    ))
}