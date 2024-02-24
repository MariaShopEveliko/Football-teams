# Football teams

## Functionality that allows to search through a list of football teams & follow/unfollow different teams

**Requirements:** <br />
<p>Endpoint: https://run.mocky.io/v3/ef80523b-0474-4104-8fe6-fe92f8360b28 </p>
<p>The input will search through a list of football teams. Each team object contains the following fields:</p>
<ul><li>id - a unique ID</li>
<li>name - the team’s name</li>
<li>stadium - the team’s stadium</li>
<li>leagues - a list of leagues in which the team participates</li>
<li>is_following - a flag indicating whether the team is being followed</li></ul>

<p>The user should be able to search by name, stadium, and leagues.</p>
<p>On typing in the input field, a list with matching search results should appear.</p>
<p>The user should be able to navigate through the results with a keyboard. The search result in focus and on hover should be highlighted. Only one item can be highlighted in cases both mouse and keyboard are used. (The keyboard will take precedence if the mouse is not moving. The mouse should take precedence if keyboard navigation is not being used.) For example, the Gmail search has similar behavior. </p>
<p>If there are no matching results a message should appear.</p>
<p>When the user clicks the follow/unfollow button add/remove the team to the “My teams” section and save the changes to the Vuex store.