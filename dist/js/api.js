var articlesHTML = '';

async function getTeams() {
  try {

    const teams = await fetch('https://cors-anywhere.herokuapp.com/https://api.football-data.org/v2/teams/', {

      method: 'GET',
      headers: {
        'X-AUTH-TOKEN': '0662135a32704efa95e70db9d3616ebc'
      }
    });

    const data = await teams.json();
    console.log(data);
    data.teams.forEach(function (e) {
      if (e.crestUrl != null) {
        // console.log(e);
        articlesHTML += `
  <div class="col s12 m4">
    <div class="card small">
      <div class="card-image">
        <img src="${e.crestUrl}" />
      </div>
      <div class="card-content">
        <span class="card-title">${e.name}</span>
        <p>${e.address}</p>
      </div>
    </div>
  </div>
  `;
      }

    });
    
    
  } catch (error) {
    alert(error);
  }
  
  document.getElementById("articles").innerHTML = articlesHTML;
}



// });

/*
var match = '';
async function getTeams() {
  const teams = await fetch('https://cors-anywhere.herokuapp.com/https://api.football-data.org/v2/teams/', {
    type: 'GET',
    method: 'X-AUTH-TOKEN: 0662135a32704efa95e70db9d3616ebc'
  });
}
  console.log(sch);
  sch.matches.forEach(function(data) {

    match += `
    <tr>
    <td>${data.homeTeam.name}</td>
    <td>${data.awayTeam.name}</td>
    <td>${data.competition.name}</td>
    <td>${data.utcDate}</td>
    </tr>
    `
  });
  document.getElementById('content-table').innerHTML = match;
});
*/