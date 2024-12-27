import { ChartArea, ChartData, Point } from 'chart.js';
import { BalanceHistoryData } from '../types';

export const getModifiedAreaChartData = (
  data: BalanceHistoryData[]
): ChartData<'line', (number | Point | null)[], unknown> => {
  const labels = data.map((item) => item.month);
  const balance = data.map((item) => item.balance);

  return {
    labels,
    datasets: [
      {
        data: balance,
        borderColor: '#2D60FF',
        borderWidth: 5,
        pointRadius: 0,
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return;
          }
          return getGradient({ ctx, chartArea });
        },
        fill: 'origin',
      },
    ],
  };
};

function getGradient({
  ctx,
  chartArea,
}: {
  ctx: CanvasRenderingContext2D;
  chartArea: ChartArea;
}) {
  const chartWidth = chartArea.right - chartArea.left;
  let width, height, gradient;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, 'rgba(45, 96, 255, 0)');
    gradient.addColorStop(1, 'rgba(45, 96, 255, 0.4)');
  }

  return gradient;
}
