package jiat.ws.server;

import com.google.gson.Gson;
import jiat.ws.dao.studentDAOImpl;
import jiat.ws.model.Student;
import org.java_websocket.WebSocket;
import org.java_websocket.handshake.ClientHandshake;

import org.java_websocket.server.WebSocketServer;

import java.net.InetSocketAddress;

public class StudentWebSocketServer extends WebSocketServer {
    private final studentDAOImpl dao = new studentDAOImpl();
    private final Gson gson = new Gson();

    public StudentWebSocketServer(int port) {
        super(new InetSocketAddress(port));
    }

    @Override
    public void onOpen(WebSocket conn, ClientHandshake handshake) {
        broadcastList();
    }

    @Override
    public void onMessage(WebSocket conn, String message) {
        try {
            SocketRequest request = gson.fromJson(message, SocketRequest.class);
            switch (request.type) {
                case "ADD":
                    dao.saveStudent(request.student);
                    break;
                case "UPDATE":
                    dao.updateStudent(request.student);
                    break;
                case "DELETE":
                    dao.deleteStudent(request.student.getId());
                    break;
            }
            broadcastList();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void broadcastList() {
        String jsonList = gson.toJson(dao.getAllStudents());
        broadcast(jsonList);
    }

    @Override
    public void onClose(WebSocket conn, int code, String reason, boolean remote) {}

    @Override
    public void onError(WebSocket conn, Exception ex) { ex.printStackTrace(); }

    @Override
    public void onStart() { System.out.println("WebSocket Server started on port: " + getPort()); }

    private static class SocketRequest {
        String type;
        Student student;
    }
}