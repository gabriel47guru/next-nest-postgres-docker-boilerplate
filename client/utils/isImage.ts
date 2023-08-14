const imgTypesList = ["png" || "jpg" || "jpeg"]

export const isImage = (type: string) => imgTypesList.includes(type)
