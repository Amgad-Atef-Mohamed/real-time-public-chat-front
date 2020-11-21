import { notification } from 'antd';
import 'antd/dist/antd.css';

const convertArabicNumbersToEnglish = string =>
  // eslint-disable-next-line no-bitwise
  string.replace(/[\u0660-\u0669\u06f0-\u06f9]/g, c => c.charCodeAt(0) & 0xf);

const lowerizeFirstLetter = string => string.charAt(0).toLowerCase() + string.slice(1);

const fireNotification = (data, type = 'info') => {
  notification[type]({
    message: `${data.body}`,
    description: data.url,
    placement: 'topRight',
    duration: 10,
    // style: { direction: 'rtl' },
  });
};

export { convertArabicNumbersToEnglish, lowerizeFirstLetter, fireNotification };
