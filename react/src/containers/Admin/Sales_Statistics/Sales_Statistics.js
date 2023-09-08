import React, { Component,useRef, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import HomeFooter from '../../HomePage/HomeFooter';

import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

import './Sales_Statistics.scss'

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
);

class Sales_Statistics extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chartData1: {
                labels: [
                    'Basic Tee',
                    'Fashall Tee',
                    'Cherry Tee',
                    'Logo Pattern Cardigan',
                    'Stone Wash Jacket',
                    'Dream Shorts',
                    'Taylor Tee',
                    'B Track Jacket',
                    'Quần Short Trơn',
                    'Summertime Cardigan',
                  ],
                datasets: [{
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                      ],
                    data: [1739, 1523, 1511, 1467, 1249, 1160, 1051, 989, 913, 874],
                }],
                
            },
            chartData2: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [
                    {
                        label: 'Hoàn Thành',
                        borderColor: 'rgb(34, 198, 22)',
                        backgroundColor: 'rgba(34, 198, 22, 0.2)',
                        data: [4432, 7987, 11763, 11654, 8823, 12456, 6765, 9342, 14987, 4545, 11345, 13789],
                        fill: true,
                      },
                      {
                        label: 'Đã Hủy',
                        borderColor: 'rgb(255, 0, 0)',
                        backgroundColor: 'rgba(255, 0, 0, 0.2)',
                        data: [132, 317, 423, 354, 95, 132, 175, 202, 187, 12, 241, 109],
                        fill: true,
                      },
                      {
                        label: 'Hoàn tiền',
                        borderColor: 'rgb(242, 242, 0)',
                        backgroundColor: 'rgba(242, 242, 0, 0.2)',
                        data: [442, 1232, 1763, 1154, 539, 321, 561, 342, 887, 90, 745, 1089],
                        fill: true,
                      },
                ],
                
            },
        };
    }

    render() {
        const options1 = {
            scales: {
                y: {
                beginAtZero: true,
                    title: {
                        display: true,
                        text: 'sản phẩm',
                    },
                },
                
            },
            plugins: {
                legend: {
                    display: false, // Tắt hiển thị legend
                },
            },
        };

    return (
        <div>  
            <div class="admin-container row" id="Sales_Statistics"> 
                <h1>Thống Kê</h1>
                
                <div className='Chart col'>
                    <h2>Top 10 sản phẩm bán chạy nhất Tháng 8/2023</h2>
                    <Chart type='bar' data={this.state.chartData1} options={options1} />
                </div>

                <div className='Chart col'>
                    <h2>Số lượng đơn hàng trong năm 2022</h2>
                    <Chart type='line' data={this.state.chartData2}  />
                </div>
            </div>
            <HomeFooter />
        </div>
        
    );
    }
}
const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sales_Statistics);


