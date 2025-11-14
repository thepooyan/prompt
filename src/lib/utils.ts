import { promptType } from "@/db/schema"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const readableDate = (date: string) => {
  return new Date(date).toLocaleDateString("fa", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export const limitChar = (string: string, limit: number) => {
  if (string.length < limit) return string
  return string.substring(0, limit-3) + "..."
}

type func = () => void
export class CallbackStore {
  private yes: func | null = null
  private no: func | null = null
  setYes(callback: ()=>void) {
    this.yes = callback
  }
  setNo(callback: ()=>void) {
    this.no = callback
  }
  callYes() {
    this.yes && this.yes()
    this.clear()
  }
  callNo() {
    this.no && this.no()
    this.clear()
  }
  private clear() {
    this.yes = null
    this.no = null
  }
}

export async function copyToClipboard(text: string): Promise<void> {
    if (!navigator.clipboard) {
        // Fallback for browsers that do not support the Clipboard API
        fallbackCopyTextToClipboard(text);
        return;
    }

    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        console.error('Failed to copy text to clipboard:', err);
        // Fallback in case of error
        fallbackCopyTextToClipboard(text);
    }
}

function fallbackCopyTextToClipboard(text: string): void {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            console.log('Fallback: Text copied to clipboard successfully!');
        } else {
            console.error('Fallback: Failed to copy text to clipboard.');
        }
    } catch (err) {
        console.error('Fallback: Error copying text to clipboard:', err);
    }
    
    document.body.removeChild(textArea);
}



export const getTelegramShareUrl = (url:string , text:string) =>
  `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`

export const getTwitterShareUrl = (url: string, text: string) =>
  `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`

export function capitalize(type: promptType): string {
  switch (type) {
    case "prompt":
      return "Prompts"
    case "n8n":
      return "n8n"
  }
}

export const getEntityName = (type: promptType) => {
  switch (type) {
    case "prompt":
      return "پرامپت"
    case "n8n":
      return "n8n"
  }
}
