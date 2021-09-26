import axios from '../request-interface.js';

const get = () => {
  return axios.get(`/workspaces`).then((response) => {
    return response.data;
  });
};

const add = (name) => {
  if (name && name !== "")
    return axios.post(`/workspaces/`, {
        params: {
          'name': name
        }
      })
      .then((response) => {
        return response.data;
      });
  else Promise.reject("Workspace name required");
};

const getAllUsers = (workspaceId) => {
  if (workspaceId && workspaceId !== "")
    return axios.get(`/workspaces/${workspaceId}/users`).then((response) => {
      return response.data;
    });
  else Promise.reject("workspaceId required");
};

const getAllClients = (workspaceId) => {
  if (workspaceId && workspaceId !== "")
    return axios.get(`/workspaces/${workspaceId}/clients`).then((response) => {
      return response.data;
    });
  else Promise.reject("workspaceId required");
};

const addClient = (workspaceId, name) => {
  if (workspaceId && workspaceId !== "" && name && name !== "")
    return axios.post(`/workspaces/${workspaceId}/clients`, {
        params: {
          'name': name
        }
      })
      .then((response) => {
        return response.data;
      });
  else Promise.reject("workspaceId & client name required");
};

const getProjects = (workspaceId) => {
  if (workspaceId && workspaceId !== "")
    return axios.get(`/workspaces/${workspaceId}/projects`).then((response) => {
      return response.data;
    });
  else Promise.reject("workspaceId required");
};

const addProject = (workspaceId, options) => {
  if (workspaceId && workspaceId !== "")
    return axios.post(`/workspaces/${workspaceId}/projects`, {
      params: options
    })
    .then((response) => {
      return response.data;
    });
  else Promise.reject("workspaceId required");
};

const deleteProject = (workspaceId, projectId) => {
  if (workspaceId && workspaceId !== "" && projectId && projectId !== "")
    return axios.delete(`/workspaces/${workspaceId}/projects/${projectId}`).then((response) => {
        return response.data;
      });
  else Promise.reject("workspaceId & projectId required");
};

const addTag = (workspaceId, name) => {
  if (workspaceId && workspaceId !== "" && name && name !== "")
    return axios.post(`/workspaces/${workspaceId}/tags`, {
      params: {
        'name': name
      }
    })
    .then((response) => {
      return response.data;
    });
  else Promise.reject("workspaceId & tag name required");
};

const getTasksOfProject = (workspaceId, projectId) => {
  if (workspaceId && workspaceId !== "" && projectId && projectId !== "")
    return axios.get(`/workspaces/${workspaceId}/projects/${projectId}/tasks`).then((response) => {
      return response.data;
    });
  else Promise.reject("workspaceId & projectId required");
};

const findTasksOnProject = (workspaceId, projectId) => {
  return getTasksOfProject(workspaceId, projectId);
}

const addTaskToProject = (workspaceId, projectId, options) => {
  if (workspaceId && workspaceId !== "" && projectId && projectId !== "")
    return axios.post(`/workspaces/${workspaceId}/projects/${projectId}/tasks`, {
      params: options
    })
    .then((response) => {
      return response.data;
    });
  else Promise.reject("WorkspaceId & projectId required");
};

const addTasksOnProject = (workspaceId, projectId, options) => {
  return addTaskToProject(workspaceId, projectId, options);
}

const addTimeEntry = (workspaceId, options) => {
  if (workspaceId && workspaceId !== "" && options)
    return axios.post(`/workspaces/${workspaceId}/time-entries`, {
      params: options
    })
    .then((response) => {
      return response.data;
    });
  else Promise.reject("WorkspaceId & options required");
};

const getTimeEntry = (workspaceId, timeEntryId) => {
  if (workspaceId && workspaceId !== "" && timeEntryId)
    return axios.get(`/workspaces/${workspaceId}/time-entries/${timeEntryId}`).then((response) => {
      return response.data;
    });
  else Promise.reject("WorkspaceId & timeEntryId required");
};

const updateTimeEntry = (workspaceId, timeEntryId, options) => {
  if (workspaceId && workspaceId !== "" && timeEntryId)
    return axios.put(`/workspaces/${workspaceId}/time-entries/${timeEntryId}`, {
      params: options
    })
    .then((response) => {
      return response.data;
    });
  else Promise.reject("WorkspaceId & timeEntryId required");
};

const getTimeEntryForUser = (workspaceId, userId) => {
  if (workspaceId && workspaceId !== "" && userId && userId !== "")
    return axios.get(`/workspaces/${workspaceId}/user/${userId}/time-entries`).then((response) => {
      return response.data;
    });
  else Promise.reject("WorkspaceId & userId required");
};

const deleteTimeEntry = (workspaceId, timeEntryId) => {
  if (workspaceId && workspaceId !== "" && timeEntryId)
    return axios.delete(`/workspaces/${workspaceId}/time-entries/${timeEntryId}`).then((response) => {
      return response.data;
    });
  else Promise.reject("WorkspaceId & timeEntryId required");
};

const addTimeEntryForUser = (workspaceId, userId, options) => {
  if (workspaceId && workspaceId !== "" && userId && userId !== "" && options)
    return axios.post(`/workspaces/${workspaceId}/user/${userId}/time-entries`, {
      params: options
    })
    .then((response) => {
      return response.data;
    });
  else Promise.reject("WorkspaceId & options required");
};

const stopTimeEntryForUser = (workspaceId, userId, options) => {
  if (workspaceId && workspaceId !== "" && userId && userId !== "" && options)
    return axios.patch(`/workspaces/${workspaceId}/user/${userId}/time-entries`, {
      params: options
    })
    .then((response) => {
      return response.data;
    });
  else Promise.reject("WorkspaceId & options required");
};

export default {
  get,
  add,
  getAllUsers,
  getAllClients,
  addClient,
  getProjects,
  addProject,
  deleteProject,
  addTag,
  findTasksOnProject,
  addTaskToProject,
  addTasksOnProject,
  addTimeEntry,
  getTimeEntry,
  updateTimeEntry,
  deleteTimeEntry,
  addTimeEntryForUser,
  stopTimeEntryForUser,
  getTimeEntryForUser,
};
