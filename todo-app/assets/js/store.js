// STORE
export const store = {
  users: [],
  selectedUser: null,
  tasks: [],
};

/**
 * 
 */
export const getUsers = async () => {
    const users = await getData("../../data/usuarios.json");
    store.users = users;
};


/**
 * 
 * @param {Number} id 
 */
export const setSelectedUser = async ( id ) => {
  store.selectedUser = store.users[ id - 1 ];
}


/**
 * 
 * @param {Number} id 
 */
export const setTasks = async ( id ) => {
  const allTasks = await getData('../../data/tareas.json');
  const userTasks = allTasks.filter( task => task.userId === id );
  store.tasks = userTasks;
}

/**
 *
 * @param { String } url
 * @returns Promise<[Any]>
 */

export const getData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

