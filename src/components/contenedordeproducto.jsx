import React from 'react'
import "./css/contenedordeproducto.css";

const contenedordeproducto = () => {
  return (
   
<div className="sub-productos cont-sub">

<a className="sub-card" href="producto.php?productID=<?php echo $registro['id'];?>">
    
        <img className="img-card" href="/"
         src="<?php if($registro['tipo']=='0'){echo 'img/imgproductos/' . $registro['fotoportada'];}
                    if($registro['tipo']=='1'){echo 'img/imgservicios/' . $registro['fotoportada'];} ?>" 
         alt="" />
    
</a>


<div className="sub-card1"> 
  <div className="card-title">
    <p>"titulo del producto"</p>
  </div>

  <div className="button-precio">
    


    <div className="btn1">
      <a href="perfil.php?tiendaID=<?php echo $registro['idtienda'];?>">
      <img className="button-favorito" src="" alt="" />
    </a>
    <a href="perfil.php?tiendaID=<?php echo $registro['idtienda'];?>">
      <h2 className="h2-card">"nombre de tienda"</h2>
    </a>
    </div>


    <div className="btn2">
      <p className="p-card">"precio"</p>
      
    </div>

  </div>
</div>
</div>
  )
}

export default contenedordeproducto;
