﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.



function validarFormulario() {
    let x = document.forms["formulario"]["fname"].value;
    let y = document.forms["formulario"]["femail"].value;
    if (x == "") {
      alert("O campo nome precisa ser preenchido");
      return false;
    }
    if (y == "") {
        alert("O campo email precisa ser preenchido");
        return false;
      }
  } 
