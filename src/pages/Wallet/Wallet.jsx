import {useState} from "react";
import buttons from './sideMenuButtons.json';
import './Wallet.css';
import {Nexus} from "../../components/Nexus/Nexus.jsx";

export const Wallet = () => {
    const [sidebar, setSidebar] = useState("openMenu");
    const [content, setContent] = useState('Nexus')
    const actualContent = () => {
        if (content === 'Nexus'){
            return <Nexus/>
        }
        else if (content === 'Histórico'){
            return <h1>Historico</h1>
        }
        else if (content === 'Gráficos'){
            return <h1>Gráficos</h1>
        }
        else if (content === 'Registros'){
            return <h1>Registros</h1>
        }
    }
    const changeContent = (contentName) =>{
        setContent((prevContent) => contentName)
    }
    const toggleMenu = () => {
        setSidebar((prevMenu) => (prevMenu === "openMenu" ? "closeMenu" : "openMenu"));
    };

    return (
        <body className="wallet">
        <div className={`menu ${sidebar}`}>
            <div className="menu-option">
                <button onClick={toggleMenu} className='menu-button'>

                </button>
            </div>
            {buttons.map((item, index) => (
                <div className="menu-option" key={index}>
                    <button className='selectable-button' onClick={() => changeContent(item.text)}>
                        <div>
                            {<img src={item.icon} alt={item.text} className='icon'/>}
                        </div>
                        <div>
                            {sidebar === "openMenu" && <span>{item.text}</span>}
                        </div>
                    </button>
                </div>
            ))}
        </div>
        <div className="content">
            {actualContent()}
        </div>
        </body>
    );
};
