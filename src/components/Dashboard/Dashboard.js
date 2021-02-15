import ContentDisplay from "@/components/ContentDisplay/ContentDisplay";
import PieChart from "@/components/PieChart/PieChart.js"
import 'vue-select/dist/vue-select.css';

var randomColorGenerator = function () {

    const colors = []

    for(var a=0; a < 50; a++){
        let r = Math.floor(Math.random() * 240);
        let g = Math.floor(Math.random() * 240);
        let b = 120
        colors.push('rgb(' + r + ', ' + g + ', ' + b + ')')
    }

    return colors
};

export default {
    name: "Dashboard",
    components:{
        ContentDisplay,
        PieChart,
    },
    onload: function(){
        console.log("loading")
    },
    methods: {
        setSelected(value){
            this.show = value
            this.$forceUpdate()


        }
        },
    props: [
        'per_domain_label', 'per_domain_data',
        'per_organization_label', 'per_organization_data',
        'per_city_label', 'per_city_data',
        'per_jobtitle_label', 'per_jobtitle_data'
    ],
    data: function (){
        return {
            items: ['Organization', 'Job Title', 'Domain', 'City'],
            show: 'domain',
            'charts': {
                'per_domain':{
                                option: {
                                    responsive: false,
                                    maintainAspectRatio: false,
                                    borderWidth: "10px",
                                    hoverBackgroundColor: "red",
                                    hoverBorderWidth: "5px",
                                    title: {
                                        display: true,
                                        text: "Contacts per Domain",
                                        fontSize: 18
                                    },
                                    legend:{
                                        display: true,
                                        position: 'bottom',
                                        labels: {
                                            boxWidth: 20,
                                            fontSize: 10,
                                        }
                                    }
                                },
                                data: {
                                    labels: this.per_domain_label,
                                    datasets: [
                                        {
                                            label: "Data One",
                                            backgroundColor: randomColorGenerator(),
                                            data: this.per_domain_data
                                        }
                                    ]
                                },
                },

                'per_city':{
                    option: {
                        responsive: false,
                        maintainAspectRatio: false,
                        borderWidth: "10px",
                        hoverBackgroundColor: "red",
                        hoverBorderWidth: "5px",
                        title: {
                            display: true,
                            text: "Contacts per Living City",
                            fontSize: 18
                        },
                        legend:{
                            display: true,
                            position: 'bottom',
                            labels: {
                                boxWidth: 20,
                                fontSize: 14,
                            }
                        }
                    },
                    data: {
                        labels: this.per_city_label,
                        datasets: [
                            {
                                label: "Data One",
                                backgroundColor: randomColorGenerator(),
                                data: this.per_city_data
                            }
                        ]
                    },
                },

                'per_organization':{
                    option: {
                        responsive: false,
                        maintainAspectRatio: false,
                        borderWidth: "10px",
                        hoverBackgroundColor: "red",
                        hoverBorderWidth: "5px",
                        title: {
                            display: true,
                            text: "Contacts per Organization",
                            fontSize: 18
                        },
                        legend:{
                            display: true,
                            position: 'bottom',
                            labels: {
                                boxWidth: 20,
                                fontSize: 14,
                            }
                        }
                    },
                    data: {
                        labels: this.per_organization_label,
                        datasets: [
                            {
                                label: "Data One",
                                backgroundColor: randomColorGenerator(),
                                data: this.per_organization_data
                            }
                        ]
                    },
                },

                'per_jobtitle':{
                    option: {
                        responsive: false,
                        maintainAspectRatio: false,
                        borderWidth: "10px",
                        hoverBackgroundColor: "red",
                        hoverBorderWidth: "5px",
                        title: {
                            display: true,
                            text: "Contacts per Job Title",
                            fontSize: 18
                        },
                        legend:{
                            display: true,
                            position: 'bottom',
                            labels: {
                                boxWidth: 20,
                                fontSize: 14,
                            }
                        }
                    },
                    data: {
                        labels: this.per_jobtitle_label,
                        datasets: [
                            {
                                label: "Data One",
                                backgroundColor: randomColorGenerator(),
                                data: this.per_jobtitle_data
                            }
                        ]
                    },
                }
            }
        }
    }

}