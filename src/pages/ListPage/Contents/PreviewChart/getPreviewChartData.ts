export const getPreviewChartData = () => {
  let base = +new Date('2022-01-01');
  const oneDay = 24 * 3600 * 1000;
  let data = [[base, 100]];
  const today = +new Date();
  const count = Math.floor((today - base) / oneDay);
  for (let i = 1; i < count; i++) {
    let now = new Date((base += oneDay));
    data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])]);
  }
  return data;
};
