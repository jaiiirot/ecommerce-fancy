<?php
    include 'header.php';
?>

    <main class="menu_productos  separacion-del-menu">

        <div class="cards">
            <?php
                $idpro = 1;
                while ($row = mysqli_fetch_array($query)) { 
            ?>            
            <div class="card">
                <div class="imagenes">
                    <img src="inventario/img_zapatillas/<?php echo $row['img'] ?>" alt="">
                </div>
                <div class="datos">
                    <h2><?php echo $row['proname'] ?></h2>
                    <h3><?php echo "Precio: $" . $row['precio'] ?></h3>
                    <p><?php echo "Stock: " . $row['amount']?></p> 
                </div>
                <!-- <div class="acciones">
                    <button type="button">Ver</button>
                    <button type="button">Comprar</button>
                </div> -->
            </div>  
            <?php
                $idpro++;
            } ?>
        </div>
 
    </main>

<?php
    include 'footer.php';
?>