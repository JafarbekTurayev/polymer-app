// eslint-disable-next-line no-undef
const initialState = {
    type: 'bar',
    data: {
        labels: ['For bags and extra-thin', 'Rope monofilament', 'For bottles for detergents Wed.','For household goods.'],
        datasets: [{
            axis: 'y',
            label: '',
            data: [2,5,1,3],
            fill: false,
            indexAxis: 'y',
            backgroundColor: [
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ]
        }]
    }
}

export const barChartReduser = (state = initialState, action)=>{
        return state
}