import { useState, useRef, useEffect } from 'react';

interface Option {
  name: string;
  value: number;
}

interface DropdownProps {
  hasCustomInput?: boolean; // Параметр для отображения поля ввода
  options: Option[]; // Массив объектов с названием и значением
  selectedValue?: Option | null; // Выбранное значение
  onSelect: (value: Option | null) => void; // Обработчик выбора
}

function timeStringToNumber(timeString: string): number {
  const parts = timeString.split(':');

  const hours = parseInt(parts[0], 10);
  const minutes = parseInt(parts[1], 10);
  const seconds = parseInt(parts[2], 10);

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  return totalSeconds;
}

export function Dropdown({ hasCustomInput = false, options, selectedValue, onSelect }: DropdownProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [customInputValue, setCustomInputValue] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Обработчик клика за пределами выпадающего списка
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (option: Option) => {
    if (option.name === 'Other' && hasCustomInput) {
      return;
    }
    onSelect(option);
    setIsExpanded(false);
  };

  // Обработчик изменения значения в поле ввода
  const handleCustomInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomInputValue(value); 
  };

  const validateTime = (time: string): boolean => {
    const parts = time.split(':');
    if (parts.length !== 3) return false; //3 части времени

    const [hours, minutes, seconds] = parts.map(Number);
    return (
      hours >= 0 && hours <= 24 &&
      minutes >= 0 && minutes <= 60 &&
      seconds >= 0 && seconds <= 60
    );
  };

  // Обработчик нажатия клавиши Enter в поле ввода
  const handleCustomInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (/^\d{1,2}:\d{1,2}:\d{1,2}$/.test(customInputValue)) {
        if (validateTime(customInputValue)) {
          onSelect({name: customInputValue, value: timeStringToNumber(customInputValue)});
          setIsExpanded(false);
        } else {
          alert('Некорректное время. Часы должны быть <= 24, минуты и секунды <= 60.');
        }
      } else {
        alert('Пожалуйста, введите значение в формате hour:min:sec (например, 12:05:40)');
      }
    }
  };

  return (
    <div className="relative w-64" ref={dropdownRef}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-[#D9D9D9] w-full h-10 text-gray-900 pl-3 pr-3 border rounded-sm flex justify-between items-center">
        <span>{selectedValue?.name || 'Select an option'}</span>
        <span>{isExpanded ? '▲' : '▼'}</span>
      </button>
      {isExpanded && (
        <div className="absolute mt-1 w-full bg-[#D9D9D9] border border-gray-300 rounded-sm shadow-lg z-10 text-black">
          {options.map((option, index) => {
            if (hasCustomInput && option.name === 'Other') {
              // Если это пункт "Other" и есть параметр hasCustomInput, отображаем поле ввода
              return (
                <div key={index} className="px-2 py-2">
                  <input
                    type="text"
                    placeholder="hour:min:sec (например, 1:05:40)"
                    value={customInputValue}
                    onChange={handleCustomInputChange}
                    onKeyDown={handleCustomInputKeyDown}
                    className="w-full h-8 pl-2 pr-2 bg-white border border-gray-300 rounded-sm outline-none"
                  />
                </div>
              );
            }
            return (
              <div
                key={index}
                onClick={() => handleSelect(option)}
                className="px-4 py-2 hover:bg-[#A5A5A5] cursor-pointer">
                {option.name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}