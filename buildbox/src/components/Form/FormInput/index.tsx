import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 95%;
  border-radius: 10px;
  height: 2em;
  border: none;
  margin: 0.5em;
  padding: 0.5em;
  font-weight: lighter;
  font-size: 1.4em;
  font-family: 'Roboto', sans-serif;
  text-align: start;
  color: #9f9f9f;
  background-color: #494949;
  outline: none;

  &::placeholder {
    padding-left: 0.1em;
    font-size: 0.8em;
    font-weight: 400;
    color: #9f9f9f;
  }

  &:focus {
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 425px) and (max-width: 768px) {
    width: 70%;
    height: 1.5em;
    line-height: 1.5em;
  }

  @media (max-width: 425px) {
    width: 70%;
    height: 1em;
    font-size: 1.2em;
  }

  &[type="file"] {
    display: none;
  }
`;

const StyledTextarea = styled.textarea`
  width: 95%;
  height: 6em;
  border-radius: 10px;
  border: none;
  margin: 0.5em;
  padding: 0.5em;
  font-weight: lighter;
  font-size: 1.4em;
  font-family: 'Roboto', sans-serif;
  text-align: start;
  color: #9f9f9f;
  background-color: #494949;
  resize: none;
  overflow: auto;
  outline: none;

  &::placeholder {
    text-align: start;
    padding-left: 0.1em;
    font-size: 0.8em;
    font-weight: 400;
    color: #9f9f9f;
  }

  &:focus {
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 425px) and (max-width: 768px) {
    width: 70%;
    height: 4em;
  }

  @media (max-width: 425px) {
    width: 70%;
    height: 5em;
    font-size: 1.2em;
  }
`;

const ImageContainer = styled.div<{ hasImage: boolean }>`
  position: relative;
  border: 2px dashed #9f9f9f;
  width: 200px;
  height: 200px;
  margin: 0.5em;
  border-radius: 50px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #494949;
  color: #9f9f9f;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: ${({ hasImage }) => (hasImage ? 'block' : 'none')};
  }

  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
    border-radius: 40px;
  }

  @media (min-width: 425px) and (max-width: 768px) {
    width: 80px;
    height: 80px;
    border-radius: 35px;
  }

  @media (max-width: 425px) {
    width: 60px;
    height: 60px;
    border-radius: 20px;
  }

  @media (max-width: 375px) {
    width: 80px;
    height: 80px;
    border-radius: 15px;
  }
`;

const Icon = styled.span<{ hasImage: boolean }>`
  font-size: 4em;
  color: #9f9f9f;
  display: ${({ hasImage }) => (hasImage ? 'none' : 'block')};

  @media (min-width: 768px) {
    font-size: 3em;
  }

  @media (min-width: 425px) and (max-width: 768px) {
    font-size: 2.5em;
  }

  @media (max-width: 425px) {
    font-size: 2em;
  }

  @media (max-width: 375px) {
    font-size: 1.5em;
  }
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #ff0000;
  font-size: 1.5em;
`;

interface FormInputProps {
  type: "text" | "textarea" | "file";
  placeholder: string;
  onChange?: (value: string) => void;
}

const FormInput: React.FC<FormInputProps> = ({ type, placeholder, onChange }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        localStorage.setItem("selectedImage", e.target?.result as string);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    localStorage.removeItem("selectedImage");
  };

  if (type === "file") {
    return (
      <div>
        <label>
          <StyledInput type="file" onChange={handleImageChange} />
          <ImageContainer hasImage={!!selectedImage}>
            {selectedImage && <img src={selectedImage} alt="Selected" />}
            <Icon hasImage={!!selectedImage} className="material-symbols-outlined">
              add_photo_alternate
            </Icon>
            {selectedImage && (
              <RemoveButton onClick={handleRemoveImage}>
                <span className="material-symbols-outlined">delete</span>
              </RemoveButton>
            )}
          </ImageContainer>
        </label>
      </div>
    );
  }

  if (type === "textarea") {
    return <StyledTextarea placeholder={placeholder} onChange={handleChange}/>;
  }

  return <StyledInput type={type} placeholder={placeholder} onChange={handleChange}/>;
};

export default FormInput;
