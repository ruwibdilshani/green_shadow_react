export const base64ToImageURL = (base64: string) => {
    return `data:image/png;base64,${base64}`;
}