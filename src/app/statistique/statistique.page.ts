
import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.page.html',
  styleUrls: ['./statistique.page.scss'],
})
export class StatistiquePage {
  @ViewChild('barChart') barChart;
  bars: any;
  colorArray: any;
  constructor() { }
  ionViewDidEnter() {
    this.createBarChart();
  }
    createBarChart() {
      this.bars = new Chart(this.barChart.nativeElement, {
        type: 'line',
        data: {
          labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027'],
          datasets: [{
            label: 'SISR',
            data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
            backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
            borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
            borderWidth: 1
          }, {
            label: 'SLAM',
            data: [5, 6, 5, 9, 9, 10, 13, 17],
            backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
            borderColor: 'rgb(95, 63, 191)',// array should have same number of elements as number of dataset
            borderWidth: 1

          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    }
  }