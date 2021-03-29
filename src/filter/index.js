export const filterPayStatus = (state) => {
    return {
        1: '待支付',
        2: '支付成功',
        3: '支付失败'
    }[state];
}