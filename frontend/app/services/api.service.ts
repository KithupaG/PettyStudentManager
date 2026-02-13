const WS_URL = "ws://192.168.1.8:8080";
let socket: WebSocket | null = null;

export const initWebSocket = (onMessageReceived: (data: any) => void) => {
  if (!socket || socket.readyState !== WebSocket.OPEN) {
    socket = new WebSocket(WS_URL);

    socket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      onMessageReceived(data);
    };

    socket.onerror = (e) => console.error("WS Error", e);
    socket.onclose = () => console.log("WS Disconnected");
  } else {
    socket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      onMessageReceived(data);
    };
  }
};

export const sendAction = (type: "ADD" | "UPDATE" | "DELETE", student: any) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify({ type, student }));
  } else {
    console.error("Cannot send action, WebSocket is not open");
  }
};
