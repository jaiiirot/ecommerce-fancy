<?php
    session_start();
    require_once "../Database/Database.php";
    if($_SESSION['username'] == null){
    echo "<script>alert('Por favor registrarse o iniciar sesion.')</script>";
    header("Refresh:0 , url = ../index.html");
    exit();

    }

    if($_FILES['imagen']['name'] != null && $_POST['name'] != null && $_POST['amount'] != null ){
        $sql = "INSERT INTO product (img,proname,precio,amount) VALUES ('". trim($_FILES['imagen']['name'])."','". trim($_POST['name']). "','". trim($_POST['cash']). "','". trim($_POST['amount']). "')";
        if($conn->query($sql)){
            echo "<script>alert('se agregó correctamente')</script>";
            header("Refresh:0 , url = ../productos.php");
            exit();

        }
        else{
            echo "<script>alert('No se pudo agregar')</script>";
            header("Refresh:0 , url = ../productos.php");
            exit();

        }
    }
    else{
        echo "<script>alert('Por favor complete la información.')</script>";
        header("Refresh:0 , url = ../productos.php");
        exit();

    }
    mysqli_close($conn);
?>