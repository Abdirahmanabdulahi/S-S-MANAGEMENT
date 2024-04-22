// FINANCE
const ctx = document.getElementById('linechart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Dec'],
    datasets: [{
      label: 'Finance in $',
      data: [1820, 2800, 2200, 2400, 2600, 2800, 3000, 3200, 3400, 3600, 2400, 4000],
      backgrouncolor:[
        'rgba(85, 85, 85, 1);'
      ],
      bodercolor:[
        'rgba(41, 155, 99);'
      ],
      bordercolor: 1
    }]
  },
  options: {
    Response:true
  }
});



// EMPLOYEE

const ctz = document.getElementById('doughnut');

new Chart(ctz, {
  type: 'doughnut',
  data: {
    labels: ['Academic', 'No-academic', 'Adminstration', 'Others'],
    datasets: [{
      label: '# of Votes',
      data: [42, 12, 8, 6],

      backgrouncolor:[
        'rgba(41, 155, 99, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(120, 46, 139, 1)'
      ],

      bodercolor:[
        'rgba(41, 155, 99, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(120, 46, 139, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    Response:true
  }
});




// START USER REGISTER







// Start Here Search java
function search(){
  let filter = document.getById('find').value.toUpperCase();
  let item = document.querySelectorAll('sidebar');
  let I = document.getElementsByTagName('h4');
  for(var i =0; i<=I.length; i ++){
  let a=item[i].getElementsByTagName('h3')[0];
  let value = a.innerHTML || a.textContent;
  if (value.toUpperCase().indexOf(filter) > -1) {
  item[i].style. display = "";
  }
  else {
  item [i].style.display= "none";
  }
  
  }
  }



// let availablekeywords= [
//   'About us',
//   'Motivation ',
//   ];
  
//   const searchi = document.queryselector(".search");
//   const search-Box = document.getElementById("search-box");
//   InputBox.onkeyup =Function(){
//   let result = [];
//   let input = inputBox.value;
//   If (input.length){
//   Result = avaliablekeyword.filter((keyword)=>{
//   return Keyword.toLowercase().includes (input);
//   });
  
//   }
//   }