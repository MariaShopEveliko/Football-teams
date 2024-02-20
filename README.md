# Football teams

## Functionality that allows to search through a list of football teams & follow / unfollow different teams

**Requirements:** <br />
Endpoint: https://run.mocky.io/v3/ef80523b-0474-4104-8fe6-fe92f8360b28 <br/>
The input will search through a list of football teams. Each team object contains the
following fields:
1) id - a unique ID
2) name - the team’s name
3)  stadium - the team’s stadium
4) leagues - a list of leagues in which the team participates
5) is_following - a flag indicating whether the team is being followed

The user should be able to search by name, stadium, and leagues.<br/>
On typing in the input field, a list with matching search results should appear.<br/>
The user should be able to navigate through the results with a keyboard. The search result in focus and on hover should be highlighted. Only one item can be highlighted in cases both mouse and keyboard are used. (The keyboard will take precedence if the mouse is not moving. The mouse should take precedence if keyboard navigation is not being used.) For example, the Gmail search has similar behavior. <br/>
If there are no matching results a message should appear.<br/>
When the user clicks the follow/unfollow button add/remove the team to the “My teams”
section and save the changes to the Vuex store.