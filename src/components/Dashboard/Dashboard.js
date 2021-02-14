import ContentDisplay from "@/components/ContentDisplay/ContentDisplay";
import PieChart from "@/components/PieChart/PieChart.js"



export default {
    name: "Dashboard",
    components:{
        ContentDisplay,
        PieChart,
    },
    data: function (){
        return {
            'charts': {
                'per_domain':{
                                option: {
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    borderWidth: "10px",
                                    hoverBackgroundColor: "red",
                                    hoverBorderWidth: "5px",
                                    title: {
                                        display: true,
                                        text: "Contacts per Domain"
                                    },
                                },
                                data: {
                                    labels: ["Green", "Red", "Blue"],
                                    datasets: [
                                        {
                                            label: "Data One",
                                            backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
                                            data: [1, 10, 5]
                                        }
                                    ]
                                },
                }
            }
        }
    }
    // data: function() {
    //     return {
    //         chartOptions: {
    //             responsive: true,
    //             maintainAspectRatio: false,
    //             borderWidth: "10px",
    //             hoverBackgroundColor: "red",
    //             hoverBorderWidth: "5px",
    //             title: {
    //                 display: true,
    //                 text: "Contacts per Domain"
    //             },
    //         },
    //         chartData: {
    //             labels: ["Green", "Red", "Blue"],
    //             datasets: [
    //                 {
    //                     label: "Data One",
    //                     backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
    //                     data: [1, 10, 5]
    //                 }
    //             ]
    //         },

    //     }
    // }
}