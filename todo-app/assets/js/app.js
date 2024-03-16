import { getUsers, store, setSelectedUser, setTasks } from './store.js';

// HTML ELEMENTS
const userSelect = document.querySelector('#users-select');

const userName = document.querySelector('#user-name');
const userFullName = document.querySelector('#user-fullname');
const userEmail = document.querySelector('#user-email');

const taskList = document.querySelector('#task-list');
const taskQuantity = document.querySelector('#task-quantity');

const buttonWatch = document.querySelector('#button-watch');

// #############################################
// FUNCTIONS
// #############################################

const initApp = async () => {
  await getUsers();
  renderUsers();
}

const changeUser = () => {
  const selectedUser = store.selectedUser;
  const tasks = store.tasks;

  renderUserInformation( selectedUser );
  renderTaskList( tasks );
}

const renderTaskList = ( tasks ) => {
  taskList.innerHTML = '';
  
  tasks.forEach( task => {
    const { id, title, completed } = task;
    const html = `
      <li class="tasks__item" data-id="${id}">
        <input class="tasks__input" type="checkbox" ${ completed && 'checked' }>
        <p class="tasks__name">${title}</p>
      </li>
    `;
    taskList.innerHTML += html;
  });

  taskQuantity.textContent = `${ tasks.length }`;
}

const renderUserInformation = ( selectedUser ) => {
  const { firstname, lastname, email } = selectedUser;
  userName.textContent = `${firstname} ${lastname}`; 
  userFullName.textContent = `${firstname} ${lastname}`;
  userEmail.textContent = `${email}`;
}

const renderUsers = () => {
  const users = store.users;
  users.forEach( user => {
    const { firstname, id: userID } = user;
    const option = document.createElement('option');
    option.value = userID;
    option.textContent = `- ${firstname} -`;
    userSelect.appendChild( option );
  });
}

// EVENT LISTENERS
window.addEventListener('DOMContentLoaded', initApp );

userSelect.addEventListener('change', async ( e ) => {

  if ( e.target.value === '-' ) {
    alert("Valor no valido");
    return;
  }

  const userID = Number(e.target.value);
  setSelectedUser( userID );
  await setTasks( userID );
  changeUser();
});

buttonWatch.addEventListener('click', () => {
  taskList.classList.toggle('hide-element');
});