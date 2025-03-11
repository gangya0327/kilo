import { customRef } from 'vue';

export default function (message: string, delay: number) {
  console.log('message :>> ', message);
  let timer: number;
  let customMessage = customRef((track, trigger) => {
    console.log('in');

    return {
      get() {
        track();
        console.log('get');
        return message;
      },
      set(value) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          message = value;
          console.log('set ', value);
          trigger();
        }, delay);
      },
    };
  });
  return { customMessage };
}
