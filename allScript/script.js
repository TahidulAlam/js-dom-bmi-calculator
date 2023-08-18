console.log("BMI worked");
document.getElementById("BMIsubmit").addEventListener("click", () => {
  // let age = document.getElementById("age");
  let feet = document.getElementById("feet");
  let feetNum = parseFloat(feet.value);
  let inch = document.getElementById("inch");
  let inchNum = parseFloat(inch.value);
  let weight = document.getElementById("weight");
  let weightNum = parseFloat(weight.value);
  if (isNaN(inchNum) || isNaN(weightNum) || isNaN(weightNum)) {
    alert("invalide height or weights");
    return;
  }
  let pounds = weightNum * 2.20462262185;
  let inches = feetNum * 12 + inchNum;
  const BMI = Math.floor((pounds / (inches * inches)) * 703).toFixed(2);
  const BMIresult = document.getElementById("BMIresult");
  BMIresult.innerText = BMI;
  inch.value = " ";
  feet.value = " ";
  weight.value = " ";

  if (BMI < 16) {
    Underweight();
    animation1();
  } else if (BMI >= 16 && BMI < 18.5) {
    Underweight1();
    animation2();
  } else if (BMI >= 18.5 && BMI < 25) {
    Underweight3();
    animation3();
  } else if (BMI >= 25 && BMI < 30) {
    overWeight1();
    animation4();
  } else if (BMI >= 30 && BMI < 35) {
    overWeight2();
    animation5();
  } else if (BMI >= 35 && BMI < 40) {
    overWeight3();
    animation6();
  } else if (BMI >= 40) {
    overWeight4();
    animation7();
  }
});
