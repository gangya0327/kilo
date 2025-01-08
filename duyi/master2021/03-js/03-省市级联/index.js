console.log('cities :>> ', cities['01']);

var provinceDOM = document.getElementById('province');
var cityDOM = document.getElementById('city');
var schoolDOM = document.getElementById('school');

for (var prop in provinces) {
  var optionDOM = document.createElement('option');
  optionDOM.value = prop;
  optionDOM.innerText = provinces[prop];
  provinceDOM.appendChild(optionDOM);
}

provinceDOM.onchange = function () {
  cityDOM.innerHTML = '';
  schoolDOM.innerHTML = '';

  var p = provinceDOM.value;
  var cityObj = cities[p];
  if (!cityObj) return;
  for (var prop in cityObj) {
    console.log(prop, cityObj[prop]);
    var optionDOM = document.createElement('option');
    optionDOM.value = prop;
    optionDOM.innerText = cityObj[prop];
    cityDOM.appendChild(optionDOM);
  }

  var c = cityDOM.value;
  var schoolObj = schools[p][c];
  for (var prop in schoolObj) {
    console.log(prop, schoolObj[prop]);
    var optionDOM = document.createElement('option');
    optionDOM.value = prop;
    optionDOM.innerText = schoolObj[prop];
    schoolDOM.appendChild(optionDOM);
  }
};

cityDOM.onchange = function () {
  schoolDOM.innerHTML = '';
  
  var p = provinceDOM.value;
  var c = cityDOM.value;
  var schoolObj = schools[p][c];
  for (var prop in schoolObj) {
    console.log(prop, schoolObj[prop]);
    var optionDOM = document.createElement('option');
    optionDOM.value = prop;
    optionDOM.innerText = schoolObj[prop];
    schoolDOM.appendChild(optionDOM);
  }
};
