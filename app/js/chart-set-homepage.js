
var ctx = document.getElementById('chart-1').getContext('2d');

var data = {
				// labels: ['Февраль','Февраль', 'Март', 'Март', 'Апрель','Апрель', 'Май','Май', 'Июнь','Июнь','Июль', 'Июль','', ],
				labels: ['', '', '', '', '', '', '', '', '', '', '', '', ''],
				datasets: [{
					data: [336, 454, 430, 400, 620, 800, 900, 1000, 700, 930, 1200, 1270, 1345],
					borderColor: ['rgba(95,21,98,1)'],
					type: 'line',
					lineTension: 0,
					yAxisID: 'left-y-axis',

				}, {
					data: [80000, 90000, 100000, 115000, 131000, 105000, 131000, 131000, 131000, 160000, 184500, 198000, 211000],
					borderColor: ['rgba(254,204,0,1)'],
					type: 'line',
					lineTension: 0,
					yAxisID: 'right-y-axis',
				}]
			};  

			Chart.defaults.global.defaultFontColor = '#727C8F';
			Chart.defaults.global.defaultFontSize = '12';
			Chart.defaults.global.defaultFontFamily = 'Gilroy';
			Chart.defaults.global.elements.point.radius = 0;
			Chart.defaults.global.elements.line.backgroundColor = 'rgba(0, 0, 0, 0)';
			Chart.defaults.global.elements.line.borderWidth = 8;

			var myChart = new Chart(ctx, {
				type: 'line',
				data:  data,
				options: {
					scales: {
						yAxes: [{
							id: 'left-y-axis',
							position: 'left',
							ticks: {
								beginAtZero: true,
								display: false,
								max: 3000,
							},
							gridLines: {
								display: false,
								drawBorder: false,
							},
						}, {
							id: 'right-y-axis',
							ticks: {
								beginAtZero: true,
								display: false,
								max: 250000,
							},
							position: 'right',
							display: false,
							gridLines: {
								display: false,
								drawBorder: false,
							},
						}],
						xAxes: [{
							ticks: {
								autoSkipPadding: 60,
							},
							gridLines: {
								drawBorder: false,
							},
						}],
					},
					legend: {
						display: false,
					},
					title: {
						display: false,
					},
					tooltips: {
						enabled: false,
					}
				},

			});


