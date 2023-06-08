alert('WOW i marche');

let x = document.createElement('button')
let chapeau = document.createElement('p');
chapeau.className = "chapeau";
chapeau.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit Velit fugit fuga minus ipsum. Unde fuga, voluptates mollitia ab eveniet velit enim ratione, fugiat sapiente libero, ex nobis excepturi non obcaecati?";

let y = document.getElementById('articlesContainer');

y.appendChild(chapeau);
chapeau.appendChild(x)