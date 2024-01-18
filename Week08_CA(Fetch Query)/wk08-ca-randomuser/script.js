// https://randomuser.me/api/
//@TODO use only the fetch web api 

let url = 'https://randomuser.me/api/';


//modify this fetch method to the required settings.
/*
fetch()
  .then()
  .then();
*/

document.getElementById('btn').addEventListener("click", myFunction);

function myFunction() {
  location.reload();
}

//insert and modify to your needs
fetch(url)
  .then(response => response.json()) 
  .then(function(data){
    let person = data.results[0]
    console.log(person)

    let name = person.name.title + ' ' +
               person.name.first + ' ' +
               person.name.last
    console.log(name);
    $('#fullname').text(name);
    $('#username').text(person.login.username);
    $('#email').text(person.email);
    $('#location').text(person.location.city);
    $('#avatar').attr("src", person.picture.medium);
  });

