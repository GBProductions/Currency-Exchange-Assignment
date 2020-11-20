import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';



$('document').ready(function() {
  $('#submitUSD').click(function() {
    const usDollar = parseInt($('#usdInput').val());
    $('#usdInput').val("");

    const currency = $('#currencyConvert').val();
    $('#currencyInput').val("");



    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/61905536dd0b5c15fe86d220/latest/USD`;

    request.onreadystatechange = function() {

    }
  });
});