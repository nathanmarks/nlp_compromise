'use strict';
let nlp = require('../../../src/index.js');

// ['half a million', 500000],
// ['half-million', 500000],
// ['quarter-million', 250000],
// ['a quarter million', 250000],
// ['a quarter-grand', 250],
let tests = [
  ['twenty two thousand five hundred', 22500],
  ['two thousand five hundred and sixty', 2560],
  ['a hundred and two', 102],
  ['a hundred', 100],
  ['seven', 7],
  ['seven grand', 7000],
  ['104', 104],
  ['13 thousand', 13000],
  ['17,983', 17983],
  ['nine hundred', 900],
  ['twenty one hundred', 2100],
  ['twenty one', 21],
  ['seventy two', 72],
  ['two hundred two', 202],
  ['one thousand one', 1001],
  ['minus five hundred', -500],
  ['minus fifteen', -15],
  ['five hundred million', 500000000],
  ['$12.03', 12.03],
  ['$12', 12],
  ['5 hundred', 500],
  ['5.2 thousand', 5200],
  ['million', 1000000],
  ['hundred one', 101],
  ['12:32', null],
  ['123-1231', null],
  ['seven eleven', null],
  ['ten-four', null],
  ['one seven', null],
  ['one ten', null],
  ['one twelve', null],
  ['one thirty', null],
  ['nine fifty', null],
  ['five six', null],
  ['nine seventy', null],
  ['nine two hundred', null],
  ['ten one', null],
  ['twelve one', null],
  ['seventy five two', null],
  ['two hundred three hundred', null],
  ['sixty fifteen hundred', null],
  ['one twenty', null],
  ['twenty five twenty', null],
  ['', null],
  ['minus fifty', -50],
  ['twenty thousand', 20000],
  ['four point six', 4.6],
  ['nine hundred point five', 900.5],
  ['sixteen hundred sixteen point eight', 1616.8],
  ['four point seven nine', 4.79],
  ['four point sixteen', 4.16],
  ['twenty first', 21],
  ['fifty ninth', 59],
  ['nine hundred fiftieth', 950],
  [950, 950],
  [999999950, 999999950],
  [8080999999950, 8080999999950],
  [null, null],
];


describe('to noun', function() {
  it('text to noun', function(done) {
    tests.forEach(function(a) {
      let v = nlp.value(a[0]);
      (v.number || '').should.equal(a[1] || '');
    });
    done();
  });
});
