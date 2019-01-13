document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript loaded');
  const formSubmit = document.querySelector('#new-item-form');
  formSubmit.addEventListener('submit', handleFormSubmit);

  const deleteAllClick = document.querySelector('#delete-all');
  deleteAllClick.addEventListener('click', handleDeleteAllClick);

  const resetForm = document.querySelector('#reset-form');
  resetForm.addEventListener('click', handleResetFormOnClick);
  // not working

});

// //////HANDLER - form
  const handleFormSubmit = function (event) {
  console.log(event);
  event.preventDefault();
  const memberProfileItem = createMemberProfileItem(event.target);
  const memberProfile = document.querySelector('#member-profiles');
  memberProfile.appendChild(memberProfileItem);

  event.target.reset();
};


// ///////// - create the elements of the form
  const createMemberProfileItem = function (form) {
    console.log(form)
    const memberProfileItem = document.createElement('ul');
    memberProfileItem.classList.add('member-profile-item'); // only for class

    // TODO - nest a memberProfileItemDetail inside memberProfileItem

/// addition to plan - create memberProfileItemDetail element
// const createMemberProfileItemDetail = function ...
//   const memberProfileItemDetail = document.createElement('li');
//   memberProfileItemDetail.classList.add('member-profile-item-detail');

        // define derby name
            const name = document.createElement('h3');
            name.textContent = `Derby Name: ${form.name.value}`;
            memberProfileItem.appendChild(name); // change to memberProfileItemDetail

        // define position
            const position = document.createElement('h4');
            position.textContent = `Position: ${form.position.value}`;
            memberProfileItem.appendChild(position);

        // define team
            const team = document.createElement('h4');
            team.textContent = `Team: ${form.team.value}`;
            memberProfileItem.appendChild(team);

        // addition to plan
        // define pronoun
            const pronoun = document.createElement('p');
            pronoun.textContent = `Preferred pronoun: ${form.pronoun.value}`
            memberProfileItem.appendChild(pronoun);

        // // define start date
        //     const pronoun = document.createElement('p');
        //     startDate.textContent = "Start Date: " + form.startDate.value;
        //     memberProfileItem.appendChild(startDate);

  return memberProfileItem;
};

  const handleDeleteAllClick = function (event) {
    console.log(event);
    const memberProfile = document.querySelector('#member-profiles');
    memberProfile.innerHTML = '';
  }

  const handleResetFormOnClick = function (event) {
    console.log(event);
    const memberProfile = document.querySelector('#member-profiles');
    event.reset();
    // not working
  }
