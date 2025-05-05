export const dataObject = (rate) => {
    return {
        rate: rate ? rate.rate : '',
    }
}

export const pageObject = (rate) => {
    return {
        title: rate ? 'Edit Rate' : 'Create Rate',
    }
}
