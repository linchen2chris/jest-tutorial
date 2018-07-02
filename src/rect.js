const rect = (x, y, callback) => {
  console.log("x = ", x, "y = ", y);
  if ( x <= 0 || y <=0) {
    setTimeout(() => {
      callback(new Error("bad parameter"), null);
    }, 2000);
  } else {
    setTimeout(() => {
      callback(null, {
        area: () => x*y,
      })}, 2000);
  }
}

export default rect;
