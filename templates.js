export const keysTemplate = (keyData) => {
    return `
        <div class="piano__item">
            ${keyData.name}
            <div class="piano__item--black">${keyData.name}</div>
        </div>
    `
}