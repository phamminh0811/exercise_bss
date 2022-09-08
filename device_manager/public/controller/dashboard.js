
function showDevicesDashboard() {
    fetch('/controller/dashboard.json')
        .then(response => response.json())
        .then(data => {
            var devices = data;
            var devices_ec = [];
            for (var i = 0; i < devices.length; i++) {
                devices_ec.push({
                    y: devices[i].power_consume,
                    legendText: devices[i].device + " " + devices[i].power_consume,
                    label: devices[i].device
                })
            }
            var chart = new CanvasJS.Chart("dashboard-display", {
                animationEnabled: true,
                title: {
                    horizontalAlign: "left"
                },
                data: [{
                    type: "doughnut",
                    startAngle: 0,
                    innerRadius: 50,
                    indexLabelFontSize: 10,
                    toolTipContent: "<b>{label}:</b> {y} (#percent%)",
                    dataPoints: devices_ec,
                    showInLegend: true,
                }]
            });
            chart.render();
    });
  
}
