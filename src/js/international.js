import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

export function convertAUD(response, usDollar) {
  $('.showAUD').text("");
  $('.showEUR').text("");
  $('.showGBP').text("");
  $('.showJPY').text("");
  $('.showCHF').text("");
  $('.showErrors').text("");
  $('.statusError').text("");
}

export function convertEUR(response, usDollar) {
  $('.showAUD').text("");
  $('.showEUR').text("");
  $('.showGBP').text("");
  $('.showJPY').text("");
  $('.showCHF').text("");
  $('.showErrors').text("");
  $('.statusError').text("");
}

export function convertGBP(response, usDollar) {
  $('.showAUD').text("");
  $('.showEUR').text("");
  $('.showGBP').text("");
  $('.showJPY').text("");
  $('.showCHF').text("");
  $('.showErrors').text("");
  $('.statusError').text("");
}

export function convertJPY(response, usDollar) {
  $('.showAUD').text("");
  $('.showEUR').text("");
  $('.showGBP').text("");
  $('.showJPY').text("");
  $('.showCHF').text("");
  $('.showErrors').text("");
  $('.statusError').text("");
}

export function convertCHF(response, usDollar) {
  $('.showAUD').text("");
  $('.showEUR').text("");
  $('.showGBP').text("");
  $('.showJPY').text("");
  $('.showCHF').text("");
  $('.showErrors').text("");
  $('.statusError').text("");
}

export function notCurrency(currency) {
  $('.showAUD').text("");
  $('.showEUR').text("");
  $('.showGBP').text("");
  $('.showJPY').text("");
  $('.showCHF').text("");
  $('.showErrors').text("");
  $('.statusError').text("")
}

export function statusError(error) {
  $('.showAUD').text("");
  $('.showEUR').text("");
  $('.showGBP').text("");
  $('.showJPY').text("");
  $('.showCHF').text("");
  $('.showErrors').text("");
  $('.statusError').text("You have a " + error + "status error!");
}