import React from "react";

function Header(){
    return (
        <header className="header">
        <div className="toolbar">
            <div className="">
                <a href='/'>JOBS - Alteração</a>
            </div>
            <div className="">
                <button>Novo Post</button>
                <span>imagem1</span>
                <span>imagem2</span>
            </div>
        </div>
    </header>
    )
}
export default Header;