import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Button, Img, Input, Text } from 'components'

const BuscarusurioPage = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="bg-blue-100 font-inter h-[832px] mx-auto p-0.5 relative w-full">
        <div className="h-[828px] m-auto max-w-[1186px] md:px-5 w-full">
          <Img
            className="h-[828px] m-auto object-cover w-full"
            src="images/img_image1.png"
            alt="imageOne"
          />
          <Text
            className="absolute inset-x-[0] mx-auto md:text-5xl text-6xl text-white-A700 top-[7%] w-max"
            size="txtInterExtraBold60"
          >
            Buscar único usuário
          </Text>
        </div>
        <div className="absolute bottom-[9%] flex flex-col inset-x-[0] items-center justify-start mx-auto md:px-5 w-[47%]">
          <div className="flex flex-col items-start justify-start rounded-[10px] shadow-bs w-[86%] md:w-full">
            <Text className="text-black-900 text-xs" size="txtInterExtraBold12">
              ID
            </Text>
            <Input
              name="rectangleFive"
              placeholder=""
              className="p-0 w-full"
              wrapClassName="border border-black-900 border-solid flex h-[39px] mt-1 w-full"
            ></Input>
          </div>
          <Button
            className="common-pointer cursor-pointer font-extrabold leading-[normal] min-w-[217px] mt-7 text-center text-xs"
            onClick={() => navigate('/criaadeusurio')}
          >
            Buscar usuário
          </Button>
          <div className="flex flex-col items-start justify-start mt-[19px] w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
              size="txtInterExtraBold30"
            >
              Resultado
            </Text>
            <div className="bg-gray-100 border border-black-900 border-solid h-[301px] rounded-[10px] w-full"></div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[78px] w-[37%] md:w-full">
            <Button
              className="common-pointer cursor-pointer font-extrabold leading-[normal] min-w-[217px] text-center text-xs"
              onClick={() => navigate('/criaadeusurio')}
            >
              Voltar
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BuscarusurioPage
