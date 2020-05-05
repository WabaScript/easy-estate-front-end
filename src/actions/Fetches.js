

// default api calls

const api = "http://10.0.0.113:3000/"
const apiV1 = "http://10.0.0.113:3000/api/v1/"

// default images. ~~ListingContainer.js
export const defListImg = 'https://lh3.googleusercontent.com/proxy/6V7nJRhu-qKZ4cgvQAxcK54gR5bB9YF3de78YP2q4U_fTugh7PU3dSi9GGnIG6hg3dQ04L8fpIdxZpERzAwhdze8eS-iTW_aPPxOfnnQRIrNoNdxq3EAHV4HetrBkgy0rQrcEbheGLmcbwxdeS-T2bAkF8nuJjplMsbZ7q6XXJFx'

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
