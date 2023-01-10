// for(let i=0 ; i<6 ; i++){
//     fetch('https://www.themealdb.com/api/json/v1/1/random.php')
//     .then(response => response.json())
//     .then(data => {
//     const meals = data.meals;
//     const meal = meals[0];
//     let reccette =`
//     <div class="card"  style="width: 22rem;">
//     <img class="card-img-top" src="${meals[0].strMealThumb}" alt="Card image cap">
//     <div class="card-body">
//     <h5 class="card-title">${meals[0].strMeal}</h5>
//     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick='afficher(${meals[0].idMeal})'>
//     Voire
//   </button>
  
//     </div>
//     </div>
    
//     `
//     $("#card").append(reccette);
// }) 
// }
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
  
  function search() {
    document.getElementById("card").innerHTML="";
    let searchValue = document.getElementById('sear').value;
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
          const Meal = data.meals;
  
          console.log(Meal);
  
  
          if(searchValue.length!==""){
            for(let i=0;i<Meal.length;i++){
              let reccettes =`
                  <div class="card"  style="width: 22rem;">
                      <img class="card-img-top" src="${Meal[i].strMealThumb}" alt="Card image cap">
                      <div class="card-body">
                          <h5 class="card-title">${Meal[i].strMeal}</h5>
                          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick='afficher(${Meal[i].idMeal})'>
                           Voire</button>
      
                      </div>
                   </div>
        
              `
              $("#card").append(reccettes);
            }
          }
  
          
  
        })
  
  }
  // fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  // .then(response => response.json())
  // .then(data => {
  
  //   const categories = data.categories;
  //   for(let i=0;i<categories.length;i++){
  //     let option =`
      
  //      <option value="${categories[i].strCategory}">${categories[i].strCategory}</option>
  //     `;
  //     $("#cate").append(option);
  //   }
  // })
  
  
  // fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
  // .then(response => response.json())
  // .then(data => {
  
  //   const region = data.meals;
  //   for(let i=0;i<region.length;i++){
  //     let options =`
      
  //      <option value="${region[i].strArea}">${region[i].strArea}</option>
  //     `;
  //     $("#reg").append(options);
  //   }
  // })
  
  // const tableau = [];
  // document.getElementById('cate').onchange = function () {
  //     document.getElementById('card').innerHTML ="";
  //     document.getElementById('lien').innerHTML ="";
  //     let optionSelect = document.getElementById('select').value;
  //     let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${optionSelect}`;
  //     fetch(url)
  //         .then(response => response.json())
  //         .then(data => {
  //             const filterCategorie = data.meals;
  //             tableau.push(filterCategorie);
  
  //             const page1 = filterCategorie.slice(0, 12); 
  //             const page2 = filterCategorie.slice(12, 24); 
  //             const page3 = filterCategorie.slice(0, 10);
  //             const page4 = filterCategorie.slice(24, 36);
  //             const page5 = filterCategorie.slice(36, 48);
              
              
                  
  //                 if(page1.length>0){
  //                     let btn1 =`
  //                       <a class="page-link" href="#cardM" id="page1">1</a>
  //                     `;
  //                     $("#lien").append(btn1);
  //                 }
              
              
  //                 if(page2.length>0){
  //                     let btn2 =`
  //                       <a class="page-link" href="#cardM" id="page2">2</a>
  //                     `;
  //                     $("#lien").append(btn2);
  //                 }
              
              
  //                 if(page4.length>0){
  //                     let btn3 =`
  //                       <a class="page-link" href="#cardM" id="page3">3</a>
  //                     `;
  //                     $("#lien").append(btn3);
  //                 }
           
              
  //                 if(page5.length>0){
  //                     let btn4 =`
  //                       <a class="page-link" href="#cardM" id="page4">4</a>
  //                     `;
  //                     $("#lien").append(btn4);
  //                 }
  
                 
             
             
              
  //             for (let i = 0; i < filterCategorie.length; i++) {
  //                 for(leti=0;i<page1.length;i++){
  //                     let card = `
  //                        <div class="card container" style="width: 23rem;margin:2%;" id="cardss2${i}">
  //                            <img src="${page1[i].strMealThumb}" class="card-img-top" alt="Sunset Over the Sea"/>
  //                            <div class="card-body">
  //                              <p class="card-text text-dark"><span>Name of recept :</span>${page1[i].strMeal}</p>
  //                            </div>
  //                            <div>
  //                               <button type="button" class="btn btn-success" name="btn-Cards" onclick="modalCategorie(${page1[i].idMeal})">Voir</button>
  //                            </div>
  //                        </div>
  //                     `;
  //                    $("#card").append(card);
  //                 }
                  
  //                 document.getElementById('page1').onclick=function(){
  //                     document.getElementById('cardM').innerHTML="";
  //                     for(let c=0 ; c<page1.length;c++){
  //                         let cards10 = `
  //                             <div class="card container" style="width: 23rem;margin:2%;" id="cardss2${c}">
  //                                 <img src="${page1[c].strMealThumb}" class="card-img-top" alt="Sunset Over the Sea"/>
  //                                 <div class="card-body">
  //                                     <p class="card-text text-dark"><span>Name of recept :</span>${page1[c].strMeal}</p>
  //                                 </div>
  //                                 <div>
  //                                     <button type="button" class="btn btn-success" name="btn-Cards" onclick="modalCategorie(${page1[c].idMeal})">Voir</button>
  //                                 </div>
  //                             </div>
  //                         `;
  //                         $("#card").append(cards10);
  //                     }
  //                 }
  //                 if(filterCategorie.length>10){
                      
   
  //                     document.getElementById('page2').onclick=function(){
  //                         page2;
  //                         document.getElementById('card').innerHTML="";
                          
  //                         for(let c=0 ; c<page2.length;c++){
  
  //                             if(page2.lenght!==""){
  //                                 let cards10 = `
  //                                 <div class="card container" style="width: 23rem;margin:2%;" id="cardss2${c}">
  //                                     <img src="${page2[c].strMealThumb}" class="card-img-top" alt="Sunset Over the Sea"/>
  //                                     <div class="card-body">
  //                                        <p class="card-text text-dark"><span>Name of recept :</span>${page2[c].strMeal}</p>
  //                                     </div>
  //                                     <div>
  //                                        <button type="button" class="btn btn-success" name="btn-Cards" onclick="modalCategorie(${page2[c].idMeal})">Voir</button>
  //                                     </div>
  //                                 </div>
  //                                `;
  //                                $("#card").append(cards10);
  //                             }
  //                         }
  //                     }
  
  //                     document.getElementById('page3').onclick=function(){
  //                         page4;
  //                         document.getElementById('card').innerHTML="";
  //                         for(let m=0 ; m<page4.length;m++){
  
  //                             if(page2.lenght!==""){
  //                                 let cards12 = `
  //                                 <div class="card container" style="width: 23rem;margin:2%;" id="cardss2${m}">
  //                                     <img src="${page4[m].strMealThumb}" class="card-img-top" alt="Sunset Over the Sea"/>
  //                                     <div class="card-body">
  //                                        <p class="card-text text-dark"><span>Name of recept :</span>${page4[m].strMeal}</p>
  //                                     </div>
  //                                     <div>
  //                                        <button type="button" class="btn btn-success" name="btn-Cards" onclick="modalCategorie(${page4[m].idMeal})">Voir</button>
  //                                     </div>
  //                                 </div>
  //                                `;
  //                                $("#card").append(cards12);
  //                             }
  //                         }
  //                     }
  
  //                     document.getElementById('page4').onclick=function(){
  //                         page5;
  //                         document.getElementById('card').innerHTML="";
  //                         for(let n=0 ; n<page4.length;n++){
  
  //                             if(page5.lenght!==""){
  //                                 let cards13 = `
  //                                 <div class="card container" style="width: 23rem;margin:2%;" id="card2${n}">
  //                                     <img src="${page5[n].strMealThumb}" class="card-img-top" alt="Sunset Over the Sea"/>
  //                                     <div class="card-body">
  //                                        <p class="card-text text-dark"><span>Name of recept :</span>${page5[n].strMeal}</p>
  //                                     </div>
  //                                     <div>
  //                                        <button type="button" class="btn btn-success" name="btn-Cards" onclick="modalCategorie(${page5[n].idMeal})">Voir</button>
  //                                     </div>
  //                                 </div>
  //                                `;
  //                                $("#card").append(cards13);
  //                             }
  //                         }
  //                     }
  
  
  //                 }
  //                 if(filterCategorie.length<10){
  //                     document.getElementById('card').innerHTML="";
  //                     for(let j=0 ; j<page3.length;j++){
  //                         let cards11 = `
  //                             <div class="card container" style="width: 23rem;margin:2%;" id="cardss2${j}">
  //                                 <img src="${page3[j].strMealThumb}" class="card-img-top" alt="Sunset Over the Sea"/>
  //                                 <div class="card-body">
  //                                     <p class="card-text text-dark"><span>Name of recept :</span>${page3[j].strMeal}</p>
  //                                 </div>
  //                                 <div>
  //                                     <button type="button" class="btn btn-success" name="btn-Cards" onclick="modalCategorie(${page3[j].idMeal})">Voir</button>
  //                                 </div>
  //                             </div>
  //                         `;
  //                         $("#card").append(cards11);
  //                     }
  //                 }
  //             }
  //         });
  
  // }
  
  
  
  
  
  window.onload = first();
  fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    .then((response) => response.json())
    .then((data) => {
      for (i = 0; i < data.meals.length; i++) {
        option = `<option value="${data.meals[i].strArea}">${data.meals[i].strArea}</option>`;
        document.getElementById("area").innerHTML += option;
      }
    });
  fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
    .then((response) => response.json())
    .then((data) => {
      for (i = 0; i < data.meals.length; i++) {
        option = `<option value="${data.meals[i].strCategory}">${data.meals[i].strCategory}</option>`;
        document.getElementById("cat").innerHTML += option;
      }
    });
  // area //////////////////////////////////////////////////////////////////////////////////
  
  function afficher_Area(area_choizser) {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area_choizser}`)
      .then((response) => response.json())
      .then((data) => {
        if (document.getElementById("cat").value == "1") {
          var meals = data.meals;
          var aff = ``;
          for (var z = 1; z <= Math.ceil(meals.length / 12); z++) {
            aff += `<a class="page-link"  id="page${z}">${z}</a>`;
          }
          document.getElementById("pages").innerHTML = aff;
          const page1 = meals.slice(0, 12);
          affic(page1);
          const page2 = meals.slice(12, 24);
          const page3 = meals.slice(24, 36);
          const page4 = meals.slice(36, 48);
          const page5 = meals.slice(48, 60);
          document.getElementById("page1").onclick = function () {
            affic(page1);
          };
  
          document.getElementById("page2").onclick = function () {
            affic(page2);
          };
          document.getElementById("page3").onclick = function () {
            affic(page3);
          };
          document.getElementById("page4").onclick = function () {
            affic(page4);
          };
          document.getElementById("page5").onclick = function () {
            affic(page5);
          };
        } else if (
          document.getElementById("cat").value != "1" ||
          area_choizser == "1"
        ) {
          afficher_Category(document.getElementById("cat").value);
        } else {
          var affecar = [];
          for (var i = 0; i < data.meals.length; i++) {
            fetch(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.meals[i].idMeal}`
            )
              .then((response) => response.json())
              .then((data) => {
                if (
                  data.meals[0].strArea == document.getElementById("cat").value
                ) {
                  affecar.push(data.meals[0]);
                }
                var aff = ``;
                console.log(Math.ceil(affecar.length / 12));
  
                for (var z = 1; z <= Math.ceil(affecar.length / 12); z++) {
                  aff += `<a class="page-link"  id="page${z}">${z}</a>`;
                }
                document.getElementById("pages").innerHTML = aff;
  
                const page1 = affecar.slice(0, 12);
                affic(page1);
                const page2 = affecar.slice(12, 24);
                const page3 = affecar.slice(24, 36);
                const page4 = affecar.slice(36, 48);
                const page5 = affecar.slice(48, 60);
                document.getElementById("page1").onclick = function () {
                  affic(page1);
                };
  
                document.getElementById("page2").onclick = function () {
                  affic(page2);
                };
                document.getElementById("page3").onclick = function () {
                  affic(page3);
                };
                document.getElementById("page4").onclick = function () {
                  affic(page4);
                };
                document.getElementById("page5").onclick = function () {
                  affic(page5);
                };
              });
          }
        }
      });
  }
  
  // category   ///////////////////////////////
  
  function afficher_Category(Category_choizser) {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${Category_choizser}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (document.getElementById("area").value == "1") {
          var meals = data.meals;
          var aff = ``;
  
          for (var z = 1; z <= Math.ceil(meals.length / 12); z++) {
            aff += `<a class="page-link"  id="page${z}">${z}</a>`;
          }
          document.getElementById("pages").innerHTML = aff;
  
          const page1 = meals.slice(0, 12);
          affic(page1);
          const page2 = meals.slice(12, 24);
          const page3 = meals.slice(24, 36);
          const page4 = meals.slice(36, 48);
          const page5 = meals.slice(48, 60);
          document.getElementById("page1").onclick = function () {
            affic(page1);
          };
  
          document.getElementById("page2").onclick = function () {
            affic(page2);
          };
          document.getElementById("page3").onclick = function () {
            affic(page3);
          };
          document.getElementById("page4").onclick = function () {
            affic(page4);
          };
          document.getElementById("page5").onclick = function () {
            affic(page5);
          };
        } else {
          var affecar = [];
          for (var i = 0; i < data.meals.length; i++) {
            fetch(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.meals[i].idMeal}`
            )
              .then((response) => response.json())
              .then((data) => {
                if (
                  data.meals[0].strArea == document.getElementById("area").value
                ) {
                  affecar.push(data.meals[0]);
                }
                var aff = ``;
                console.log(Math.ceil(affecar.length / 12));
  
                for (var z = 1; z <= Math.ceil(affecar.length / 12); z++) {
                  aff += `<a class="page-link"  id="page${z}">${z}</a>`;
                }
                document.getElementById("pages").innerHTML = aff;
  
                const page1 = affecar.slice(0, 12);
                affic(page1);
                const page2 = affecar.slice(12, 24);
                const page3 = affecar.slice(24, 36);
                const page4 = affecar.slice(36, 48);
                const page5 = affecar.slice(48, 60);
                document.getElementById("page1").onclick = function () {
                  affic(page1);
                };
  
                document.getElementById("page2").onclick = function () {
                  affic(page2);
                };
                document.getElementById("page3").onclick = function () {
                  affic(page3);
                };
                document.getElementById("page4").onclick = function () {
                  affic(page4);
                };
                document.getElementById("page5").onclick = function () {
                  affic(page5);
                };
              });
          }
        }
      });
  }
  // aficher select //////////////////////////////////
  function affic(vluchercher) {
    document.getElementById("card").innerHTML = "";
    var contant;
    for (var i = 0; i < vluchercher.length; i++) {
      contant = `
      
  
  
      <div class="card"  style="width: 22rem;">
      <img class="card-img-top" src="${vluchercher[i].strMealThumb}" alt="Card image cap">
      <div class="card-body">
          <h5 class="card-title">${vluchercher[i].strMeal}</h5>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick='afficher(${vluchercher[i].idMeal})'>
           Voire</button>
  
          </div>
          </div>
      
      
      `;
      document.getElementById("card").innerHTML += contant;
    }
  }
  //  afficher cards ///////////////////////////////////////////////////////////
  // function afficher() {
  //   document.getElementById("section").innerHTML = "";
  //   var contant;
  //   for (var i = 0; i < 6; i++) {
  //     fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // console.log(data.meals[0].strMeal);
  
  //         contant = `<div class="col mb-5 mx-md-5">
  //   <div class="card">
  //     <img src="${data.meals[0].strMealThumb}" class="card-img-top" alt="...">
  //     <div class="card-body">
  //       <h5 class="card-title">${data.meals[0].strMeal}</h5>
  //     </div>
  //     <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="mymodal(${data.meals[0].idMeal})">
  //   MORE
  // </button>
  //   </div>
  // </div>`;
  //         document.getElementById("section").innerHTML += contant;
  //       });
  //   }
  // }
  
  // afficher modal ////////////////////////////////////
  // function mymodal(parametr) {
  //   fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${parametr}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       document.getElementById("img").innerHTML = `
  //       <img src="${data.meals[0].strMealThumb}" alt="photo" id="modalimg" />`;
  //       var Ingredien = "";
  //       for (var g = 1; g <= 20; g++) {
  //         let ingredient = data.meals[0]["strIngredient" + g];
  //         let measure = data.meals[0]["strMeasure" + g];
  //         if (ingredient && measure) {
  //           Ingredien += `  ${ingredient}  ${measure} <br>`;
  //         }
  //       }
  //       document.getElementById("modal").innerHTML = `
  //       <h1>${data.meals[0].strMeal}</h1>
  //     <p><strong>Category : </strong>${data.meals[0].strCategory}</p>
  //     <p><strong>Area : </strong> ${data.meals[0].strArea}</p>
  //     <p><strong>Ingredient : </strong> </p>
  //     <p> ${Ingredien} </p>
  //     <p><strong>Instructions : </strong></p><p>${data.meals[0].strInstructions}</p>
  //       `;
  //     });
  // }
  ///// releod //////////////////////////////////////////////////////
  
  function first() {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Moroccan`)
      .then((response) => response.json())
      .then((data) => {
        var meals = data.meals;
        var affec = [];
        for (var i = 0; i < meals.length; i++) {
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.meals[i].idMeal}`
          )
            .then((response) => response.json())
            .then((data) => {
              if (data.meals[0].strCategory == "Lamb") {
                affec.push(data.meals[0]);
              }
              affic(affec);
              var aff = ``;
              for (var z = 1; z <= Math.ceil(affec.length / 12); z++) {
                aff += `<a class="page-link"  id="page${z}">${z}</a>`;
              }
              document.getElementById("pages").innerHTML = aff;
              const page1 = affec.slice(0, 12);
              affic(page1);
              const page2 = affec.slice(12, 24);
              const page3 = affec.slice(24, 36);
              const page4 = affec.slice(36, 48);
              const page5 = affec.slice(48, 60);
              document.getElementById("page1").onclick = function () {
                affic(page1);
              };
  
              document.getElementById("page2").onclick = function () {
                affic(page2);
              };
              document.getElementById("page3").onclick = function () {
                affic(page3);
              };
              document.getElementById("page4").onclick = function () {
                affic(page4);
              };
              document.getElementById("page5").onclick = function () {
                affic(page5);
              };
            });
        }
      });
  }
  