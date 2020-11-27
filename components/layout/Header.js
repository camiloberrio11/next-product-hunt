import React from 'react'
import Buscar from '../ui/Buscar';
import Navegacion from './Navegacion';
import Link from 'next/link';
const Header = () => {
  return (
    <header>
      <div>
        <div>
          <p>Product Hunt</p>

          {/* Buscador aca */}
          <Buscar />

          {/* Navegacion aca */}
          <Navegacion />
        </div>

        <div>
          {/* Menu de admin */}
          <p>Hola: Juan Berrio</p>
          <button type="button">Cerrar sesión</button>
          <Link href="/">Login</Link>
          <Link href="/">Crear cuenta</Link>
        </div>
      </div>
    </header>
  )
}
export default Header;
