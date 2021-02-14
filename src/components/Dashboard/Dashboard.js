import ContentDisplay from "@/components/ContentDisplay/ContentDisplay";
import PieChart from "@/components/PieChart/PieChart.js"

export default {
    name: "Dashboard",
    components:{
        ContentDisplay,
        PieChart,
    },
    data: function() {
        return {
            chartOptions: {
                hoverBorderWidth: 20,
                responsive: true,
                maintainAspectRatio: false,
                cutoutPercentage: 80,
            },
            chartData: {
                hoverBackgroundColor: "red",
                hoverBorderWidth: 10,
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