document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript loaded');
  const formSubmit = document.querySelector('#new-item-form');
  formSubmit.addEventListener('submit', handleFormSubmit);
});

// //////HANDLER - form
  const handleFormSubmit = function (event) {
  // console.log(event);
  event.preventDefault();
  const memberProfileItem = createMemberProfileItem(event.target);
  const memberProfile = document.querySelector('#member-profiles');
  memberProfile.appendChild(memberProfileItem);

  event.target.reset();
};


// ///////// - create to elements of the form
  const createMemberProfileItem = function (form) {
    const memberProfileItem = document.createElement('li');
    memberProfileItem.classList.add('member-profile-item');

// define derby name
    const name = document.createElement('h2');
    name.textContent = "Derby Name: " + form.name.value;
    memberProfileItem.appendChild(name);

// define position
    const position = document.createElement('h3');
    position.textContent = "Position: " + form.position.value;
    memberProfileItem.appendChild(position);

// define team
    const team = document.createElement('h3');
    team.textContent = "Team: " + form.team.value;
    memberProfileItem.appendChild(team);

  return memberProfileItem;
};
