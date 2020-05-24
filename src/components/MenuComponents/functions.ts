export function GetLabeledElement(element: HTMLElement, text: string)
{
    const label = document.createElement('LABEL') as HTMLLabelElement;
    label.style.display = 'flex';
    label.style.flexDirection = 'row';
    const textElement = document.createElement('TEXT');
    textElement.innerText = text;
    label.appendChild(element);
    label.appendChild(textElement);
    return label;
}