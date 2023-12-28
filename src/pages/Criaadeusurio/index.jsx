import React from "react";

import { Button, Img, Input, Text } from "components";

const CriaadeusurioPage = () => {
  return (
    <>
      <div className="bg-blue-100 font-inter h-[832px] mx-auto p-0.5 relative w-full">
        <div className="h-[828px] m-auto max-w-[1186px] md:px-5 w-full">
          <Img
            className="h-[828px] m-auto object-cover w-full"
            src="images/img_image1.png"
            alt="imageOne"
          />
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[5%]">
            <Text
              className="md:text-5xl text-6xl text-white-A700"
              size="txtInterExtraBold60"
            >
              Criação de usuário
            </Text>
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
              size="txtInterExtraBold30"
            >
              Preencha os dados abaixo!
            </Text>
          </div>
          <div className="absolute bottom-[9%] flex flex-col gap-2 inset-x-[0] items-center justify-start mx-auto w-[19%]">
            <Button className="cursor-pointer font-extrabold leading-[normal] min-w-[217px] text-center text-xs">
              Criar usuário
            </Button>
            <div className="flex flex-col items-center justify-start w-full">
              <Button className="cursor-pointer font-extrabold leading-[normal] min-w-[217px] text-center text-xs" onClick={() => navigate("/")}>
                Voltar
              </Button>
            </div>
          </div>
          <div className="absolute flex flex-col items-start justify-start left-[0] rounded-[10px] shadow-bs top-[27%] w-[44%]">
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
          <div className="absolute flex flex-col items-start justify-start left-[0] rounded-[10px] shadow-bs top-[35%] w-[44%]">
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
          <div className="absolute flex flex-col items-start justify-start left-[0] rounded-[10px] shadow-bs top-[42%] w-[44%]">
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
          <div className="absolute bottom-[44%] flex flex-col items-start justify-start left-[0] rounded-[10px] shadow-bs w-[44%]">
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
          <div className="absolute bottom-[36%] flex flex-col gap-[5px] items-start justify-start left-[0] rounded-[10px] shadow-bs w-[44%]">
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
          <div className="absolute bottom-[28%] flex flex-col gap-2 items-start justify-start left-[0] rounded-[10px] shadow-bs w-[44%]">
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
          <Text
            className="absolute right-[38%] text-3xl sm:text-[26px] md:text-[28px] text-white-A700 top-[27%]"
            size="txtInterExtraBold30"
          >
            Resultado
          </Text>
        </div>
        <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start my-auto md:px-5 right-[4%] w-[47%]">
          <Text
            className="text-white-A700 text-xs"
            size="txtInterExtraBold12WhiteA700"
          >
            Resultado
          </Text>
          <div className="bg-gray-100 border border-black-900 border-solid h-[301px] rounded-[10px] w-full"></div>
        </div>
      </div>
    </>
  );
};

export default CriaadeusurioPage;
