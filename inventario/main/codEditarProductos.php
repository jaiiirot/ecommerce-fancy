<?php
    session_start();
    require_once "../Database/Database.php";
    if($_SESSION['username'] == null){
    echo "<script>alert('Por favor registrarse o iniciar sesion.')</script>";
    header("Refresh:0 , url = ../index.html");
    exit();
    }
    if($_FILES['imagen']['name'] != null && $_POST['name'] != null && $_POST['value'] != null && $_POST['cash'] != null){
            $sql = "UPDATE product SET img = '" . trim($_FILES['imagen']['name']) . "' ,proname = '" . trim($_POST['name']) . "' ,precio = '" . trim($_POST['cash']) . "' ,amount = '" . trim($_POST['value']) . "' WHERE id = '" . $_POST['id'] . "'";

        if($conn->query($sql)){
            echo "<script>alert('Proceso completado exitósamente')</script>";
            header("Refresh:0 , url =../productos.php");
            exit();

        }
        else{
            echo "<script>alert('Inconvenientes para realizar el proceso')</script>";
            header("Refresh:0 , url =../productos.php");
            exit();

        }
    }
    else{
        echo "<script>alert('Por favor diligencia todos los campos')</script>";
        header("Refresh:0 , url = ../productos.php");
        exit();

    }
    mysqli_close($conn);
?>
