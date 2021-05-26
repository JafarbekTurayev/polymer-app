import {CHART_TYPE} from "../types/chartTypes";


const LineChart = {
    labels: ["Jan","Feb","Mrt","Apr","May"],
    datasets: [
        {
            label: 'Statistikalar',
            data: [0,100,200,300,400,500,600],
            borderColor: ['#333'],
            backgroundColor: ['#333'],
            pointBackgroundColor: ['#333'],
            pointBorderColor: ['#FFF']
        }
    ],
    options: {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
    },

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