

// default api calls

const api = "http://10.0.0.113:3000/"
const apiV1 = "http://10.0.0.113:3000/api/v1/"

// default images. ~~ListingContainer.js
export const defListImg = 'https://www.renovabike.it/wp-content/themes/gecko/assets/images/placeholder.png'

// money formatter
export const Money = num => {
    return '$' + num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

// telephone number formatter
export function FormatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      var intlCode = (match[1] ? '+1 ' : '')
      return [intlCode, '(', match[2], ')-', match[3], '-', match[4]].join('')
    }
    return null
  }
//   formatPhoneNumber('+12345678900') // => "+1 (234) 567-8900"
//   formatPhoneNumber('2345678900')   // => "(234) 567-8900"
