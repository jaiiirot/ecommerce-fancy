<?php
session_start();
require_once "Database/Database.php";
if ($_SESSION['username'] == null) {
    echo "<script>alert('Por favor registrarse o iniciar sesion.');</script>";
    header("Refresh:0 , url=index.html");
    exit();
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
        <table>
            <tr>
                <th scope="col">N°</th>
                <th scope="col">ID:Prod</th>
                <th Scope="col">imagen</th>
                <th scope="col">Nombre:Producto</th>
                <th scope="col">Cantidades</th>
                <th scope="col">Precio</th>
                <th scope="col">Fecha:Registro</th>
                <th scope="col">Editar</th>
                <th scope="col">Eliminar</th>
            </tr>
            <tbody>
                <?php
                $idpro = 1;
                while ($row = mysqli_fetch_array($query)) { ?>
                    <tr>
                        <td scope="row"><?php echo $idpro ?></td>
                        <td><?php echo $row['id'] ?></td>
                        <td><?php echo $row['img']?></td>
                        <td><?php echo $row['proname'] ?></td>
                        <td><?php echo $row['amount'] ?></td>
                        <td><?php echo "$" . $row['precio'] ?></td>
                        <td class="timeregis"><?php echo $row['time'] ?></td>
                        <td class="modify"><a name="edit" id="" class="bfix" href="editarProductos.php?id=<?php echo $row['id'] ?>&imagen=<?php echo $row['img'] ?>&message=<?php echo $row['proname'] ?>&amount=<?php echo $row['amount']; ?>&precio=<?php echo $row['precio']; ?> " role="button">
                                Editar
                            </a></td>
                        <td class="delete"><a name="id" id="" class="bdelete" href="main/eliminarProductos.php?id=<?php echo $row['id'] ?>" role="button">
                                Eliminar
                            </a></td>
                    </tr>
                <?php
                    $idpro++;
                } ?>
            </tbody>
        </table>
        <br>
        <a name="" id="" class="Addlist" style="float:right" href="agregarProductos.php" role="button">Agregar Producto</a>
    </div>
    <?php
    mysqli_close($conn);
    ?>
</body>

</html>