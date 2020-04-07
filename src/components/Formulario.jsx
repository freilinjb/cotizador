import React from 'react';

const Formulario = () => {
    return ( 
        <form>
            <div class="form-group">
                <label htmlFor="marca">Marca</label>
                <select className="form-control" name="marca">
                    <option disabled selected value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="anio">Año</label>
                <select className="form-control" name="anio">
                <option disabled selected value="">-- Seleccione --</option>
                <option value="">-- Seleccione --</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                </select>
            </div>
               
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="plan" id="basico" value="basico"/>
                <label className="form-check-label" htmlFor="basico"></label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="plan" id="completo" value="completo"/>
                <label className="form-check-label" htmlFor="completo">Completo</label>
            </div>
        </form>
     );
}
 
export default Formulario;