import React from 'react'
import { BsBookmark, BsBell, BsCodeSlash, BsClock } from 'react-icons/bs';
import { TbEditCircle } from 'react-icons/tb';
import { BiHide } from 'react-icons/bi';
import { GoReport } from 'react-icons/go';
import { AiOutlineUserDelete } from 'react-icons/ai';
import SettingsOption from './SettingsOption';

import '../styles/Settings.css'

const Settings = ({showSettings, handleShowSettings}) => {
  return (
    <div className={ showSettings ? 'settings active': 'settings'}>
      <ul>
        <SettingsOption 
          Icon={BsBookmark}
          title='Guardar publicacion'
          description='Agregar a tus elementos guardados.'
        />
        <hr />
        <SettingsOption 
          Icon={TbEditCircle}
          title='Ver historial de cambios'
        />
        <SettingsOption 
          Icon={BsBell}
          title='Activar notificaciones de esta publicacion'
        />
        <SettingsOption 
          Icon={BsCodeSlash}
          title='Insertar'
        />
        <hr />
        <SettingsOption 
          Icon={BiHide}
          title='Ocultar publicacion'
          description='Ver menos publicaciones como esta.'
        />
        <SettingsOption 
          Icon={BsClock}
          title='Ocultar a AF1 "Afición Fórmula 1" durante 30 días'
          description='Dejar de ver publicaciones temporalmente.'
        />
        <SettingsOption 
          Icon={AiOutlineUserDelete}
          title='Dejar de seguir a Velocidad al limite'
          description='Dejar de ver publicaciones de esta pagina.'
        />
        <SettingsOption 
          Icon={GoReport}
          title='Reportar publicacion'
          description='Me preocupa esta publicacion.'
        />
      </ul>
    </div>
  )
}

export default Settings