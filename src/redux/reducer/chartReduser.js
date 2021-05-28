import {CHART_TYPE} from "../types/chartTypes";


const LineChart = {
    type: 'bar',
    data: {
        labels: [0,1,2,3,4],
        datasets: [{
            // axis: 'y',
            label: '',
            data: [0,205,400,520,270],
            fill: false,
            // indexAxis: 'y',
            backgroundColor:'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 0.2)',
        }]
    },
    options: {
        plugins:{
            title:{
                display: true,
                text: 'Statistikalar',
                align: 'start',
                font:{
                    size: '20'
                }
            }
        }
    }

};

export const chartReduser = (state =LineChart, action)=>{
    if (action.type === CHART_TYPE){
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}