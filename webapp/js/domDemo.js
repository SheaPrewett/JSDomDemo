// Look for and highlight a team that matches the search input
function searchForTeam() {
  // Get the search text input
  var teamSearch = document.getElementById("teamSearch").value;
  // Get the li items in the unordered list
  if (searchList(teamSearch)) {
      setPageMessage("Found the " + teamSearch + "!");
  } else {
      setPageMessage("Didn't find the " + teamSearch + "!");
  }
}

// Add the input as a new list item
function addTeam() {
  var newTeam = document.getElementById("teamAdd").value;
  if (searchList(newTeam)) {
      setPageMessage("The " + newTeam + " already exist in the list!");
  } else {
      var teamsList = document.getElementById("teamList");
      var newTeamListItem = document.createElement('li');
      newTeamListItem.innerHTML = newTeam;
      teamsList.appendChild(newTeamListItem);
      setPageMessage("Added the " + newTeam + " to the list!");
  }
}

// Iterate through the list, highlighting elements that match the input
function searchList(teamName) {
  var teamFound = false;
  var teamsList = document.getElementById("teamList");
  var teamsListItems = teamsList.getElementsByTagName("li");

  for (var index = 0; index < teamsListItems.length; index++) {
      //Reset background of each element to white while iterating
      teamsListItems[index].style.backgroundColor = "white";
      var team  = teamsListItems[index].innerHTML;
      if (team.toLowerCase() === teamName.toLowerCase()) {
          // Found a lowercase match
          teamFound = true;
          teamsListItems[index].style.backgroundColor = "lightblue";
      }
  }
    if (teamFound){
        return true;
    } else {
        return false;
    }
}

// Set a message at the bottom of the page
function setPageMessage(pageMessage) {
    var pageMessageElement = document.getElementById("pageMessage");
    pageMessageElement.innerHTML = pageMessage;
}