// NOTE: Webview用のWindow拡張

type WebviewMessage = string;

interface Window {
  receiveMessageFromFlutter: (message: WebviewMessage) => void;
}
