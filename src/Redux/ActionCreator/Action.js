export const INC = "INC";
export const DEC = "DEC";


export const inc = (num) => (
    {
        type: INC,
        payload: { num },
    }
)




export const dec = (num) => (
    {
        type: DEC,
        payload: { num },
    }
)




