import { Doughnut, mixins } from "vue-chartjs";

export default {
    extends: Doughnut,
    name: 'PieChart',
    mixins: [mixins.reactiveProp],
    props: {
            "chartData": {
                type: Object,
                default: null
            },
            "chartOptions":{
                type: Object,
                default: null
            }
            },
    mounted() {
        this.renderChart(this.chartData, this.chartOptions);
    }
};
