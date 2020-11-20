import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';



$('document').ready(function() {
  $('#submitUSD').click(function() {
    const usDollar = parseInt($('#usdInput').val());
    $('currencyConvert').val("");
  });

});