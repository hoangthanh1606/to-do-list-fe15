export const addTask = (params) => {
  return {
    type: 'ADD_TASK',
    payload: params,
  }
}

export const editTask = (params) => {
  return {
    type: 'EDIT_TASK',
    payload: params,
  }
}

export const getDetail = (params) => {
  return {
    type: 'GET_DETAIL',
    payload: params,
  }
}
export const deleteTask = (params) => {
  return {
    type: 'DELETE_TASK',
    payload: params,
  }
}