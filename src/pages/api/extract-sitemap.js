import axios from 'axios';

export default async function handler(req, res) {
    const { url } = JSON.parse(req.body);
    console.log(url);

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: url,
        headers: {}
    };

    axios.request(config)
        .then((response) => {
            res.status(200).send(response.data)
        })
        .catch((error) => {
            res.status(400).send(error)
        });
}
