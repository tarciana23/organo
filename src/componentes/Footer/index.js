import './Footer.css'

const Footer = () =>{
    return(
        <footer className='footer'>
            <section>
                <ul>
                  <li>
                    <a href="facebook.com" target='_blank'>
                    <img src='/imagens/fb.png' alt='facebook'/>
                    </a>
                  </li>
                  <li>
                    <a href='twitter.com' target='_blank'>
                        <img src='/imagens/tw.png' alt= 'twitter'/>
                    </a>
                    </li>
                  <li>
                    <a href='instagram.com' target='_blank'>
                        <img src='/imagens/ig.png' alt='instagram'/>
                    </a>
                  </li>

                </ul>
            </section>
            <section>
                <img src='/imagens/logo.png' alt='logo organo'/>
            </section>
            <section>
                <p>Desenvolvido por Tarciana.</p>
            </section>
        </footer>
        
        
    )
}

export default Footer