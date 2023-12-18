import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '96fcc977fc4f4d9dbe43d363ac80072f'
    }
})
