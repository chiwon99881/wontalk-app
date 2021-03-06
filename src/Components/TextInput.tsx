import React from "react";
import styled from "styled-components/native";
import { TextInput as TInput } from "react-native";
import Theme from "../../Theme";

const ExTextInput = styled<any>(TInput)`
  width: ${props => props.width};
  background-color: ${Theme.whiteColor};
  border-radius: 10px;
  padding: 15px;
`;
interface IProps {
  width: number | string;
  placeholder: string;
  value: any;
  onChangeText: (text: any) => void;
  className?: any;
  returnKeyType?: "done" | "go" | "next" | "search" | "send";
  onSubmitEditing?: any;
  placeholderTextColor?: any;
}
const TextInput: React.SFC<IProps> = ({
  width,
  placeholder,
  value,
  onChangeText,
  className,
  returnKeyType,
  onSubmitEditing,
  placeholderTextColor
}) => {
  return (
    <ExTextInput
      className={className}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      value={value}
      onChangeText={onChangeText}
      width={width}
      returnKeyType={returnKeyType}
      onSubmitEditing={onSubmitEditing}
    />
  );
};

export default TextInput;
