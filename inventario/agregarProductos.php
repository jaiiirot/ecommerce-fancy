<?php
session_start();
require_once "Database/Database.php";
if ($_SESSION['username'] == null) {
    echo "<script>alert('Please login.');</script>";
    header("Refresh:0 , url=index.html");
}
$username = $_SESSION['username'];
$sql_fetch_todos = "SELECT * FROM product ORDER BY id ASC";
$query = mysqli_query($conn, $sql_fetch_todos);

?>
<!doctype html>
<html lang="es">

<head>
    <?php include 'header.php';?>
</head>

<body>
    <header>
        <h3>NAIKI</h3>
        <a name="" id="" class="button-logout" href="cerrarSesion.php" role="button">Cerrar Sesión</a>
    </header>

    <div class="container">
        <h1>Lista de Productos</h1>
        <h2>Has accedido como <?php echo $str = strtoupper($username) ?></h2>
    </div>

    <div class="table-product">
        <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">N°</th>
                <th scope="col">ID:Prod</th>
                <th Scope="col">imagen</th>
                <th scope="col">Nombre:Producto</th>
                <th scope="col">Cantidades</th>
                <th scope="col">Precio</th>
                <th scope="col">Fecha:Registro</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $idpro = 1;
                while ($row = mysqli_fetch_array($query)) { ?>
                    <tr>
                    <td scope="row"><?php echo $idpro ?></td>
                        <td><?php echo $row['id'] ?></td>
                        <td><?php echo $row['img'] ?></td>
                        <td><?php echo $row['proname'] ?></td>
                        <td><?php echo $row['amount'] ?></td>
                        <td><?php echo "$" . $row['precio'] ?></td>
                        <td class="timeregis"><?php echo $row['time'] ?></td>
                    </tr>
                <?php
                    $idpro++;
                } ?>
            </tbody>
        </table>
        <br>
        <div class="addproduct">

            <form method="POST" action="main/codAgregarProductos.php" enctype="multipart/form-data">

                <div class="form-group">
                    <label for="exampleInputEmail1">Imagen de Producto</label>
                    <br>
                    <input type="file" class="form-control" name="imagen" required>
                </div>    

                <div class="form-group">
                    <label for="exampleInputEmail1">Nombre de Producto</label>
                    <br>
                    <input type="text" class="form-control" name="name" required>
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Precio de Producto</label>
                    <br>
                    <input type="text" class="form-control" name="cash" required>
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Cantidad</label>
                    <br>
                    <input type="number" class="form-control" name="amount" required> 
                </div> 

                <br>
                <div class="form-button">
                    <button type="submit" class="modify" style="float:right">Agregar Producto</button>
                    <a name="" id="" class="return" href="productos.php" role="button" style="float:left">Volver</a>
                </div>

            </form>
        </div>
    </div>
    <?php
    mysqli_close($conn);
    ?>
</body>

</html>