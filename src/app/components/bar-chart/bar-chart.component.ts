import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
 
  // Atributo que almacena los datos del chart
  public chart!: Chart;
  public showChart: boolean = false; // Bandera para controlar el renderizado del canvas
 
  // Este método ya no inicializa la gráfica, solo activa una bandera para demostrar el uso de ngIf
  ngOnInit(): void {
    console.log("ngOnInit ejecutado, pero showChart es false, canvas no está en el DOM aún.");
    // Aquí podríamos simular la carga de datos o cualquier otra lógica.
    setTimeout(() => {
      // Activamos el canvas después de un tiempo
      this.showChart = true; 
      console.log("Canvas disponible en el DOM. Se mostrará.");
    }, 2000); // Simulamos un retraso (por ejemplo, una llamada a una API)
    this.inicializarChart();
 
  }

  // // Inicializamos el gráfico cuando el DOM esté completamente disponible
  // ngAfterViewInit(): void {
  //   console.log("ngAfterViewInit ejecutado, esperando a que showChart sea true...");
  //   // Esperamos un tiempo hasta que el canvas se haya renderizado con la condición del ngIf
  //   const interval = setInterval(() => {
  //     if (this.showChart) {
  //       this.inicializarChart(); // Inicializamos la gráfica solo cuando showChart es true
  //       clearInterval(interval); // Limpiamos el intervalo
  //     }
  //   }, 100); // Verificamos cada 100 ms si el canvas ya está en el DOM
  // }

  private inicializarChart(){
    // datos
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        tension: 0.1
      },
      {
        label: 'Dataset 2',
        data: [30, 45, 70, 35, 75, 90, 60],
        fill: false,
        backgroundColor: [
          'rgba(255, 0, 0, 0.2)',
          'rgba(0, 255, 0, 0.2)',
          'rgba(0, 0, 255, 0.2)',
          'rgba(255, 255, 0, 0.2)',
          'rgba(255, 0, 255, 0.2)',
          'rgba(0, 255, 255, 0.2)',
          'rgba(128, 128, 128, 0.2)'
        ],
        borderColor: [
          'rgb(255, 0, 0)',
          'rgb(0, 255, 0)',
          'rgb(0, 0, 255)',
          'rgb(255, 255, 0)',
          'rgb(255, 0, 255)',
          'rgb(0, 255, 255)',
          'rgb(128, 128, 128)'
        ],
        tension: 0.1
      },
    ]
    };
    // Creamos la gráfica
    this.chart = new Chart("barChart", {
      type: 'bar' as ChartType, // tipo de la gráfica 
      data: data, // datos 
      options: { // opciones de la gráfica
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            labels: {
              boxWidth: 0,
              font: {
                size: 16,
                weight: 'bold'
              }
            },
          }
        },
      }
    });
    //this.chart.canvas.width = 100;
    //this.chart.canvas.height = 100;
  }
}
