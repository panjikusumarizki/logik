//palindrom
const palindrom = (kata) => {
    if (typeof(kata) === 'string'){
      let a = kata.toLowerCase()
      let operasi = a.split('').reverse().join('')
  
      if (operasi === a){
        console.log('Palindrom')
      } else {
        console.log('Bukan Palindrom')
      }
    } else {
      console.log('Parameter kata harus berupa string !')
    }
  }
    
  palindrom('kasur rusak');