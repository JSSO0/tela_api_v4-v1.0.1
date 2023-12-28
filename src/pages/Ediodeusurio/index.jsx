import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const EdiodeusurioPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue-100 font-inter h-[832px] mx-auto p-0.5 relative w-full">
        <div className="absolute h-[828px] inset-[0] justify-center m-auto max-w-[1186px] md:px-5 w-full">
          <Img
            className="h-[828px] m-auto object-cover w-full"
            src="images/img_image1.png"
            alt="imageOne"
          />
          <Text
            className="absolute inset-x-[0] mx-auto md:text-5xl text-6xl text-white-A700 top-[7%] w-max"
            size="txtInterExtraBold60"
          >
            Editar Usuário
          </Text>
          <div className="absolute bottom-[5%] flex flex-col gap-2 inset-x-[0] items-center justify-start mx-auto w-[19%]">
            <Button
              className="common-pointer cursor-pointer font-extrabold leading-[normal] min-w-[217px] text-center text-xs"
              onClick={() => navigate("/criaadeusurio")}
            >
              Editar usuário
            </Button>
            <div className="flex flex-col items-center justify-start w-full">
              <Button
                className="common-pointer cursor-pointer font-extrabold leading-[normal] min-w-[217px] text-center text-xs"
                onClick={() => navigate("/criaadeusurio")}
              >
                Voltar
              </Button>
            </div>
          </div>
          <div className="absolute flex flex-col items-start justify-start left-[0] rounded-[10px] shadow-bs top-[31%] w-[44%]">
            <Text className="text-black-900 text-xs" size="txtInterExtraBold12">
              Nome
            </Text>
            <Input
              name="rectangleFive"
              placeholder=""
              className="p-0 w-full"
              wrapClassName="border border-black-900 border-solid flex h-[39px] mt-1 w-full"
            ></Input>
          </div>
          <div className="absolute flex flex-col items-start justify-start left-[0] rounded-[10px] shadow-bs top-[24%] w-[44%]">
            <Text className="text-black-900 text-xs" size="txtInterExtraBold12">
              ID
            </Text>
            <Input
              name="rectangleFive_One"
              placeholder=""
              className="p-0 w-full"
              wrapClassName="border border-black-900 border-solid flex h-[39px] mt-1 w-full"
            ></Input>
          </div>
          <div className="absolute flex flex-col items-start justify-start left-[0] rounded-[10px] shadow-bs top-[39%] w-[44%]">
            <Text className="text-black-900 text-xs" size="txtInterExtraBold12">
              Usuário
            </Text>
            <Input
              name="rectangleSix"
              placeholder=""
              className="p-0 w-full"
              wrapClassName="border border-black-900 border-solid flex h-[39px] mt-[3px] w-full"
            ></Input>
          </div>
          <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[0] my-auto rounded-[10px] shadow-bs w-[44%]">
            <Text className="text-black-900 text-xs" size="txtInterExtraBold12">
              CPF
            </Text>
            <Input
              name="rectangleSeven"
              placeholder=""
              className="p-0 w-full"
              wrapClassName="border border-black-900 border-solid flex h-[39px] mt-0.5 w-full"
            ></Input>
          </div>
          <div className="absolute bottom-[40%] flex flex-col items-start justify-start left-[0] rounded-[10px] shadow-bs w-[44%]">
            <Text className="text-black-900 text-xs" size="txtInterExtraBold12">
              Senha
            </Text>
            <Input
              name="rectangleEight"
              placeholder=""
              className="p-0 w-full"
              wrapClassName="border border-black-900 border-solid flex h-[39px] mt-0.5 w-full"
            ></Input>
          </div>
          <div className="absolute bottom-[32%] flex flex-col gap-[5px] items-start justify-start left-[0] rounded-[10px] shadow-bs w-[44%]">
            <Text className="text-black-900 text-xs" size="txtInterExtraBold12">
              Telefone
            </Text>
            <Input
              name="rectangleNine"
              placeholder=""
              className="p-0 w-full"
              wrapClassName="border border-black-900 border-solid flex h-[39px] w-full"
            ></Input>
          </div>
          <div className="absolute bottom-[24%] flex flex-col gap-2 items-start justify-start left-[0] rounded-[10px] shadow-bs w-[44%]">
            <Text className="text-black-900 text-xs" size="txtInterExtraBold12">
              Número
            </Text>
            <Input
              name="rectangleTen"
              placeholder=""
              className="p-0 w-full"
              wrapClassName="border border-black-900 border-solid flex h-[39px] w-full"
            ></Input>
          </div>
        </div>
        <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start my-auto md:px-5 right-[3%] w-[47%]">
          <Text
            className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
            size="txtInterExtraBold30"
          >
            Resultado
          </Text>
          <div className="bg-gray-100 border border-black-900 border-solid h-[301px] rounded-[10px] w-full"></div>
        </div>
      </div>
    </>
  );
};

export default EdiodeusurioPage;
