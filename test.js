Chart.defaults.font.family = 'Pretendard';

const graph1 = {   
    type: 'line',
    label: '합격률 (%)',
    data: [6.4, 3.9, 4.9, 13.8, 6],
    //스타일링
    borderColor: '#ffc11b',
    backgroundColor: '#ffffff',
    borderWidth: 4,
    pointRadius: 10,
    pointHitRadius: 10,
    pointBorderWidth: 4,
    datalabels: {
        anchor: 'end', 
        align: 'top', // 세로 정렬을 위로 설정
        color: 'white', // 라벨 색상 설정
        font: {
            weight: 500,
            size: 20,
        },
        offset: 8, // 세로 위치를 위로 10px 만큼 이동
        formatter: function(value, context) {
            return value + '%'; // 각 데이터셋의 값으로 라벨 설정
        }
    },
    yAxisID: 'y1', // 축ID
    animation:{
        duration: 4000,
        easing : 'easeOutExpo'
    }
}
const graph2 = {
    type: 'bar',
    label: '응시자 수 (명)',
    data: [250, 255, 226, 224, 216],
    borderColor: '#36A2EB',
    backgroundColor: '#0341a9',
    yAxisID: 'y2', // 축ID
    datalabels: {
        anchor: 'end', 
        align: 'top', // 세로 정렬을 위로 설정
        color: '#0341a9', // 라벨 색상 설정
        font: {
            weight: 800,
            size: 24,
        },
        offset: 0, // 세로 위치를 위로 10px 만큼 이동
        formatter: function(value, context) {
            return value + '명'; // 각 데이터셋의 값으로 라벨 설정
        }
    },
    delay: 200,
    animation: {
        duration: 2000,
        easing : 'easeOutBounce'
    },
}

const options = {
    aspectRatio: 1.4,
    scales: {
        y1: { // 첫 번째 Y 축 ID
            display: false,
            type: 'linear',
            display: true,
            position: 'left',
            grid: {
                display: false // 그리드 숨기기
            },
            min: 0,
            max: 50,
            title: {
                display: false   
            },
            // 해당 축의 틱을 숨기기
            ticks: {
                display: false
            }
        },
        y2: { // 두 번째 Y 축 ID
            type: 'linear',
            display: false,
            position: 'right',
            grid: {
                display: false // 그리드 숨기기
            },
            min: 0,
            max: 300,
            title: {
                display: false
            },
            // 해당 축의 틱을 숨기기
            ticks: {
                display: false
            }
        },
        x: {
            grid: {// X축 그리드 숨기기
                display: false
            },
            ticks:{
                color: '#000',
                font:{
                    size: 24,
                    weight:800
                }
            }
        }
    },
    plugins: {
        legend: {
            display: true,
            position: 'top',
            align: 'end',
            labels:{
                boxWidth: 20,
                boxHeight:20,
                useBorderRadius: true,
                borderRadius: 10,
                color: '#000000',
                font: {
                    size: 14
                }
            }
        },
        tooltip: {  
            enabled: false, // 툴팁 비활성화
            mode: 'index', // 호버시에 툴팁이 표시되지 않도록 설정
            intersect: false
        }
    }
};

const ctx = document.getElementById('chart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets : [graph1, graph2]
    },
    options: options,
    plugins: [ChartDataLabels],
});

graph1.datalabels.font.size = 20;