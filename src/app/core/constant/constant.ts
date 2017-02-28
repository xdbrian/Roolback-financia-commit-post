export class Constant {
   title :String = "Test";

   URL_HOST : String  = window.location.protocol + '//' + window.location.hostname + ':';

   APP_MOCK = true;
   PORT = 9002;

	 // PORT = 2222,
		HTTP= 'https://';
		APP_URL:String = this.URL_HOST;
		IP_BACKEND = this.HTTP + 'www.crecemasbcp.com:';
		REST_URL_DEFAULT = this.APP_URL + '' + this.PORT;
		REST_BACKEND = this.IP_BACKEND + this.PORT;
		DIR_MOCK = 'mocks/';

    HEAD_TOKEN_LONDON 	= 'london-token';
		STORAGE_USER = 'storage_user';

    getURL(alias, IS_MOCK) {
		
        if(IS_MOCK) {			
          return  this.DIR_MOCK + alias + '.json';
        }
		
        if(this.APP_MOCK) {			
          return  this.REST_URL_DEFAULT + '/london' + alias;
        }else {
          return this.REST_BACKEND + '/london/api'  + alias;
        }
	}

  constructor() {
/*
  var coreConstants = {
			
			'APP_MOCK' : this.APP_MOCK,
			'HEADER' : {
				'HEAD_TOKEN_LONDON': this.HEAD_TOKEN_LONDON,
			},
			'STORAGE': {
				'STORAGE_USER': this.STORAGE_USER
			},

			// Mensajes de errores en los servicios
			'ERROR_INTERNO'         : 'Error interno, intentelo de nuevo.',
			'ERROR_INTERNO_LATER'   : 'Error interno, inténtelo más tarde.',
			'SESSION_EXPIRED'       : 'Su sesión ha expirado.',
			
			'CAPTCHA_KEY': '6LffkAsUAAAAADwkwLxEq0Av-yMT83jOLPP2gb0R',

			'KPIS_CONFIG': {
				'RECORDS_MAX_TO_ROTATE': 20,
				'TYPES_CHART': {
					'BAR': 			'bar',
					'PIE': 			'pie',
					'MULTIBAR': 	'multibar',
					'LINE': 		'line',
					'BARHORIZONTAL':'barhorizontal',
					'LINEBAR':		'linebar'
				},
				'TYPES_SYMBOL': {
					'SOL_SYMBOL': 'S/. ',
					'PERCENTAGE': '%'
				},
				'TYPES_FORMATS': {
					'CURRENCY': 'currency'
				},
				'NO_DATA': 'No hay datos disponibles.'
			},
			'PARAM_KPIS': {
				'ONE_MONTH': {
					'id':'1M',
					'desc':'1 mes'
				},
				'THREE_MONTH': {
					'id':'3M',
					'desc':'3 meses'
				},
				'SIX_MONTH': {
					'id':'6M',
					'desc':'6 meses'
				},
				'ONE_YEAR': {
					'id':'1A',
					'desc':'1 año'
				},
				'TWO_YEAR': {
					'id':'2A',
					'desc':'2 años'
				}
			},
			'INACTIVITY_TIME': 30, //minutos
			'URL_LOGIN': this.getURL('/iniciar_sesion',null),
			'RECOVERY_PASS': this.getURL('/olvide_password', this.APP_MOCK),
		
		}
*/
  }

  }