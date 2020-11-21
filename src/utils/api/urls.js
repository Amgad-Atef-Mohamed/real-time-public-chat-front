const BaseUrls = {
  apiUrl: `${process.env.REACT_APP_API_URL}`,
};

const Urls = {
  baseUrl: BaseUrls.apiUrl,
  user: {
    login: `${BaseUrls.apiUrl}/auth/login`,
    register: `${BaseUrls.apiUrl}/auth/register`,
    setPassword: `${BaseUrls.apiUrl}/auth/password`,
  },
  messages: {
    sendNewMessageUrl: `${BaseUrls.apiUrl}/messages`,
    getMessagesUrl: `${BaseUrls.apiUrl}/messages`,
  },
};

export default Urls;
