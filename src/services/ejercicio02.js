export const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    let color = `rgb(${r}, ${g},${b})`;
    document.body.style.backgroundColor = color;
}