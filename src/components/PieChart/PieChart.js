import { Doughnut } from "vue-chartjs";

export default {
    extends: Doughnut,
    name: 'PieChart',
    props: ["data", "options"],
    mounted() {
        this.renderChart(this.data, {

        });
    }
};
