import {fetchRevenue} from "@/app/lib/data";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";

export default async function Page(){
    const revenue = await fetchRevenue();
    console.log(revenue);
    return (
        <>
            <p>invoices page</p>
            <RevenueChart revenue={revenue}/>
        </>

    );
}