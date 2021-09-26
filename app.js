import axios from './request-interface.js';
import Workspaces from './lib/Workspace.js';
import User from './lib/User.js';

const SetKey = (KEY) => {
    axios.defaults.headers.common['X-Api-Key'] = KEY;
}

export default {
    SetKey,
    Workspaces,
    User
};
