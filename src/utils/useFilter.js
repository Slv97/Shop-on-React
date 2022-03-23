export default function useFilter(textParam, nameOfTextParam) {
    let param = textParam.filter((element) => element.name.toLowerCase() === nameOfTextParam);

    if (param) return param;
}
