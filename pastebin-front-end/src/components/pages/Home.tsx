import { useState } from 'react';
import { Header } from '../custom_components/Header';
import { InputWithDropdown } from '../custom_components/Dropdown';
import axios from 'axios';

interface Option {
  name: string;
  value: number;
}

// Константы для выпадающих списков
const LIFE_TIMES: Option[] = [
  { name: '1 minute', value: 60 * 1000 }, // В миллисекундах
  { name: '10 minutes', value: 600 * 1000 },
  { name: '1 hour', value: 3600 * 1000 },
  { name: '1 day', value: 86400 * 1000 },
  { name: '1 week', value: 86400 * 7 * 1000 },
  { name: '1 month', value: 86400 * 30 * 1000 },
];

const ACCESS: Option[] = [
  { name: 'Public', value: 0 },
  { name: 'Private', value: 1 },
];

const BTN_TEXT = 'Share a masterpiece';
const ARROW = '>';

export function Home() {
  const [pasteContent, setPasteContent] = useState<string>(''); // Состояние для текста
  const [title, setTitle] = useState<string>(''); // Состояние для заголовка
  const [lifetime, setLifetime] = useState<Option | null>(null); // Состояние для времени жизни
  const [type, setType] = useState<Option | null>(null); // Состояние для типа доступа

  // Обработчик отправки данных
  const handleSend = async () => {
    if (!title || !pasteContent || !lifetime || !type) {
      alert('Please fill all fields before submitting.');
      return;
    }

    // Вычисляем временную метку и преобразуем её в строку
    const expirationTimestamp = new Date(Date.now() + lifetime.value).toISOString();

    const data = {
      title,
      content: pasteContent,
      expiration: expirationTimestamp, // Используем строку в формате ISO 8601
      access: type.name === 'Private',
      user_id:0,
    };

    console.log(data);

    try {
      const response = await axios.post('http://127.0.0.1:8081/get-link', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Response from server:', response.data);

    } catch (error: any) {
      console.error('Error', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="body w-full">
      <Header className="mx-50 max-lg:mx-30 max-md:mx-15 max-xl:40 max-sm:w-8/12" />
      <div className="mx-50 max-lg:mx-30 max-md:mx-15 max-xl:40 max-sm:w-8/12">
        {/* Секция для нового паста */}
        <div className="NewPaste pt-10">
          <p className="font-bold text-2xl mb-3 font-[IBM_Plex_Mono]">New Paste</p>
          <textarea
            className="font-[IBM_Plex_Mono] font-medium py-7 px-6 w-full max-sm:min-h-70 max-sm:text-[13px] md:min-h-90 bg-[#1F1F1F] outline-none border-[#2E2E2E] border rounded-sm overflow-hidden resize-none field-sizing-content"
            placeholder="Share a secret with the world ..."
            value={pasteContent}
            onChange={(e) => setPasteContent(e.target.value)}
          />
        </div>

        {/* Секция настроек */}
        <div className="PasteSettings w-full max-md:inline-flex max-md:flex-col max-sm:w-9/12">
          <p className="font-[IBM_Plex_Mono] font-semibold text-2xl pt-10.5">Settings:</p>

          {/* Поле для заголовка */}
          <div className="flex justify-between md:items-center w-100 h-12 mt-2 max-md:mt-6 max-md:flex-col max-md:h-20 max-sm:w-max">
            <p className="font-[IBM_Plex_Mono] font-medium text-xl w-fit max-md:w-50 max-sm:text-[18px]">Title:</p>
            <input
              className="font-[IBM_Plex_Mono] font-medium bg-[#D9D9D9] w-64 h-10 outline-none text-gray-900 px-3 border rounded-sm max-sm:w-56"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Выпадающий список для времени жизни */}
          <div className="flex justify-between md:items-center w-136 h-12 mt-2 max-md:mt-6 max-md:flex-col max-md:h-20 max-md:w-fit max-sm:w-max">
            <p className="font-[IBM_Plex_Mono] font-medium text-xl w-fit max-sm:text-[18px]">Life time:</p>
            <InputWithDropdown
              options={LIFE_TIMES}
              placeHolder="00:00:00"
              onSelect={setLifetime}
            />
          </div>

          {/* Выпадающий список для типа доступа */}
          <div className="flex justify-between md:items-center w-136 h-12 mt-2 max-md:mt-6 max-md:flex-col max-md:h-20 max-md:w-fit max-sm:w-max">
            <p className="font-[IBM_Plex_Mono] font-medium text-xl w-fit max-sm:text-[18px]">Type:</p>
            <InputWithDropdown
              options={ACCESS}
              placeHolder="Public / Private"
              onSelect={setType}
              isReadOnly={true}
            />
          </div>
        </div>

        {/* Кнопка отправки */}
        <button
          onClick={handleSend}
          className="group btn font-[IBM_Plex_Mono] font-semibold Send w-64 h-12.5 bg-[#EDA200] mt-10 mb-10 rounded-sm text-black text-[19px] max-sm:text-[17px] transform-view duration-300 ease-in-out hover:scale-102 max-sm:w-56"
          type="submit"
        >
          <span className="pl-2 group-hover:pl-0 duration-200 erase-in-out ">{BTN_TEXT}</span>
          <span className="invisible group-hover:visible group-hover:ml-2 duration-200 erase-in-out">
            {ARROW}
          </span>
        </button>
      </div>

      {/* Футер */}
      <footer className="copyright fixed inset-x-0 bottom-0 pb-1">
        <p className="font-[IBM_Plex_Mono] font-light text-[12px] text-[#4e4e4e5e] text-center pb-0 select-none">
          © 2025 PasteIt, Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}