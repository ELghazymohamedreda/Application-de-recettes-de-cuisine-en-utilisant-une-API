for(let i=0 ; i<6 ; i++){
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(data => {
    const meals = data.meals;
    const meal = meals[0];
    let reccette =`
    <div class="card"  style="width: 22rem;">
    <img class="card-img-top" src="${meals[0].strMealThumb}" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">${meals[0].strMeal}</h5>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick='afficher(${meals[0].idMeal})'>
    Voire
  </button>
  
    </div>
    </div>
    
    `
    $("#card").append(reccette);
}) 
}
function afficher(paraemtre){
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${paraemtre}`)
        .then((response) => response.json())
        .then((data) =>{
        let arr=[];
        let arr1=[];
        document.getElementById("image").src=data.meals[0].strMealThumb;
        document.getElementById("Cardmod").innerHTML="Name of recepts :"+" "+data.meals[0].strMeal;
        document.getElementById("description").innerHTML="Description :"+"<br>"+data.meals[0].strInstructions;
        for(let i=0;i<20;i++){
          
          let ing = data.meals[0][`strIngredient${i}`];
          let measures = data.meals[0][`strMeasure${i}`];
          if(ing){
             arr.push(ing);
          }
          if(measures){
            arr1.push(measures);
         }
          
        }

        for(let j=0;j<arr.length;j++){
          let paragraph = document.createElement("p");
          paragraph.innerHTML = arr[j];
          document.getElementById("cardes").appendChild(paragraph);
        }
        for(let k=0;k<arr1.length;k++){
          let paragraphs = document.createElement("p");
          paragraphs.innerHTML = arr1[k];
          document.getElementById("measures").appendChild(paragraphs);
        }
      });
}

