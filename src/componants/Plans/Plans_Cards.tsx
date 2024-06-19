import { plansType } from "../types"
import Plan from "../utils/Plan"

export default function Plans_Cards() {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
                plans.map((plan, key) => (
                    <div key={key}>
                        <Plan data={plan} />
                    </div>
                ))
            }
        </div>
    )
}

const plans: plansType[] = [
    {
    title: 'Free',
    price: '0.00',
    access_text: true, 
    access_vedios: true, 
    access_LeaderBoard: true, 
    Ads: false, 
    access_Assignment: false, 
    daily_Prizes: false, 
    certificate: false, 
    gb_Hosting: false, 
    access_badge_System: false, 
    },
    {
        title: 'basic',
        price: '14.99',
        access_text: true, 
        access_vedios: true, 
        access_LeaderBoard: true, 
        Ads: true, 
        access_Assignment: true, 
        daily_Prizes: true, 
        certificate: false, 
        gb_Hosting: false, 
        access_badge_System: false, 
        },
        {
            title: 'premuim',
            price: '99.99',
            access_text: true, 
            access_vedios: true, 
            access_LeaderBoard: true, 
            Ads: true, 
            access_Assignment: true, 
            daily_Prizes: true, 
            certificate: true, 
            gb_Hosting: true, 
            access_badge_System: true, 
            },
]