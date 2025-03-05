import React, { useState, useRef, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

interface Option {
  name: string;
  value: number;
}

interface InputWithDropdownProps {
  options: Option[]; // Массив объектов с названием и значением
  placeHolder: string; // Плейсхолдер для input
  onSelect: (value: Option | null) => void; // Обработчик выбора
  isReadOnly?: boolean; // Дополнительный параметр для блокировки ввода
}

function timeStringToNumber(timeString: string): number {
  const parts = timeString.split(':');

  const hours = parseInt(parts[0], 10);
  const minutes = parseInt(parts[1], 10);
  const seconds = parseInt(parts[2], 10);

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  return totalSeconds;
}

export function InputWithDropdown({ options, placeHolder, onSelect, isReadOnly = false }: InputWithDropdownProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(true); // Состояние валидности
  const [isFocused, setIsFocused] = useState<boolean>(false); // Состояние фокуса
  const [hasInteracted, setHasInteracted] = useState<boolean>(false); // Состояние взаимодействия
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Обработчик изменения значения в input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isReadOnly) {
      const value = e.target.value;
      setInputValue(value);
      setIsValid(false); // Сбрасываем валидность при изменении значения
      setHasInteracted(true); // Пользователь взаимодействовал с полем
    }
  };

  // Валидация времени
  const validateTime = (time: string): boolean => {
    const parts = time.split(':');
    if (parts.length !== 3) return false; // 3 части времени

    const [hours, minutes, seconds] = parts.map(Number);
    return (
      hours >= 0 && hours <= 24 &&
      minutes >= 0 && minutes <= 60 &&
      seconds >= 0 && seconds <= 60
    );
  };

  // Обработчик нажатия клавиши Enter в поле ввода
  const handleCustomInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isReadOnly && e.key === 'Enter') {
      if (/^\d{1,2}:\d{1,2}:\d{1,2}$/.test(inputValue)) {
        if (validateTime(inputValue)) {
          onSelect({ name: inputValue, value: timeStringToNumber(inputValue) });
          setIsDropdownOpen(false);
          setIsValid(true); // Устанавливаем валидность при успешном вводе
        } else {
          alert('Некорректное время. Часы должны быть <= 24, минуты и секунды <= 60.');
          setIsValid(false); // Устанавливаем невалидность при ошибке
        }
      } else {
        alert('Пожалуйста, введите значение в формате hour:min:sec (например, 12:05:40)');
        setIsValid(false); // Устанавливаем невалидность при ошибке
      }
    }
  };

  // Обработчик выбора значения из выпадающего списка
  const handleSelectOption = (option: Option) => {
    setInputValue(option.name);
    onSelect(option);
    setIsDropdownOpen(false);
    setIsValid(true); // Устанавливаем валидность при выборе из списка
    inputRef.current?.focus();
  };

  // Закрытие выпадающего списка при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Обработчик фокуса на input
  const handleInputFocus = () => {
    setIsDropdownOpen(true); // Открываем выпадающий список при фокусе
    if (!isReadOnly) {
      setIsFocused(true); // Устанавливаем фокус
      
    }
  };

  // Обработчик потери фокуса на input
  const handleInputBlur = () => {
    if (!isReadOnly) {
      setIsFocused(false); // Снимаем фокус
    }
  };

  return (
    <div className="relative w-100" ref={dropdownRef}>
      <div className="flex justify-between">
        <div className="bg-[#D9D9D9] w-64 h-10 text-gray-900 pl-3 pr-3 border rounded-sm flex justify-between items-center">
          <input
            type="text"
            maxLength={8}
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus} // Обработчик фокуса
            onBlur={handleInputBlur} // Обработчик потери фокуса
            onKeyDown={handleCustomInputKeyDown}
            placeholder={placeHolder}
            className="font-[IBM_Plex_Mono] font-medium flex-1 outline-none bg-transparent"
            ref={inputRef}
            readOnly={isReadOnly}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsDropdownOpen(!isDropdownOpen);
            }}
            className="w-8 h-full flex items-center justify-center hover:bg-gray-300">
            {isDropdownOpen ? '▲' : '▼'}
          </button>
        </div>
        {isDropdownOpen && (
          <div className="absolute mt-11 w-64 bg-white border rounded-sm shadow-lg z-10">
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleSelectOption(option)}
                className="font-[IBM_Plex_Mono] font-normal px-4 py-2 hover:bg-[#A5A5A5] cursor-pointer text-black">
                {option.name}
              </div>
            ))}
          </div>
        )}
        {/* Отображение предупреждения */}
        {!isReadOnly && hasInteracted && !isFocused && !isValid && (
          <p className={twMerge('text-red-500 text-sm pl-2 h-10 w-150')}>Press Enter to confirm input.</p>
        )}
      </div>
    </div>
  );
}