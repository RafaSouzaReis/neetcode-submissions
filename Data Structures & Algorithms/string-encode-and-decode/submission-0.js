class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.reduce((acc, element, index) => {
            acc = acc + element.length + '#' + element
            return acc
        }, '')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const resp = []
        let i = 0

        while (i < str.length) {
            let num = ""
            while (str[i] !== "#") {
                num += str[i]
                i++
            }

            const tamanho = Number(num)

            i++

            const palavra = str.slice(i, i + tamanho)
            resp.push(palavra)

            i += tamanho
        }

        return resp
    }
}