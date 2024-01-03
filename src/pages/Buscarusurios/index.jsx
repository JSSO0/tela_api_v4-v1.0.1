import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Button, Img, Text } from 'components'

const BuscarusuriosPage = () => {
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
          <div className="absolute flex flex-col inset-x-[0] justify-start mx-auto top-[7%] w-[42%]">
            <Text
              className="md:text-5xl text-6xl text-white-A700"
              size="txtInterExtraBold60"
            >
              Buscar Usuários
            </Text>
            <Button
              className="common-pointer cursor-pointer font-extrabold leading-[normal] min-w-[217px] md:ml-[0] ml-[116px] mr-[154px] text-center text-xs"
              onClick={() => navigate('/criaadeusurio')}
            >
              Buscar usuários
            </Button>
          </div>
          <div className="absolute bottom-[12%] flex flex-col inset-x-[0] justify-start mx-auto w-full">
            <Text
              className="ml-2.5 md:ml-[0] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
              size="txtInterExtraBold30"
            >
              Resultado
            </Text>
            <div className="bg-gray-100 border border-black-900 border-solid h-[434px] rounded-[10px] w-full"></div>
          </div>
        </div>
        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto md:px-5 top-[26%] w-[17%]">
          <Button
            className="common-pointer cursor-pointer font-extrabold leading-[normal] min-w-[217px] text-center text-xs"
            onClick={() => navigate('/criaadeusurio')}
          >
            Voltar
          </Button>
        </div>
      </div>
    </>
  )
}

export default BuscarusuriosPage
