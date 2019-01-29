const github = new GitHub;
const ui = new UI;
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
  // Get input text
  // Two ways of getting the same value: searchUser === e.target.value
  // console.log(searchUser.value);
  // console.log(e.target.value)
  const userText = searchUser.value;

  if (userText !== '') {
    // console.log(userText);
    //make HTTP call
    github.getUser(userText)
      .then(data => {
        // console.log(data);
        if (data.profile.message === 'Not Found') {
          //show alert
          ui.showAlert('User Not Found', 'alert alert-danger');
        } else {
          //show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repo)

        }
      });
  } else {
    //Clear Profile
    ui.clearProfile();
  }

});