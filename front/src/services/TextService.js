import axios from 'axios';

const baseApiUrl = new URL('API/', window.location.href);

export default class TextService {
  static async check(text, isSave = false) {
    const response = await axios.post(new URL('Texts/Check', baseApiUrl), {
      text,
      isSave,
    });

    return response.data;
  }

  static async getPrevious() {
    const response = await axios.get(new URL('Texts', baseApiUrl));

    return response.data;
  }
}
