import { useEffect, useState } from "react";
import SellerSidebar from "./SellerSidebar";
import Chart from "react-apexcharts";

function MonthlyReport() {

    const baseurl = 'https://django-ecommerce-backend.onrender.com/api/'
    const [Dates, setDates] = useState([]);
    const [Data, setData] = useState([])
    function fetch_orders(baseurl) {
        fetch(baseurl)
            .then(response => response.json())
            .then(data => {
                setDates(data.show_chat_monthly_orders.dates)
                setData(data.show_chat_monthly_orders.data)
            })
    }
    // vendor / <int:pk>/daily-report/
    useEffect(() => {
        const vendor_id = localStorage.getItem('vendor_id')
        fetch_orders(baseurl + 'vendor/' + vendor_id + '/')
    }, [])
    const chatOption = {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: Dates
            }
        },
        series: [
            {
                name: "order",
                data: Data
            }
        ]
    };

    const chatElement = <Chart options={chatOption.options} series={chatOption.series} type="bar" width="500" />

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <SellerSidebar />
                    </div>
                    <div className="col-md-9 col-12 mb-2">
                        <h4>Monthly Report</h4>
                        <div className="row">
                            {chatElement}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default MonthlyReport;