import axios from 'axios'

export default class PaleteService {
	static async getAll() {
		const res = await axios.get('http://localhost:3000/colors')
		return res.data
	}

}
