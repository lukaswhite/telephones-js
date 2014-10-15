var express     =   require('express')
  , exphbs      =   require('express-handlebars')
  , phoneUtil   =   require('google-libphonenumber').phoneUtil
  , PNF         =   require('google-libphonenumber').PhoneNumberFormat
  , PNT         =   require('google-libphonenumber').PhoneNumberType;

function nameOfType(type) {
  switch (type) {
    case PNT.FIXED_LINE:
      return 'Fixed line';
    case PNT.MOBILE:
      return 'Mobile';
    case PNT.FIXED_LINE_OR_MOBILE:
      return 'Fixed line OR mobile';
    case PNT.TOLL_FREE:
      return 'Toll free';
    case PNT.PREMIUM_RATE:
      return 'Premium rate';
    case PNT.SHARED_COST:
      return 'Shared cost';
    case PNT.VOIP:
      return 'VOIP';
    case PNT.PERSONAL_NUMBER:
      return 'Personal number';
    case PNT.PAGER:
      return 'Pager';
    case PNT.UAN:
      return 'UAN';
    case PNT.UNKNOWN:
      return 'Unknown';
  }
  return 'Unknown';
}

app = express()

app.use(express.static(__dirname + '/bower_components'))

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/', function(req, res, next) {
  res.render('index')
});

app.get('/lookup/:number', function(req, res, next) {  
  
  try {

    var tel = phoneUtil.parse(req.params.number)
    var data = {}
    data.valid = phoneUtil.isValidNumber(tel)
    if (data.valid) {
      data.e164           =   phoneUtil.format(tel, PNF.E164);
      data.national       =   phoneUtil.format(tel, PNF.NATIONAL);
      data.international  =   phoneUtil.format(tel, PNF.INTERNATIONAL);
      data.type           =   nameOfType(phoneUtil.getNumberType(tel));
    }
    res.render('results', data)

  } catch (e) {
    res.send('Please enter a valid telephone number')
  }
})

/**
 * Start listening
 */
var server = app.listen(4000, function() {
  console.log('Listening on port %d', server.address().port)
});
