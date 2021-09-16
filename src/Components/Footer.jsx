import './CSS/footer.css'

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="d-flex justify-content-center align-items-center color-footer">
          <div>
            <h3 className="title color-footer text-center">Fale Conosco</h3>
            <p className="footer-text m-0 text-center">
              contato <br />
              |61| 9 8269-0479 || ibctmissoes@gmail.com</p>
            <div className="d-flex justify-content-between">
              <a href="https://wa.me/556199474700" target='_blank' rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
              <a href="#as"><i className="fab fa-instagram"></i></a>
              <a href="#as"><i className="fab fa-facebook"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span>Copyright © 2021, All Right Reserved <br />by Murilo Maia</span>
            </div>
            <div className="col-md-6">
              <div className="copyright-menu">
                <ul>
                  <li>
                    <a href="https://github.com/muriloommaia">Projects</a>
                  </li>
                  {/* <li>
                                    <a href="#as">Terms</a>
                                </li>
                                <li>
                                    <a href="#as">Privacy Policy</a>
                                </li> */}
                  <li>
                    <a href="https://wa.me/5491125848669">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




export default Footer