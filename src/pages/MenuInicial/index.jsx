import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Button, Img, Text } from 'components'

const MenuInicialPage = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="bg-blue-100 font-inter h-[832px] mx-auto p-0.5 relative w-full">
        <Img
          className="h-[828px] m-auto max-w-[1186px] object-cover w-full"
          src="images/img_image1.png"
          alt="imageOne"
        />
        <div className="absolute flex flex-col md:gap-10 gap-24 inset-x-[0] items-center justify-start max-w-[955px] mx-auto md:px-5 top-[7%] w-full">
          <div className="flex flex-col gap-[7px] items-center justify-start">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
              size="txtInterExtraBold30"
            >
              Bem vindo a API Joely
            </Text>
            <Text
              className="mb-[3px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
              size="txtInterExtraBold30"
            >
              Hora de escolher o que vai fazer!
            </Text>
          </div>
          <div className="gap-[29px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-full">
            <Button
              className="common-pointer cursor-pointer flex-1 font-extrabold leading-[normal] min-w-[217px] text-center text-xs w-full"
              onClick={() => navigate('/criaadeusurio')}
            >
              Criar usuário
            </Button>
            <Button
              className="common-pointer cursor-pointer flex-1 font-extrabold leading-[normal] min-w-[217px] text-center text-xs w-full"
              onClick={() => navigate('/ediodeusurio')}
            >
              Editar usuário
            </Button>
            <Button
              className="common-pointer cursor-pointer flex-1 font-extrabold leading-[normal] min-w-[217px] text-center text-xs w-full"
              onClick={() => navigate('/buscarusurios')}
            >
              Buscar usuários
            </Button>
            <Button
              className="common-pointer cursor-pointer flex-1 font-extrabold leading-[normal] min-w-[217px] text-center text-xs w-full"
              onClick={() => navigate('/buscarusurio')}
            >
              Buscar usuário
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuInicialPage
