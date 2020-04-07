import React from 'react';

const Formulario = () => {
    return ( 
        <form>
            <div className="">
               <div class="form-group">
                 <label htmlFor="marca"></label>
                 <select className="form-control" name="marca">
                   <option value="americano">Americano</option>
                   <option value="europeo">Europeo</option>
                   <option value="asiatico">Asiatico</option>
                 </select>
               </div>
            </div>
        </form>
     );
}
 
export default Formulario;