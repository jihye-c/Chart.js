class Graph{
    constructor(canvasName,labels){
        this.ctx = document.getElementById(canvasName).getContext('2d');
        this.labels = labels;
        this.dataA = []; //필기
        this.dataB = []; //실기
        this.colorA = '#ffccff';
        this.colorB = '#ccffcc';
        this.yMax = 100;
        this.chart = null;
        this.options = null;
        this.datalabelSet = null;
        this.graphA = null;
        this.graphB = null;
    }
    set(){
        this.options = {
            hover:{
                mode: null
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: this.yMax
                },
                x: {
                    ticks : {
                        font: {
                            size: 24,
                            weight : 800,
                            color: '#232323'
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    align: 'center',
                    labels:{
                        boxWidth: 16,
                        boxHeight:16,
                        color: '#000000',
                        padding: 24,
                        font: {
                            size: 16,
                            weight: 400,
                        }
                    }
                },
                tooltip: {  
                    enabled: false, // 툴팁 비활성화
                    mode: 'index', // 호버시에 툴팁이 표시되지 않도록 설정
                    intersect: false
                },
            }
        }
        this.datalabelSet = {
            anchor: 'end', 
            align: 'top', // 세로 정렬을 위로 설정
            color: '#232323',
            font: {
                weight: 600,
                size: 16,                
            },
            offset: 0, // 세로 위치를 위로 10px 만큼 이동
            formatter: function(value) {
                return value + '%'; // 각 데이터셋의 값으로 라벨 설정
            }
        }
        this.graphA = {
            label: '필기 합격률 (%)',
            data: this.dataA,
            backgroundColor: this.colorA,
            datalabels: this.datalabelSet,
            animation:{
                duration: 2000,
                easing : 'easeInOutCubic'
            }
        }
        this.graphB = {
            label: '실기 합격률 (%)',
            data: this.dataB,
            backgroundColor: this.colorB,
            datalabels: this.datalabelSet,
            animation:{
                duration: 2000,
                delay : 200,
                easing : 'easeInOutCubic'
            }
        }
        Chart.defaults.font.family = 'Pretendard';
    }
    draw(){
        this.set();
        this.chart = new Chart(this.ctx,{
            type: 'bar',
            data : {
                labels : this.labels,
                datasets : [this.graphA, this.graphB]
            },
            options : this.options,
            plugins: [ChartDataLabels],
        });
    }
    reload(){
        console.log('update');
        this.chart.reset();
        this.chart.update({
            duration: 800,
            easing: 'easeOutBounce'
        });
    }
}

const chart1 = new Graph('chart1',['2019', '2020', '2021', '2022', '2023']);
chart1.dataA = [5.3, 8, 5, 4.12, 6];
chart1.dataB = [6, 7, 7, 8, 5];
chart1.colorA = '#00ffcc';
chart1.colorB = '#00ccff';
chart1.yMax = 20;
chart1.draw();

const chart2 = new Graph('chart2', ['2019','2020','2021','2022','2023']);
chart2.dataA = [60,30,20,10,15];
chart2.dataB = [20,30,10,15,12];
chart2.draw();