let topsection  = document.querySelector(".top-section");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let ul = document.querySelector("#info");
let follow = document.querySelector("#follow");
let followerss = document.querySelector("#followers");
let followingg = document.querySelector("#following");
let bio = document.querySelector('.bio-section')
let metaSection = document.querySelector('.meta-section')
let stats = document.querySelector('.meta-section')
let div1 = document.querySelector('#div1')
let div2 = document.querySelector('#div2')
let div3 = document.querySelector('#div3')
let userInput = document.querySelector('#user')
let search = document.querySelector('#search-btn')
let searchScreen = document.querySelector('#search-screen')
let main = document.querySelector('#main')
let count = 0;
search.addEventListener("click", (event) => {
    event.preventDefault();
  if(count>0) return;
  let userInput = document.querySelector("#user");
  let username = userInput.value;
  if(username.trim()==='') {
    alert('please enter the username')
    return
  }
  searchScreen.style.display = "none";
  main.style.block = "block";
  fetch(`https://api.github.com/users/${username}`)
    .then((raw) => raw.json()) //basically humne {} nhi laggaya isliye humko
    //return raw.json likhna nhi pada bina return lagaaye kaam chal jata hai es6 me
    // agar {} lagate toh return bhi likhna padta ab dekho humko api se data mila json
    //me convert kiya ab uss data ko log karte hai
    .then((data) => {
      count++;
      console.log(data);

      let nameDiv = document.createElement("div");
      nameDiv.innerText = data.name;
      nameDiv.style.color = "white";
      nameDiv.style.fontSize = "2rem";

      right.appendChild(nameDiv);

      console.log(data.name);
      let username = document.createElement("a");
      username.innerText = data.login;
      username.href = data.login;
      username.target = "_blank";
      username.style.color = " #00ff96";
      right.appendChild(username);
      username.after(follow);

      let img = document.createElement("img");
      img.src = data.avatar_url;
      left.appendChild(img);

      let flwrs = document.createElement("div");
      flwrs.innerText = `${data.followers} followers`;
      followerss.appendChild(flwrs);
      let flwing = document.createElement("div");
      flwing.innerText = `${data.following} following`;
      followingg.appendChild(flwing);

      let bioDiv = document.createElement("div");
      bioDiv.innerText = data.bio;
      bio.appendChild(bioDiv);

      let location = document.createElement("div");
      location.innerText = `📍 ${data.location}`;
      metaSection.appendChild(location);

      let college = document.createElement("div");
      college.innerText = `🏫 ${data.company}`;
      metaSection.appendChild(college);

      let profileUrl = document.createElement("a");
      profileUrl.innerText = `🔗 ${data.html_url}`;
      profileUrl.href = data.html_url;
      profileUrl.target = "_blank";
      profileUrl.style.color = " #00ff96";
      metaSection.appendChild(profileUrl);

      let year = document.createElement("div");
      year.innerText = `📆 joined ${data.created_at.split("-")[0]}`;
      metaSection.appendChild(year);

      // Repos
      let repoLabel = document.createElement("div");
      repoLabel.innerText = "Repos";
      let repoVal = document.createElement("div");
      repoVal.innerText = data.public_repos;
      div1.appendChild(repoVal);
      div1.appendChild(repoLabel);

      // Followers
      let flwrsLabel = document.createElement("div");
      flwrsLabel.innerText = "Followers";
      let flwrsVal = document.createElement("div");
      flwrsVal.innerText = data.followers;
      div2.appendChild(flwrsVal);
      div2.appendChild(flwrsLabel);

      // Following
      let flwingLabel = document.createElement("div");
      flwingLabel.innerText = "Following";
      let flwingVal = document.createElement("div");
      flwingVal.innerText = data.following;
      div3.appendChild(flwingVal);
      div3.appendChild(flwingLabel);


      let topicsSection = document.querySelector(".topics-section");
      let githubLink = document.createElement("a");
      githubLink.innerText = "View on GitHub →";
      githubLink.href = data.html_url;
      githubLink.target = "_blank";
      topicsSection.appendChild(githubLink);
    });
})

