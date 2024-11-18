const input = document.getElementById('input');
const btn = document.getElementById('btn');
const displayContent = document.getElementById('displayContent')

async function fetchData(userName = "FaizFerozMehmood") {
  try {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const jsonData = await response.json();
    displayDaTA(jsonData)
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

btn.addEventListener('click', () => {
  const userName = input.value
  displayContent.innerHTML = '<p>Loading...</p>';

  if (!userName) {
    console.log("No data found");
  displayContent.innerHTML=`<p>please enter username</p>`
  }
  fetchData(userName)
})


function displayDaTA(data){
  console.log("data",data);
  data === undefined ? 
  displayContent.innerHTML = ''
  :displayContent.innerHTML=`
<img id ="avatar" src=${data?.avatar_url} alt="">
<p>Follower ${data?.followers}</p>
    <strong>${data?.name}</strong>

<p></p>
    <p><a href=${data.html_url} target="_blank">View github profile</a></p>

`

}
// displayDaTA()


async function defaultUser(){
  try {
  const res = await fetch(`https://api.github.com/users/FaizFerozMehmood`);
  if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const jsonData = await res.json();
    displayDaTA(jsonData)
  } catch (error) {
    console.error("Error fetching data:", error.message);
    displayContent.innerHTML = `<p>Error fetching data</p>`
  }

}

defaultUser()
  
