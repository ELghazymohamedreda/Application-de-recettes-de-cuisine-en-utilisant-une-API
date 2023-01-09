for(let i=0 ; i<6 ; i++){
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(data => {
    const meals = data.meals;
    const meal = meals[0];
    console.log(meal)
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
    document.getElementById('staticBackdropLabel').innerHTML='<h1 class="modal-title fs-5" >'+paraemtre+'</h1>'
    console.log(paraemtre);
}