let teste1 = null || 'Valor a direita'
        let teste2 = 0 || 'Valor a direita'
        let teste3 = undefined || 'Valor a direita'
        let teste4 = '' || 'Valor a direita'
        let teste5 = 'Valor a esquerda' || 'Valor a direita'

        console.log('teste1: ', teste1)
        console.log('teste2: ', teste2)
        console.log('teste3: ', teste3)
        console.log('teste4: ', teste4)
        console.log('teste5: ', teste5)

        console.log('---------------')

        //nullish coalescing (??)
        teste1 = null ?? 'Valor a direita'
        teste2 = 0 ?? 'Valor a direita' //utilizável
        teste3 = undefined ?? 'Valor a direita'
        teste4 = '' ?? 'Valor a direita' //utilizável
        teste5 = 'Valor a esquerda' ?? 'Valor a direita'

        console.log('teste1: ', teste1)
        console.log('teste2: ', teste2)
        console.log('teste3: ', teste3)
        console.log('teste4: ', teste4)