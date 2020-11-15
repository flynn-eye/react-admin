import { SearchOutlined } from '@ant-design/icons';
import { AutoComplete, Input } from 'antd';
import { AutoCompleteProps } from 'antd/es/auto-complete';
import React, { useRef, useState } from 'react';
import './index.scss';

export interface HeaderSearchProps {
  onSearch?: (value?: string) => void;
  onChange?: (value?: string) => void;
  onVisibleChange?: (b: boolean) => void;
  className?: string;
  placeholder?: string;
  options?: AutoCompleteProps['options'];
  defaultOpen?: boolean;
  open?: boolean;
  defaultValue?: string;
  value?: string;
}

const HeaderSearch: React.FC<HeaderSearchProps> = (props) => {
  const {
    className,
    defaultValue,
    onVisibleChange,
    placeholder,
    open,
    defaultOpen,
    ...restProps
  } = props;
  let inputRef = useRef<Input | null>(null);
  let [value, setValue] = useState('');
  let [inputClassName, setInputClassName] = useState('input input-hidden');
  return (
    <div
      className="headerSerach"
      onClick={() => {
        setInputClassName('input');
        if (inputRef.current) {
          console.log(inputRef.current, 11);
          inputRef.current.focus();
        }
      }}
      onTransitionEnd={({ propertyName }) => {
        if (propertyName === 'width') {
          if (onVisibleChange) {
            //onVisibleChange();
          }
        }
      }}
    >
      <SearchOutlined className="searchIcon" />
      <AutoComplete
        className={inputClassName}
        key="AutoComplete"
        value={value}
        options={restProps.options}
        onChange={setValue}
      >
        <Input
          ref={inputRef}
          defaultValue={defaultValue}
          aria-label={placeholder}
          placeholder={placeholder}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              console.log(value);
              //   if (restProps.onSearch) {
              //     restProps.onSearch(value);
              //   }
            }
          }}
          onBlur={() => {
            setInputClassName('input input-hidden');
          }}
        />
      </AutoComplete>
    </div>
  );
};

export default HeaderSearch;
