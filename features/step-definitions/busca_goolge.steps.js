var expect = require('chai').expect;

var {Given, Then, When} = require('cucumber');
Given(/^que estou na home do Google$/, function () {
  return browser.url("https://www.google.com.br/")
});

When('pesquisar por {string}', function (string) {
  return $("#lst-ib").setValue(string);
});

Then('serão exibidos os resultados da pesquisa', function () {
  $('#hplogo').click();
  $('[name=btnK]').click();
  expect($("#search").getText()).to.contain("webdriver");
});