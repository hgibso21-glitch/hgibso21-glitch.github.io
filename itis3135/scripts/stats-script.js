const getMean = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
  let mean = numbers.reduce((acc, el) => acc + el, 0) / numbers.length;
  
  document.querySelector("#gotmean").textContent = mean;
}
