export default async function updateCharCount() {
  if (typeof window !== "undefined") {
    const textareaElement: HTMLTextAreaElement = document.getElementById(
      "textarea"
    ) as HTMLTextAreaElement;
    const typedcharsElement: HTMLParagraphElement = document.getElementById(
      "typedchars"
    ) as HTMLParagraphElement;

    typedcharsElement.textContent = String(textareaElement.value.length);
  }
}