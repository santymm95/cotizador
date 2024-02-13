import '../assets/stylesCSS/footer.css';

function Footer () {
  return (
    <div className="footer">

      <div className="container-footer">

        <p>POR SOLO</p>
        <div id="paralelograma" className="shape"><strong>$15.000</strong></div>
        
        <p>DIARIOS </p>
          <span className='separate'></span>
        <p>MATRICULA</p>
        <div id="paralelogramas" className="shape"><strong>GRATIS</strong></div>
        <p>POR ESTE MES</p>
      </div>

      {/* <div>
            <h3>DESDE SOLO <strong>$15.200</strong>DIARIOS</h3>
        </div>
        <div>
            <h3>MATRICULA <strong>GRATIS</strong>POR ESTE MES</h3>
        </div> */}

    </div>
  );
}

export default Footer;
