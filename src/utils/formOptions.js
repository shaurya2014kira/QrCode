

export const optionData = (data) => {
    const arr = []
    data.map((ele, idx) => {

        arr.push(ele.userDesignation)

    })
    return arr
}