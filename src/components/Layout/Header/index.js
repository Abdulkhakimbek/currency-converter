import React from 'react'
import cls from './Header.module.css'

const Header = () => {
  return (
    <header className={cls.header}>
      <div className={cls.headerContainer}>
        <a href={"/"} className={cls.mainLogo}>
          Bank Logo
        </a>

        <a href={"/exchange-rates"} className={cls.link}>
          Current exchange rates
        </a>
      </div>
    </header>
  )
}

export default Header