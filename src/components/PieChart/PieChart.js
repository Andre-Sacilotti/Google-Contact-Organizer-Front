import { Doughnut } from "vue-chartjs";

export default {
    extends: Doughnut,
    name: 'PieChart',
    props: {
            "data": {
                type: Object,
                default: null
            },
            "options":{
                type: Object,
                default: null
            }
            },
    mounted() {
        this.renderChart(this.data, this.options);
    }
};
