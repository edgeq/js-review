const data = [
  {
    name: 'Edge',
    age: 32,
    gender: 'Male',
    lookingFor: 'Code',
    location: 'Chicago',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Dani',
    age: 27,
    gender: 'Female',
    lookingFor: 'Meaning',
    location: 'Grand Blanc',
    image: 'https://randomuser.me/api/portraits/women/12.jpg'
  },  {
    name: 'Pat',
    age: 38,
    gender: 'It\'s Pat',
    lookingFor: 'Code',
    location: 'North',
    image: 'https://randomuser.me/api/portraits/men/42.jpg'
  }
];

const profiles = profileIterator(data);
// Call first profile
nextProfile();
// Next event
document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile(){
  const currentProfile = profiles.next().value;
if(currentProfile !== undefined) {

 document.getElementById('profileDisplay').innerHTML = `<ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
      <li class="list-group-item">Looking For: ${currentProfile.gender}</li>
    </ul>
  `;

  document.getElementById('imageDisplay').innerHTML = `<img src=${currentProfile.image}>`
} else {
  window.location.reload();
}
}

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function(){
      return nextIndex < profiles.length ?
      {value: profiles[nextIndex++], done: false} :
      {done: true}
    }
  };
}