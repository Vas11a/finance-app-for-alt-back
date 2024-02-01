import React from 'react'
import s from './style.module.css'

type SwitchUserModulesType = {
    selectedModule: number
    changeModule: (num: number) => void
}

export default function SwitchUserModules({ selectedModule,changeModule}: SwitchUserModulesType): JSX.Element {
    return (
        <div className={s.switchcontainer}>
            <div className="flex">
                <div 
                    className={s.switchElement + ` -mr-onepx rounded-l-2xl ${selectedModule === 1 ? 'bg-oBg' : ''} `} 
                    onClick={() => changeModule(1)}>
                        Income
                </div>
                <div 
                    className={s.switchElement + ` ${selectedModule === 2 ? 'bg-oBg' : ''} `} 
                    onClick={() => changeModule(2)}>
                        History
                </div>
                <div 
                    className={s.switchElement + ` -ml-onepx rounded-r-2xl ${selectedModule === 3 ? 'bg-oBg' : ''} `} 
                    onClick={() => changeModule(3)}>
                        Settings
                </div>
            </div>
        </div>
    )
}
