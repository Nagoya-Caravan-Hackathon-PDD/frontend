// NOTE: Webview用のWindow拡張

type Message = string;

interface Window {
  receiveMessageFromFlutter: (message: Message) => void;
}
