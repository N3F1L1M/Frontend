import React from 'react'
import "./css/contenedordeproducto.css";

const contenedordeproducto = () => {
  return (
   
<div class="sub-productos cont-sub">

<a class="sub-card" href="producto.php?productID=<?php echo $registro['id'];?>">
    
        <img class="img-card" href="/"
         src="<?php if($registro['tipo']=='0'){echo 'img/imgproductos/' . $registro['fotoportada'];}
                    if($registro['tipo']=='1'){echo 'img/imgservicios/' . $registro['fotoportada'];} ?>" 
         alt="" />
    
</a>


<div class="sub-card1"> 
  <div class="card-title">
    <p>"titulo del producto"</p>
  </div>

  <div class="button-precio">
    


    <div class="btn1">
      <a href="perfil.php?tiendaID=<?php echo $registro['idtienda'];?>">
      <img class="button-favorito" src="" alt="" />
    </a>
    <a href="perfil.php?tiendaID=<?php echo $registro['idtienda'];?>">
      <h2 class="h2-card">"nombre de tienda"</h2>
    </a>
    </div>


    <div class="btn2">
      <p class="p-card">"precio"</p>
      
    </div>

  </div>
</div>
</div>
  )
}

export default contenedordeproducto;
